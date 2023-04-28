import type { AxiosRequestConfig, AxiosResponse } from 'axios'
import axios from 'axios'
import { showNotify, Toast } from 'vant'
import type { ComponentInstance } from 'vant/lib/utils'

const router = useRouter()

const instance = axios.create({
  baseURL: import.meta.env.VITE_API as string,
  timeout: 1000 * 30,
})

// 存储请求消息和取消方法
const peddingRequest = new Map<string, Function>()

// 根据请求信息生成key (请求方式 + url + 参数 + data, 生成map的key)
function generateKey(config: AxiosRequestConfig): string {
  const { method, url, params, data } = config
  return [method, url, JSON.stringify(params), JSON.stringify(data)].join('&')
}

let loading: ComponentInstance

// 防止多次请求loading重复加载
let loadingNum = 0
function startLoading() {
  if (loadingNum === 0) {
    loading = Toast.loading({
      duration: 0,
      loadingType: 'spinner',
    })
  }
  loadingNum++
}
function endLoading() {
  loadingNum--
  if (loadingNum <= 0)
    loading.clear()
}

// 删除请求信息
function delPendingRequest(config: AxiosRequestConfig): void {
  const requestKey = generateKey(config)
  if (peddingRequest.has(requestKey))
    peddingRequest.delete(requestKey)
}

/**
 * 请求失败后的错误统一处理
 * @param {Number} status 请求失败的状态码
 */
const erroeHandle = (status: number, other: string) => {
  switch (status) {
    case 401:
      showNotify({
        type: 'warning',
        message: other,
      })
      router.replace('/login')
      break
    case 403:
      showNotify({
        type: 'warning',
        message: other,
      })
      router.replace('/login')
      break
  }
}

// 请求拦截
instance.interceptors.request.use((config: AxiosRequestConfig) => {
  const { method } = config

  const requestKey = generateKey(config)
  // 如果已经存在相同的请求, 则取消之前的请求, 并删除请求信息
  if (peddingRequest.has(requestKey)) {
    const cancel = peddingRequest.get(requestKey)
    cancel && cancel()
    peddingRequest.delete(requestKey)
  }

  // 生成取消方法
  config.cancelToken = config.cancelToken || new axios.CancelToken((cancel) => {
    // 把取消方法添加到map
    if (!peddingRequest.has(requestKey))
      peddingRequest.set(requestKey, cancel)
  })

  // 请求头添加token
  const headers: any = {
    token: '',
  }

  // 不缓存get请求
  if (method === 'get')
    headers['Cache-Control'] = 'no-cache'

  startLoading()

  return {
    ...config,
    headers,
  }
})

// 响应拦截
instance.interceptors.response.use(
  (res: AxiosResponse<any>) => {
    const { status, data } = res

    // 请求成功, 删除请求信息
    delPendingRequest(res.config)

    if (status === 200) {
      Promise.resolve(res)
    }
    else {
      Promise.reject(res)

      router.replace('/login')
    }

    endLoading()

    return data
  },
  (error) => {
    const { response } = error

    // 请求错误 (不是取消请求的错误), 删除请求信息
    if (!axios.isCancel(error))
      delPendingRequest(error.config || {})

    endLoading()

    if (response) {
      erroeHandle(response.status, response.msg)
      return Promise.reject(error)
    }
    else {
      Toast.fail('没有网络!')
    }
  },
)

export const get = <R>(
  url: string,
  params?: Record<string, unknown>,
): Promise<R> => {
  return instance({
    method: 'get',
    url,
    params,
  })
}

export const post = <R>(
  url: string,
  data?: Record<string, unknown >,
): Promise<R> => {
  return instance({
    method: 'post',
    url,
    data,
  })
}
