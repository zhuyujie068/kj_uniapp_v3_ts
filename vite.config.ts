import { defineConfig } from "vite";
import uni from "@dcloudio/vite-plugin-uni";
import { resolve } from 'path';
import WindiCSS from 'vite-plugin-windicss'

function pathResolve(dir: string) {
  return resolve(process.cwd(), '.', dir);
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    WindiCSS({
      scan: {
        dirs: ['.'], // 当前目录下所有文件
        fileExtensions: ['vue', 'js', 'ts'], // 同时启用扫描vue/js/ts
      },
    }),
    uni()
  ],
  resolve: {
    // https://cn.vitejs.dev/config/shared-options.html#resolve-alias
    alias: [
      // /@/xxxx => src/xxxx
      {
        find: /\/@\//,
        replacement: pathResolve('src') + '/',
      },
    ],
  },
});
