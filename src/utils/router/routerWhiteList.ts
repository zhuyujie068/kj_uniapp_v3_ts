/**
 * @description 路由 白名单，不需要携带 token 就能访问的路由
 */
export const routerWhiteList = [
  '/', // 注意入口页必须直接写 '/'
  // { pattern: /^\/pages\/list.*/ }, // 支持正则表达式
  { pattern: /^\/pages\/login\/*/ },
  '/pages/index/index',
  // '/pages/login/index',
  '/pages/index/test'
]










