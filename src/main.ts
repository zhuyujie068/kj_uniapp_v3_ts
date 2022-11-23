import { createSSRApp } from "vue";
import App from "./App.vue";
import { setupStore } from '/@/store';
import * as Pinia from 'pinia';

export function createApp() {
  const app = createSSRApp(App);

  // pinia 仓库管理
  setupStore(app);

  return {
    app,
    Pinia, // 此处必须将 Pinia 返回 (uniapp 文件提示需要返回 https://uniapp.dcloud.net.cn/tutorial/vue3-pinia.html#%E4%BB%8B%E7%BB%8D)
  };
}
