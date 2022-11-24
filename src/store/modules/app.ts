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
  // // 开启数据缓存，去掉 strategies 就是当前 store 里的 state 对象中的数据全部进行缓存
  // persist: {
  //   key:'appStore',
  //   // storage: sessionStorage,   // 默认的是使用 localstorage 进行数据存储
  //   paths: ['title','version'],
  // },

  persist: {
    enabled: true, // 开启持久化
    /*
      默认情况下，存储被设置为 sessionStorage，但是您可以通过设置存储键来指定要为每个策略使用的存储。 
      然后可以使用 sessionstorage 或 localStorage。 
      你必须用“window?”因为localStorage和sessionStorage在其他平台上是未定义的。 
      优先级:strategies/storage > H5Storage > defaultStorage(sessionStorage)
    */
    strategies: [
      {
        key: 'appStore', // 存储时 key 
        paths: ['title'], // 需要存储的值，不配置该选项默认是整个store都存储
        storage: window?.sessionStorage,
      },
    ],
    // H5Storage: window?.localStorage,
  },
})