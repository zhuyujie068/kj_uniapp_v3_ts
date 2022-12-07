### 目录说明 
```shell
.
├── .hbuilderx # hbuilderx 配置
│   └── launch # 启动调试时相关设置
├── dist # 打包脚本相关
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