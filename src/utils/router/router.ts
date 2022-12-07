import { routerWhiteList } from "./routerWhiteList";
import { showToast } from "/@/utils/index";

/**
 * @description 路由拦截
 */
export async function interceptor() {
  const list = ['navigateTo', 'redirectTo', 'reLaunch', 'switchTab'];

  // 用遍历的方式分别为,uni.navigateTo,uni.redirectTo,uni.reLaunch,uni.switchTab这4个路由方法添加拦截器
  list.forEach(item => {
    uni.addInterceptor(item, {
      invoke(e) {
        // 获取要跳转的页面路径（url去掉"?"和"?"后的参数）
        const url = e.url.split('?')[0]
        console.log('+++路由跳转到：',url);

        // 判断当前窗口是白名单，如果是则不重定向路由
        let pass;
        if (routerWhiteList) {
          pass = routerWhiteList.some((item) => {
            if (typeof (item) === 'object' && item.pattern) {
              return item.pattern.test(url)
            }
            return url === item
          })
        }

        // 不是白名单并且没有token
        if (!pass && !uni.getStorageSync('token')) {
          execute();
          return false
        }
        return e
      },
      fail(err) { // 失败回调拦截
        console.log(err)
        showToast(JSON.stringify(err))
      }
    })
  })

  // #ifdef H5
  // 在h5模式下 浏览器 地址栏 输入地址切换路由 拦截
  let locationUrl = window.location.href.split("/#")[1] ?? window.location.pathname;
  locationUrl = locationUrl.split('?')[0]
  console.log('---地址栏切换到：',locationUrl);
  
  if (!routerWhiteList.includes(locationUrl) && !uni.getStorageSync('token')) {
    execute();
  }
  // #endif
}

/**
 * 跳转到登录页
 */
function execute() {
  showToast('请先登录')
  uni.redirectTo({
    url: "/pages/login/index"
  })
}
