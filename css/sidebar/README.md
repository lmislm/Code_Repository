## sass和Require.js
##### index.scss中引入的scss文件不同，
- 只能查看伪类实现效果，具体的Git到本地或其他方法即可
#### 准备
下载 [koala软件][1]
webstorm配置scss
####  Require.js
- 有效防止命名冲突
- 声明不同js文件中的依赖（不同文件引入模块）
- 可以让代码以模块化的方式组织

#### Require JS 常用方法
- require.js.config
- requirejs
- define 关键在于如何用define定义成一个个模块
> （1）实现js文件的异步加载，避免网页失去响应；
>（2）管理模块之间的依赖性，便于代码的编写和维护。

> 防止js加载阻塞页面渲染

../表示文件目录逐层索引
> require.js加载的模块，采用AMD规范。也就是说，模块必须按照AMD的规定来写。






  [1]: http://koala-app.com/index-zh.html
  ####

