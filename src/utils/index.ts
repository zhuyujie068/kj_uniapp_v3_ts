let loadingCount = 0; // loading 总数

/**
 * 显示 loading 提示框
 * @param title 提示文字
 * @param mask 是否显示透明蒙层，防止触摸穿透，默认：false
 */
export function showLoading(opts?: UniApp.ShowLoadingOptions) {
  const config = {
    title: opts?.title ?? '加载中...',
    success: function () {
      loadingCount++;
    }
  }

  uni.showLoading({
    ...config,
    ...opts
  });
}

/**
 * 隐藏 loading 提示框
 */
export function hideLoading() {
  loadingCount--;
  if (loadingCount == 0) {
    uni.hideLoading();
  }
}

/**
 * 显示消息提示框
 * @param title 提示文本
 * @param opts https://uniapp.dcloud.net.cn/api/ui/prompt.html#showtoast
 */
export function showToast(title: string, opts?: UniApp.ShowToastOptions) {
  const config = {
    title: title,
    icon: opts?.icon ?? 'none',
    duration: 3000,
  }

  uni.showToast({
    ...config,
    ...opts
  });
}

/**
 * 解析 url
 * @param fullPath url 完整路径 
 * @returns name url名称，path 路径，query 参数集
 */
export function parseUrl(fullPath: string) {
  const [path, queryStr] = fullPath.split('?')
  const name = path.slice(path.lastIndexOf('/') + 1)
  const query = {}
  queryStr?.split('&').map((i) => i.split('=')).forEach((i) => (query[i[0]] = i[1]))
  return {
    name,
    path,
    query,
  }
}

/**
 * 拼接 url
 * @param path url 路径
 * @param query query 参数集
 * @returns path 完整路径
 */
export function jointUrl(path: string, query?: Object) {
  let count = 0
  for (const key in query) {
    path += `${count === 0 ? '?' : '&'}${key}=${query[key]}`
    count += 1
  }
  return path
}