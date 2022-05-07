## 网站性能优化项目

### 测试步骤：
#### 1: 优化 index.html 的 PageSpeed Insights 得分

#### 2: 优化 pizza.html 的 FPS 和页面调整效率
1. 将这个代码库导出；
2. 在Chrome浏览器中打开views/pizza.html；
3. 按F12打开开发者工具；
4. 在Timeline(或performance)面板中点击录制按钮，然后滚动views/pizza.html
   页面，点击停止按钮，查看FPS（>60fps）；
5. 点击views/pizza.html页面上的pizza尺寸滑块调节pizza大小，在开发者工具
   的console面板查看调整时间（<5毫秒）。

### 采取的优化方法：
#### 1: 优化 index.html 的 PageSpeed Insights 得分
1. 同过PS软件和aTool网站对图片进行压缩；
2. 通过Webfont Loader 来实现异步载入google字体；
3. 将style.css内联；
4. 通过媒体查询media="print"避免不必要的载入；
5. 通过加入async，实现异步加载脚本。

#### 2: 优化 pizza.html 的 FPS 和页面调整效率
1. 对changePizzaSizes函数重写，减少了读取和设置width的步骤；
2. 在updatePositions函数内部：用变量在循环外存储document.body.scrollTop的值；
   用tramsform代替left去移动背景；将实现变化的函数放进requestAnimationFrame；
3. 用getelementById代替querySelector,
   用getElementsByClassName代替querySelectorAll；
4. 减少背景中pizza的个数；
5. 将style.css内联。

