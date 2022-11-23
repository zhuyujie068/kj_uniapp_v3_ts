import { defineStore } from 'pinia';

export const useAppStore = defineStore({
  id: 'app-store',
  state: () => ({
    title: 'Hello world！',
    version: '0.0.1',
  }),
  getters: {
    getTitle(): string {
      return this.title;
    }
  },
  actions: {
    changeTitle() {
      this.title = '你好，世界！';
    }
  },
  // 开启数据缓存，去掉 strategies 就是当前 store 里的 state 对象中的数据全部进行缓存
  persist: {
    key:'appStore',
    // storage: sessionStorage,   // 默认的是使用 localstorage 进行数据存储
    paths: ['title','version'],
  },
})