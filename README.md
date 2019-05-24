# occ-web 一个专注于性能与效率的前端微应用开发框架
# 派生于 [ucf-web](https://github.com/iuap-design/ucf-web)

> **ucf-web 是整个框架的代号，相关资源都在本仓库内维护，形成统一框架体系。**

## 关键特性

- 中台前端技术收敛化、标准化
- 三种微应用开发模式，打破铁桶一块的巨石应用
- UI 体验一致性，基于统一设计语言之上构建标准组件体系
- HTTP 通讯协议规范化，统一异常处理
- 可选择的模型驱动开发模式，基于元数据之上的统一快速开发

## 快速上手使用

```
$ npm i oc-cli -g
$ oc-cli init
$ cd xx && npm install
$ npm run dev
```


快速理解生成的标准工程：

```
xx-webapp
├── package.json
├── occ-apps         # 按应用模块划分的子应用模块
├── occ-common       # 项目级公共资源：图标字体、公共业务组件、工具方法、配置文件、常量等
├── occ-public       # 构建出的最终静态资源，可对接集成部署
└── occ.config.js    # 项目配置文件，默认好用，无需配置
```

occ-apps 下的三类微应用：
- 单体页面，简单直接；
- 单页应用SPA，完成功能级的相关页面；
- 模型驱动的应用mdfApp，动态扩展。
