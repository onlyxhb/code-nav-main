import { getApp } from '@/tcb'

const app = getApp()

/**
 * 获取标签
 */
export function getTags() {
  return app
    .callFunction({
      name: 'getTags',
      data: {}
    })
    .then((res: any) => {
      console.log(`getTags succeed`)
      return res.result
    })
    .catch((e: any) => {
      console.error(`getTags error`, e)
      return false
    })
}
