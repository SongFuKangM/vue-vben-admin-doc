import{o as l,c as t,a as i}from"./app.e859ea6c.js";const o='{"title":"跨域处理","description":"","frontmatter":{},"headers":[{"level":2,"title":"产生原因","slug":"产生原因"},{"level":2,"title":"解决方式","slug":"解决方式"}],"relativePath":"dep/cors.md","lastUpdated":1625157307929}',r={},e=i('<h1 id="跨域处理"><a class="header-anchor" href="#跨域处理" aria-hidden="true">#</a> 跨域处理</h1><h2 id="产生原因"><a class="header-anchor" href="#产生原因" aria-hidden="true">#</a> 产生原因</h2><p>跨域产生的原因是由于前端地址与后台接口不是同源,从而导致 ajax 不能发送</p><div class="tip custom-block"><p class="custom-block-title">非同源产生的问题</p><ol><li>Cookie、LocalStorage 和 IndexDB 无法获取</li><li>DOM 无法获得</li><li>AJAX 请求不能发送</li></ol></div><div class="tip custom-block"><p class="custom-block-title">同源条件</p><p><strong>协议</strong>，<strong>端口</strong>，<strong>主机</strong> 三者相同即为同源</p><p>反之，其中只要 <strong>某一个</strong> 不一样则为不同源</p></div><h2 id="解决方式"><a class="header-anchor" href="#解决方式" aria-hidden="true">#</a> 解决方式</h2><p><strong>本地开发跨域</strong></p><p>本地开发一般使用下面 3 种方式进行处理</p><ol><li>vite 的 proxy 进行代理</li><li>后台开启 cors</li><li>使用 nginx 转发请求</li></ol><p>项目内部自带第一种方式，具体可以参考<a href="./../guide/mock.html#配置">服务端交互-本地开发环境接口地址修改</a></p><p><strong>生产环境跨域</strong></p><p>生产环境一般使用下面 2 种方式进行处理</p><ol><li>后台开启 cors</li><li>使用 nginx 转发请求</li></ol><p><strong>后台开启 cors 不需要前端做任何改动</strong></p><p>nginx 配置文件可以查看<a href="./../guide/deploy.html#使用-nginx-处理跨域">nginx 配置</a></p>',15);r.render=function(i,o,r,a,s,n){return l(),t("div",null,[e])};export default r;export{o as __pageData};
