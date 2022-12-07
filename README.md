### 目录说明 
```shell
.
├── .hbuilderx # hbuilderx 配置
│   └── launch # 启动调试时相关设置
├── node_modules # npm 所有依赖的包
├── src
│   ├── api # api接口
│   ├── components # 组件
│   ├── directives  # 指令
│   ├── enums # 枚举、常量
│   ├── hooks # hooks
│   ├── pages # 页面
│   ├── static # 静态文件
│   ├── store # Pinia 数据仓库
│   ├── style  # 公共样式
│   ├── utils # 工具类 
│   │   ├── http # 请求
│   │   ├── router # 路由
│   │   └── index.ts # 常用工具
│   │
│   ├── App.vue # 入口文件
│   ├── env.d.ts # 全局声明
│   ├── main.ts # 主入口
│   ├── manifest.json # 应用配置文件
│   ├── pages.json # 全局配置文件
│   └── uni.scss # uni-app内置的常用样式变量
│
├── .env # 环境变量
├── .env.development # 开发环境变量
├── .env.production # 生产环境变量
├── .gitignore # git提交配置
├── index.html # 项目入口
├── package-lock.json
├── package.json
├── pnpm-lock.yaml
├── README.md
├── tsconfig.json # ts配置文件
├── vite.config.ts # vite配置文件
└── windi.config.ts # windcss配置文件
```

<!-- 
  TODO：UI 暂时不引用，因为 uview 不兼容 vue3.0
 -->

 ### 注意事项
1. **微信小程序**本身不支持由 **Tailwind/Windi CSS** 产生的选择器名称中包含的一些特殊转义字符（如 \[ \! \. 等），可以使用 @dcasia/mini-program-tailwind-webpack-plugin 插件可以使其支持，但是使用了该插件如果打包成 H5 会出现样式错误、样式失效。**如果该套代码需要在 微信小程序、H5 平台使用，不建议使用 Tailwind/Windi CSS**，如果现在想使用的话，可以在打包微信小程序的时候才使用该插件，打包H5的时候不使用该插件。
2. 微信小程序：[报错fail webview count limit exceed 解决方法](https://www.cnblogs.com/zwh0910/p/14034105.html)