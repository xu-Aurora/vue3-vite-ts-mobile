import dayjs from 'dayjs' // 时间格式化
import BigNumber from 'bignumber.js' // 处理精度丢失

/**
 * 判断值是否为空
 */
function isEmpty(value: any) {
  switch (typeof value) {
    case 'undefined':
      return true
    case 'string':
      if (value.replace(/(^[ \t\n\r]*)|([ \t\n\r]*$)/g, '').length === 0)
        return true
      break
    case 'boolean':
      if (!value)
        return true
      break
    case 'number':
      if (value === 0 || isNaN(value))
        return true
      break
    case 'object':
      if (value === null || value.length === 0)
        return true
      break
  }
  return false
}

/**
 * 金格格式化，每三位加逗号,并保留两位小数
 */
function formatPrice(val: number) {
  let value
  if (typeof val !== 'undefined') {
    if (val.toString().includes('.'))
      value = val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
    else
      value = `${val}.00`
  }
  else {
    value = 0
  }
  return value
}

// 深拷贝
function deepClone(obj) {
  function isClass(o) {
    if (o === null)
      return 'Null'
    if (o === undefined)
      return 'Undefined'
    return Object.prototype.toString.call(o).slice(8, -1)
  }
  let result
  const oClass = isClass(obj)
  if (oClass === 'Object')
    result = {}

  else if (oClass === 'Array')
    result = []

  else
    return obj

  for (const key in obj) {
    const copy = obj[key]
    if (isClass(copy) === 'Object')
      result[key] = arguments.callee(copy)// 递归调用

    else if (isClass(copy) === 'Array')
      result[key] = arguments.callee(copy)

    else
      result[key] = obj[key]
  }
  return result
}

/**
 * @param {*} tgt 目标数据
 * @param {*} type 数据类型
 */
function dataType(tgt, type) {
  const dataType = Object.prototype.toString.call(tgt).replace(/\[object /g, '').replace(/\]/g, '').toLowerCase()
  return type ? dataType === type : dataType
}

function formatDate(date: string) {
  return date && dayjs(date).format('YYYY-MM-DD')
}

// 判断客户端的类型
const browserInfo = {
  isAndroid: Boolean(navigator.userAgent.match(/android/ig)), // android
  isIos: Boolean(navigator.userAgent.match(/iphone|ipod/ig)), // ios
  isIpad: Boolean(navigator.userAgent.match(/ipad/ig)), // ipad
  isWeixin: Boolean(navigator.userAgent.match(/MicroMessenger/ig)), // 微信
  isAli: Boolean(navigator.userAgent.match(/AlipayClient/ig)), // 支付宝
  isPhone: Boolean(/(iPhone|iPad|iPod|iOS|Android)/i.test(navigator.userAgent)), // 手机端
}

// 加法
function plus(x: number, y: number) {
  return new BigNumber(x).plus(y)
}
// 减法
function minus(x: number, y: number) {
  return new BigNumber(x).minus(y)
}
// 乘法
function multipliedBy(x: number, y: number) {
  return new BigNumber(x).multipliedBy(y)
}
// 除法
function dividedBy(x: number, y: number) {
  return new BigNumber(x).dividedBy(y)
}

export {
  isEmpty,
  formatPrice,
  formatDate,
  browserInfo,
  plus,
  minus,
  multipliedBy,
  dividedBy,
  deepClone,
  dataType,
}
