const express = require('express');
const proxy = require('http-proxy-middleware');

const app = express();
app.use('/static', express.static('static'));
app.use('/assets', express.static('assets'));
app.use('/api', proxy({
  target: 'http://api.zhuishushenqi.com/',
  pathRewrite: { '^/api': '/' },
  changeOrigin: true
}));
app.use('/chapter', proxy({
  target: 'http://chapter2.zhuishushenqi.com/',
  pathRewrite: { '^/chapter': '/chapter' },
  changeOrigin: true
}));
app.use('/agent', proxy({
  target: 'http://statics.zhuishushenqi.com/',
  // pathRewrite: { '^/chapter': '/chapter' },
  changeOrigin: true
}));
app.use('/', express.static(`${__dirname}/dist`));
app.listen(8072);
console.log('服务器8072');

/**
 * 该server主要是做代理转发，因为小程序设置中只能填写自己的域名地址。
 *
 * 1、本域名（https://wpreader.linxins.com），以下简称 Host A
 * 2、访问 Honst A 经过nginx转发到当前server（8072端口），以下简称 Server B
 * 3、再由 Server B 经过不同的路由代理到第三方接口地址
 *
 * 主要的代理地址有：
 * https://wpreader.linxins.com/api        =>    http://api.zhuishushenqi.com/
 * https://wpreader.linxins.com/chapter    =>    http://chapter2.zhuishushenqi.com/
 * https://wpreader.linxins.com/agent      =>    http://statics.zhuishushenqi.com/
 *
 */