# cookie
## 前提
2 月份发布的 Chrome 80 版本中默认屏蔽了第三方的 Cookie
## 版本修改
SameSite从默认的None改为Lax。
## SameSite

1. Strict 仅允许一方请求携带 Cookie，即浏览器将只发送相同站点请求的 Cookie，即当前网页 URL 与请求目标 URL 完全一致。
1. Lax 允许部分第三方请求携带 Cookie
1. None 无论是否跨站都会发送 Cookie
## 影响范围
![](https://camo.githubusercontent.com/149e5a3d4eadf8a9f19f26ffc5de5a5f37a62da4/68747470733a2f2f67772e616c6963646e2e636f6d2f7466732f54423172473448794b4832674b306a535a4645585863714d7058612d313430302d3532382e706e67#align=left&display=inline&height=528&originHeight=528&originWidth=1400&status=done&style=none&width=1400)
对大部分 web 应用而言，Post 表单，iframe，AJAX，Image 这四种情况从以前的跨站会发送三方 Cookie，变成了不发送。
除了这些还有 script 的方式，这种方式也不会发送 Cookie，像淘宝的大部分请求都是 jsonp，如果涉及到跨站也有可能会被影响。

## 解决
将SameSite的值从Lax改为None。
### 注意

1. HTTP 接口不支持 SameSite=none
   - 如果你想加 SameSite=none 属性，那么该 Cookie 就必须同时加上 Secure 属性，表示只有在 HTTPS 协议下该 Cookie 才会被发送。
2. 需要 UA 检测，部分浏览器不能加 SameSite=none
   - IOS 12 的 Safari 以及老版本的一些 Chrome 会把 SameSite=none 识别成 SameSite=Strict，所以服务端必须在下发 Set-Cookie 响应头时进行 User-Agent 检测，对这些浏览器不下发 SameSite=none 属性
### 补充
http-only 无法被网页脚本读取，不限制传输通路的安全性
secure 可以被网页脚本读取，只允许通过安全通路发送给服务器

---

[参考文档](https://github.com/mqyqingfeng/Blog/issues/157#)


