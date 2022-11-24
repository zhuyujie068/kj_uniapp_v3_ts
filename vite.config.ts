import { defineConfig, loadEnv } from "vite";
import uni from "@dcloudio/vite-plugin-uni";
import { resolve } from 'path';
import WindiCSS from 'vite-plugin-windicss'

function pathResolve(dir: string) {
  return resolve(process.cwd(), '.', dir);
}

// https://vitejs.dev/config/
export default ({ mode }) => defineConfig({
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
  // https://cn.vitejs.dev/config/server-options.html#server-proxy
  server: {
    port: Number(loadEnv(mode, process.cwd()).VITE_PORT),
    open: true, //自动打开
    base: './ ', //生产环境路径
    proxy: {
      // 本地开发环境通过代理实现跨域，生产环境使用 nginx 转发
      // 正则表达式写法
      '^/api': {
        target: loadEnv(mode, process.cwd()).VITE_PROXY_API, // 后端服务实际地址
        changeOrigin: true, //开启代理
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  }
});
