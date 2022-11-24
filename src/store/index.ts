import type { App } from 'vue';
import { createPinia } from 'pinia';
// import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
// import { createPersistedState } from 'pinia-plugin-persistedstate'  // 暂时使用 pinia-plugin-persistedstate 看其他平台兼容性怎么样，可能会修改成 pinia-plugin-persist-uni

import piniaPersist from 'pinia-plugin-persist-uni'

const store = createPinia();
// store.use(piniaPluginPersistedstate)
// store.use(
//   // 使用 uniapp 的 api 进行数据存取 https://blog.csdn.net/weixin_47077674/article/details/124684551
//   createPersistedState({
//     storage: {
//       getItem(key: string): string | null {
//         debugger
//         return uni.getStorageSync(key)
//       },
//       setItem(key: string, value: string) {
//         uni.setStorageSync(key, value)
//       }
//     }
//   })
// )

store.use(piniaPersist)

export function setupStore(app: App<Element>) {
  app.use(store);
}