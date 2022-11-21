const path = require('path')
const PrerenderSPAPlugin = require('prerender-spa-plugin');
const routes = require('./src/config/prerender');
const Renderer = PrerenderSPAPlugin.PuppeteerRenderer;
const px2rem = require('postcss-px2rem')
const postcss = px2rem({ remUnit: 64 })

function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  // publicPath: process.env.NODE_ENV === 'production' ? 'https://static.chaodp.com/chao_portal3.0/' : '/',
  publicPath: '/',
  outputDir: 'dist',
  assetsDir: 'assets',
  runtimeCompiler: false,
  productionSourceMap: false,
  parallel: true,
  configureWebpack: config => {
    let _config = {
      plugins: []
    }
    _config.resolve = {
      alias: {
        utils: resolve('src/utils'),
        api: resolve('src/api/index.js'),
        config: resolve('src/config/app.js'),
      }
    };
    if (process.env.NODE_ENV === 'production') {
      _config.plugins.push(
        new PrerenderSPAPlugin({
          staticDir: path.join(__dirname, 'dist'),
          outputDir: path.join(__dirname, 'dist'),
          routes,
          renderer: new Renderer({
            inject: {
              foo: 'bar'
            },
            headless: true,
            // 在 main.js 中 document.dispatchEvent(new Event('render-event'))，两者的事件名称要对应上。
            renderAfterDocumentEvent: 'render-event'
          })
        })
      )
    }
    return _config
  },
  devServer: {
    host: '0.0.0.0',
    port: 3000,
    open: true,
    proxy: {
      '/api/*': {
        target: 'http://180.168.166.147:8888',
        changeOrigin: true,
        secure: false,
        pathRewrite:{
          '^/api':''
        }
      },
      '/upload/*': {
        target: 'https://erp.hyp-arch.com',
        changeOrigin: true,
        secure: false,
        pathRewrite:{
          '^/upload':''
        }
      },
      
    },
  },
  css: {
    loaderOptions: {
      less: {},
      // postcss: {
      //   plugins: [postcss],
      // }
    }
  }
}
