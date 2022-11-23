import { defineStore } from 'pinia';

export const useAppStore = defineStore({
    id: 'app-store',
    state: () => ({
      title: 'Hello world！',
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
    }
})