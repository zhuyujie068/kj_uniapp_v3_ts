
import { apiWhiteList } from "./apiWhiteList";
import { showLoading, hideLoading, showToast } from "/@/utils/index";

// 根地址
const baseUrl = import.meta.env.VITE_REQUEST_URL

/**
 * 添加拦截器
 */
uni.addInterceptor('request', {
  // 请求拦截器
  invoke(args) {
    // console.log('请求详情：', args);

    // 当本地没有token，并且接口地址没在白名单内，一律跳转登录页面
    if (!uni.getStorageSync('token') && !apiWhiteList.includes(args.url)) {
      showToast('登录信息已过期，请重新登录');
      uni.navigateTo({
        url: "/pages/index/index",
      });
      hideLoading()
      return false
    }

    // request 触发前拼接 url
    args.url = baseUrl + args.url

    //设置请求头及token
    args.header = {
      'content-type': args.method === 'POST' ? 'application/json; charset=utf-8' : 'application/x-www-form-urlencoded',
      'Authori-zation': 'Bearer ' + uni.getStorageSync('token')
    }
  },

  // 响应拦截器，可以对数据进行预处理
  success(res) {
    // console.log('响应拦截器 --> 返回数据：', res);

    if (res.statusCode === 200) {
      return res.data
    } else {
      showToast('服务器错误');
      return false
    }
  },
  // 失败回调拦截
  fail(err) {
    showToast(err.errMsg);
    // console.log('请求拦截器 --> 接口调用失败，错误信息：', err.errMsg)
  },
  // 完成回调拦截
  complete() {
    hideLoading()
  }
})

function processingCode(code: string) {
  switch (code) { // 拦截返回参数
    case '1003':
      uni.showModal({
        title: '登录已过期',
        content: '很抱歉，登录已过期，请重新登录',
        confirmText: '重新登录',
        success: function (res) {
          if (res.confirm) {
            //去登录页面
            uni.navigateTo({
              url: '/pages/index/index'
            });
          } else if (res.cancel) {
            console.log('用户点击取消');
          }
        }
      })
      break;

    case '500':
      showToast('请求数据失败');
      break
  }
}

const request = <T = any>(url: string, data: Record<string, any> = {}, config: Record<string, any> = {}): Promise<T> => {
  return new Promise((resolve, reject) => {
    // 加载loading
    if (config.loading) {
      showLoading()
    }

    const defaultConfig = {
      url,
      data,
      timeout: 10000,
      success: (res: any) => {
        processingCode(res.data.code)
        resolve(res.data.result)
      },
      fail(err) {
        reject(err)
      },
    }

    uni.request(Object.assign(defaultConfig, config))
  })
}

// get请求
export const get = <T = any>(url: string, data: Record<string, any> = {}, config: Record<string, any> = {}): Promise<T> => {
  return request(url, data, { method: 'GET', ...config })
}

// post请求
export const post = <T = any>(url: string, data: Record<string, any> = {}, config: Record<string, any> = {}): Promise<T> => {
  return request(url, data, { method: 'POST', ...config })
}

