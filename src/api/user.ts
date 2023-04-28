import { get } from '@/utils/http'

export function getUserInfo(parmas: Record<string, unknown>) {
  return get('/user/info', parmas)
}
