# 巢搭配官网

## 安装依赖
```
npm install
```

### 运行
```
npm run dev
```

### 打包
```
npm run build
```


## 目录结构介绍 ##

	|-- dist                             // 打包目录
	|-- src                              // 源码目录
	|   |-- api                          // Api接口目录
	|   |-- assets                       // 静态资源，你的css、图片、字体等。
	|   |-- components                   // 全局组件
	|   |-- config                       // 应用的配置文件
	|       |-- app.js                   // 应用的配置，axios请求配置，px2rem基准值
	|   |-- utils                        // 工具函数
	|       |-- request.js               // 请求封装
	|       |-- setHtmlFontSize.js       // 设置根元素字体大小，配合rem做屏幕适配
	|   |-- pages                        // 页面视图
	|       |-- index                    // 首页
	|       |-- common.js                // 每个页面公共的js，可以引公共的css，js
	|-- .gitignore                       // 忽略的文件
	|-- page.config.js                   // 使用node读取pages文件夹下的文件夹配置到vue cli3
	|-- vue.config.js                    // vue cli 配置
	|-- README.md                        // 说明
