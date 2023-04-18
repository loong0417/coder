# 01. 样式篇
---
1. 行内样式 inline style
2. 内部样式 
3. 外部样式

# 02. font
---
1. font-family
2. font-weights
3. font-style
4. font-size

- 复合样式写法：
5. font：font-style font-weight font-size（必要的）/line-height font-family（必要的）
- 注意：其中font-size和font-family两者是必要的，如果没有这两个所有设置的字体样式将无效。

# 03. text
---
1. color
2. text-align
3. text-decoration
- none
- underline
- overline
- line-through
4. text-indent
5. line-height
- 行间距由上边距+文本高度+下边距组成的。

# 04. background
---
**背景颜色：**
1. background-color
- transparent
- color

**背景图片：**
2. background-image
- none
- url(url)

**背景平铺：**
3. background-repeat
- repeat
- no-repeat
- repeat-x
- repeat-y

**背景图片位置：**
4. background-position：x,y

**`方位名词：`**
- 如果指定的两个值都是方位名词，则两个值前后顺序无关，比如top，left 和 left，top效果是一致的。（因为left，right肯定指的是x轴。而top，bottom肯定指的是y轴。）
- 如果只指定了一个方位名词，另一个省略，则第二个值默认居中对齐。
- top，center，bottom，left，right
- 语法：background-position：right,top

**`精确单位：`**
- 如果参数值是精确坐标，那么第一个肯定是x坐标，第二个是y坐标。
- 如果只指定一数值，那么该数值一定是x坐标，另一个默认垂直居中。
- 语法：background-position：20px 50px.

**`参数是混合单位：`**
- 如果指定的两个值是精确单位和方位名词混合使用的，则第一个值是x坐标，第二个值是y坐标。（混合单位一定是有顺序关系的）

**背景图像固定：**
> 属性设置背景图像是否固定或者随着页面的其余部分滚动。
> background-attachment后期可以制作视差滚动的效果。
5. background-attachment
- scroll 滚动的，背景图像是随对象内容滚动的（默认值）。
- fixed  固定的，背景图像固定。

**背景图片简写：**
> 背景图片的简写不像font那样有明确的顺序要求。
> 但是通常我们常用的方式顺序如下。
background:背景颜色 背景图片 背景平铺 背景图片滚动 背景图片位置；

**背景色半透明：**
```css
  /* 使用rgba方式完成背景色半透明 */
  background:rgba(0,0,0,0.3)
```
- 最后一个参数是alpha透明度，取值范围在0~1之间。
- 在实际开发中习惯将0.3的0省略掉，写为background:rgba(0,0,0,.3)。
- 注意：背景半透明是指盒子背景半透明，盒子里面的内容不受影响。

# 05. CSS的三大特性
---
1. **层叠性：** 相同的选择器设置相同的样式，此时一个样式就会覆盖(层叠)另一个样式。层叠性主要解决的是样式冲突问题。
- 样式冲突，遵循的原则是`就近原则`，哪个离结构近就执行哪个样式。
- 样式不冲突，不会层叠（也可以说后面的覆盖前面的）。

2. **继承性：** 子标签会继承父标签的某些样式，如文本颜色和字号。简单理解：继承父业。
- 恰当的使用继承可以简化代码，降低CSS样式的复杂性。
- 子元素可以继承父元素样式（text-，font-，line-这些元素开头的可以继承，以及color）。

3. **优先级：** CSS是通过权重来实现优先级的。

|        选择器         | 选择器优先级 |
| :-------------------: | :----------: |
|  继承或者*（通配符）  |  0，0，0，0  |
|      元素选择器       |  0，0，0，1  |
| 类选择器，伪类选择器  |  0，0，1，0  |
|       ID选择器        |  0，1，0，0  |
| 行内样式 inline-style |  1，0，0，0  |
|   !important重要的    |    无穷大    |

**优先级注意点：**
- 权重是4个数字组成的，但是不会进位。
- 可以理解为类选择器永远大于元素选择器，ID选择器永远大于类选择器。
- 等级判断是从左向右，如果某一位数值相同，则判断下一位数值。
- 注意：继承的权重是0，如果该元素没有直接选中，不管父元素权重多高，子元素得到的权重都是0。

- `权重会叠加，但是不会进位`。

06. 盒子模型
---
> 页面布局三大核心：盒子模型，浮动，定位。

**盒模型的组成：**
content，padding，border，margin

**边框样式：**
1. border-width
2. border-color
3. border-style

- 简写形式：border 1px red solid

**注意外边距合并：**
1. 相邻块元素垂直外边距的合并，取两个值中较大者这种现象被称为"相邻块元素垂直外边距的合并"。
- 解决方案：只需要给一个盒子设置margin就可以了。

2. 嵌套块元素垂直外边距的塌陷（也就是父子元素嵌套）。
- 对于两个嵌套关系（父子关系）的块元素，父元素有上外边距，同时子元素也有上外边距，此时父元素会塌陷较大的外边距值。
- 解决方案：
1. 可以为父元素定义上边框。
2. 可以为父元素定义上内边距。（例如：padding:1px就可以解决）
3. 可以为父元素添加overflow:hidden。

# 06. 圆角变宽
---
1. border-radius

# 07. 盒子阴影
---
1. box-shadow
- h-shadow    必需。水平阴影的位置。
- v-shadow    必需。垂直阴影的位置。
- blur        可选。模糊距离。
- spread      可选。阴影尺寸。
- color       可选。阴影的颜色。
- inset       可选。将外部阴影（outset）改为内部阴影。

注意：outset外阴影是默认值，是不可以写的，写完之后阴影会取消。

# 08. 文字阴影
---
1. text-shadow
- h-shadow    必需。水平阴影的位置。
- v-shadow    必需。垂直阴影的位置。
- blur        可选。模糊距离。
- color       可选。阴影的颜色。

注意：文字阴影使用较少。

# 09. 浮动布局
---
**传统网页布局的方式：**
1. 普通流（标准流）
- 从上到下，从左到右进行排列。

2. 浮动

3. 定位

**浮动语法：**
1. float
- left
- right

**浮动特性：**
- 浮动元素会脱离标准文档流（浮动的元素不会再保留原来的位置）。
- 浮动的元素会在一行内显示并且元素顶部对齐（如果一行显示不完，就会自动折行显示）。
- 浮动元素会具有行内块元素特性（行内元素添加浮动后直接变成行内块元素可以设置宽高，没有设置宽度，宽度就由内容撑开）。

注意：
1. 任何元素都可以浮动。不管原先是什么模式的元素，添加浮动之后具有行内块元素相似的特征。
2. 如果块级盒子没有设置宽度，默认和父级宽度一样，但添加浮动后，它的宽度根据内容来决定的。

**浮动布局注意点：**
1. 浮动和标准流的父盒子搭配。
- 先用标准流的父元素排列上下位置，之后内部子元素采取浮动排列左右位置。

2. 一个元素浮动了，理论上其余的兄弟元素也要浮动。
- 一个盒子里面有多个子盒子，如果其中一个盒子浮动了，那么其它兄弟也应该浮动，以防止引起问题。
- 浮动的盒子只会影响浮动的盒子后面的标准流，不会影响前面的标准流。

**清除浮动：**
1. 清除浮动的本质是，清除浮动元素造成的影响。
2. 如果父盒子本身有高度，则不需要清除浮动。
3. 清除浮动之后，父级就会根据浮动的盒子自动检测高度。父级有了高度，就不会影响下面的标准流了。

**清除浮动语法：**
```css
  /* 方式一： 在盒子末尾添加一个空块级标签 */
  选择器{
    clear:both;
  }

  /* 方式二： 给父级设置一个overflow:hidden */
  overflow:hidden;

  /* 方式三： 使用伪元素方式 */
  .clearfix:after{
    content:'';
    display:block;
    clear:both;

    height:0;
    visibility:hidden;
  }
  /* IE6,7专有的 */
  .clearfix{
    *zoom:1;
  }

  /* 方式四： 双伪元素清除*/
  .clearfix:before,.clearfix:after{
    content:'';
    display:table;
  }
  .clearfix:after{
    clear:both;
  }
  .clearfix{
    *zoom:1
  }
```
- left
- right
- both

**什么情况下需要清除浮动：**
1. 父级没有高度。
2. 子盒子浮动了。
3. 影响下面布局了，我们就可以清除浮动。

# 10. 定位布局
---
1. 定位：将盒子定在某一个位置，所以定位也是摆放盒子，按照定位的方式移动盒子。
2. 定位的组成：定位 = 定位模式 + 边偏移。
- 定位模式用于指定一个元素在文档中的定位方式。
- 边偏移则决定了该元素的最终位置。


|     定位模式      |     是否脱标     |            移动位置            |  是否常用  |
| :---------------: | :--------------: | :----------------------------: | :--------: |
|  static 静态定位  |        否        |         不能使用边偏移         |    很少    |
| relative 相对定位 |  否（占有位置）  |       相对于自身位置移动       |    常用    |
| absolute 绝对定位 | 是（不占有位置） | 带有定位的父级（相对父级移动） |    常用    |
|  fixed 固定定位   | 是（不占有位置） |          浏览器可视区          |    常用    |
|  sticky 粘性定位  |  否（占有位置）  |          浏览器可视区          | 当前阶段少 |

**定位模式：position**
- `static     静态定位`
1. 静态定位按照标准流特性摆放位置，它没有边偏移。
2. 静态定位在布局时很少用到。

- `relative   相对定位`
1. 相对定位是元素在移动位置的时候，是相对它原来的位置来说的。
2. 它是相对于自己原来的位置来移动的（移动位置的时候参照点是自己原来的位置）。
3. 原来在标准流的位置继续占有，后面的盒子仍然以标准流的方式对待它。（不脱标，继续保留原来的位置）

- `absolute   绝对定位`
1. 绝对定位是元素在移动位置的时候，是相对于它祖先元素来说的。
2. 如果没有祖先元素或者祖先元素没有定位，则以浏览器为准定位（Document文档）。
3. 如果祖先元素有定位（相对定位，绝对定位，固定定位），则以最近一级的有定位祖先元素为参考点移动位置。
4. 绝对定位不再占有原先的位置。（脱标）

- `fixed      固定定位`
1. 固定定位是元素固定于浏览器可视区的位置。主要使用场景：可以在浏览器页面滚动时元素的位置不会发生变化。
2. 以浏览器的可视窗口为参照点移动元素的。（跟父元素没有任何关系，不会随着浏览器的滚动而滚动）
3. 固定定位不再占有原来的位置（固定定位也是脱标的，其实固定定位也可以看作是一种特殊的绝对定位）。

- `sticky     粘性定位`
1. 粘性定位可以被认为是相对定位和固定定位的混合。position:sticky。
2. 以浏览器的可视窗口为参照点移动元素（固定定位特点）。
3. 粘性位置占有原先的位置（相对定位的特点）。
4. 必须添加边偏移top，bottom，left，right其中的一个才有效。
注意：sticky粘性定位兼容性比较差，兼容性差，IE不支持。

**边偏移：**
- top
- bottom
- left
- right

**定位使用：**
1. 子绝对定位，父相对定位（子绝父相）。

**定位的叠放次序：**
1. 通过z-index属性来设置。
```css
  选择器{
    z-index:1
  }
```
- 数值可以是正整数，负整数或0，默认是auto，数值越大，盒子越靠上。
- 如果它们的值是相同的，就按照书写顺序，后者居上。
- 数值后面不能加单位。
- 只有定位的盒子才有z-index属性。

**定位扩展：**
1. 绝对定位的盒子居中
> 加了绝对定位的盒子不能通过 `margin:0 auto` 水平居中的，但是可以通过计算的方式实现水平和垂直居中。
- position:absolute;
- left:50%; margin-left:元素宽度的一半；
- right:50%; margin-top:元素高度的一半。

2. 固定定位也可以使用上面的方式。position:fixed

3. 定位的特殊性。
> 绝对定位和固定定位也和浮动类似。
- 行内元素添加绝对定位或固定定位，可以直接设置高度和宽度。
- 块级元素添加绝对定位或固定定位，如果不给宽度或者高度，默认大小（宽度/高度由内容撑开）是内容的大小。

4. 绝对定位（固定定位）会完全压住盒子。
- 注意：浮动元素不同，只会压住下面标准流的盒子，但不会压住下面标准流盒子里面的文字（图片）。（浮动元素不会压住下面标准流的文字）
- 但是绝对定位（固定定位）会压住下面标准流所有的内容。

- 注意：浮动元素为什么不会压住下面标准流的文字？浮动之所以不会压住文字，因为浮动产生的目的最初是为了做文字环绕效果的，文字会围绕浮动元素。

# 11. 元素的显示与隐藏
---
1. `display     显示隐藏`
- none  隐藏元素后，不再占有原来的位置。
- block
- inline-block
- inline

2. `visibility  显示隐藏`
- visible  元素可视
- hidden   元素隐藏，元素隐藏后，继续占有原来的位置。
- inherit  继承上一个父对象的可见性
- collapse 主要用于隐藏表格的行或者列。

3. `overflow    溢出显示隐藏`
- visible
- hidden   溢出部分隐藏。
- scroll   不溢出的时候也显示滚动条（溢出或者不溢出都显示滚动条）。
- auto     高度超出显示滚动条，不超出就不显示滚动条。
注意：一般情况下可以使用，如果有使用定位的地方，慎用溢出隐藏，如果定位元素超出盒子，就会切掉。

# 12.【CSS高级】精灵图
---
**精灵图的作用：Sprites**
- 一个网页中往往会应用很多小的背景图像作为修饰，当网页中的图像过多时，服务器就会频繁地接收和发送请求图片，造成服务器请求压力过大，这将大大降低页面的加载速度。
- 为了有效地减少服务器接收和发送请求的次数，提高页面的加载速度。

- 核心原理：将网页中的一些小背景图像整合到一张大图中，这样服务器只需要一次请求就可以了。

**精灵图的使用：**
1. `精灵图技术主要是针对背景图片使用`，就是把多个小背景图片整合到一张大图中。
2. Sprites 精灵图或者雪碧图。
3. 移动背景图片的位置，此时可以使用background-position。
4. 移动的距离就是这个目标图片的x和y坐标。注意网页中的坐标是有所不同的。
5. `往上往左移动是负值。往下往右移动是正值。`
6. 使用精灵图的时候需要精确测量，每个小背景图片的大小和位置。 

# 13.【CSS高级】字体图标库
---
**字体图标使用场景：iconfont**
1. 主要用于显示网页中通用，常用的一些小图标。
2. 精灵图是有优点的，但是缺点也是很明显。
- 图片文件还是较大的。
- 图片本身放大和缩小会失真。
- 一旦图片制作完成，想要更换是非常复杂的。

**字体图标库的优点：**
1. 轻量级：一个图标字体要比一系列的图像要小。一旦字体加载了，图标就会马上渲染出来，较少服务器请求。
2. 灵活性：本质其实是文字，可以随意的更改颜色，产生阴影，透明，旋转等效果。
3. 兼容性：几乎支持所有的浏览器，可以放心使用。
注意：字体图标不能替代精灵图技术，只是对工作中图标部分技术的提升和优化。

**总结：**
1. 如果遇到一些结构和样式比较简单的小图标，就使用字体图标。
2. 如果遇到一些结构和样式复杂一点的小图片，就是用精灵图。

**常用的字体图标库：**
1. icomoon字库 http://icomoon.io
- 成立于2011年，推出了第一个自定义图标字体生成器，它允许用户选择所需要的图标，使他们成一字型（也是免费的）。
- 该字库内容种类繁多，非常全面，唯一的遗憾是国外服务器，打开网速较慢。

2. 阿里iconfont字库 http://www.iconfont.cn
- 这个是阿里巴巴的一个iconfont字体图标库，包含淘宝图标和阿里巴巴图标库，可以使用AI制作成图标上传生成，重点是：免费的。

# 14.【CSS高级】三角形实现使用场景
---
1. CSS三角形案例1：
```css
.box{
      width: 0px;
      height: 0px;
      border-top: 100px solid pink;
      border-bottom: 100px solid blue;
      border-left: 100px solid red;
      border-right: 100px solid yellow;      
    }
```
2. CSS三角形案例2：
```html
<head>
  <title>Document</title>
  <style>
    .content{
      position: relative;
      width: 100px;
      height: 100px;
      background-color: red;
    }

    .box{
      position: absolute;
      right: 0;
      top: 20px;
      margin-right: -20px;
      width: 0px;
      height: 0px;
      /* border-top: 10px solid transparent;
      border-bottom: 10px solid transparent;
      border-right: 10px solid transparent; */
      border-left: 10px solid red;
    }
  </style>
</head>

<body>
  <div class="content">
    <div class="box"></div>
  </div>
</body>
```
# 15.【CSS高级】CSS用户界面样式
---
**鼠标样式：**
1. cursor
- default
- pointer
- move
- text
- not-allowed
---
**表单轮廓线：**
1. outline:none 取消表单轮廓线
---

**防止拖拽文本域：**

> textarea文本域防止拖拽。

1. resize:none

```css
  textarea{
    resize:none;
  }
```
---

**vertical-align属性：**
1. vertical-align使用场景：经常用于设置图片或者表单（行内块元素）和文字垂直对齐。
2. 用于设置一个元素的垂直对齐方式，但是它只针对行内元素或者行内块元素。

3. vertical-align
- top 顶线（top line），把元素的顶端与行中最高元素的顶端对齐。
- middle 中线（middle line），把此元素放置在父元素的中部。
- baseline  默认（base line）。基线，元素放置在父元素的基线上。
- bottom 底线（bottom line），把元素的顶端与行中最低的元素的顶端对齐。

`解决图片底部默认空白缝隙问题：`
> 问题描述：就是div里面包含一张图片，给div加上边框，会发现图片底部有一个缝隙，产生这个缝隙的主要原因是因为行内块元素和文字之间是基线对齐的 baseline。

- 解决方式1：给图片添加 vertical-align:middle，top，bottom三个属性中的一个就可以解决这个问题。

- 解决方式2：将图片转换成块级元素。display:block。只有行内块会产生空隙，而块元素不会产生空隙。vertical-align也是只用于行内块。
---

**单行文字溢出：**
> 单行文本溢出显示省略号，必须满足三个条件。
```css
  /* 1. 先强制一行内显示文本(默认normal自动换行) */
  white-space:nowrap;
  /* 2. 超出部分隐藏 */
  overflow:hidden;
  /* 文字用省略号代替超出部分 */
  text-overflow:ellipsis;
```
---

**多行文字溢出：**
> 多行文本溢出显示省略号，有较大的兼容性问题，适合于webkit浏览器或者移动端（移动端大部分是webkit内核）。
```css
  overflow:hidden;
  text-overflow:ellipsis;
  /* 弹性伸缩盒子模型显示 */
  display:-webkit-box;
  /* 限制在一个块元素显示的文本的行数 */
  -webkit-line-clamp:2;
  /* 设置或检索伸缩盒对象的子元素的排列方式 */
  -webkit-box-orient:vertical;

```
注意：多行文本溢出隐藏这里是一定要给盒子设置宽高度的，高度和需要显示的文本行数是一行的（文本行数是刚好放在盒子里面的）否则就会出现第二行虽然显示了省略号，但是第三行文本依然显示着的。

# 16.【CSS3高级】盒子模型
---
> CSS3中可以通过box-sizing来指定盒模型，有2个值：即可指定为content-box，border-box，这样我们计算盒子大小的方式就发生了改变。

1. box-sizing:content-box 盒子大小为 width + padding + border（以前默认的）。
2. box-sizing:border-box 盒子大小为width。
3. 如果盒子模型我们改为了box-sizing:border-box，那padding和border就不会撑大盒子了（前提是padding和border不会超过width宽度）。

# 17.【CSS3高级】图片模糊处理filter
---
1. CSS3滤镜filter属性将模糊或颜色偏移等图形效果应用于元素。
2. 语法：filter:函数()；
3. filter:blur(5px) blur函数中的数字越大越模糊。

# 18.【CSS3高级】宽度计算calc函数
---
1. 语法：width:calc(100%-30px) 子盒子宽度比父盒子小30px。
2. calc函数中可以进行加减乘除计算。

# 19.【CSS3高级】过渡【重点】
---
> `哪个元素需要使用过渡，就给哪个元素加过渡。`

1. 过渡（transition）是CSS3中具有颠覆性的特征之一，我们可以在不使用Flash动画或JavaScript的情况下，当元素从一种样式变换为另一种样式时为元素添加效果。
2. 过渡动画：是从一个状态渐渐的过渡到另一个状态。
3. 可以让页面更好看，更动感十足，虽然低版本浏览器不支持（IE9以下版本），但是不会影响页面布局。

注意：使用经常和:hover一起搭配使用。

**过渡语法：**
- 语法：transition:要过渡的属性 花费时间 运动曲线 何时开始；
1. 属性：想要变化的CSS属性，宽度高度，背景颜色，内外边距都可以。如果想要所有的属性都变化过渡，写一个 all 就可以了。
2. 花费时间：单位是秒（必须写单位）比如：0.5s。
3. 运动曲线：默认是 ease 减速（可以省略）。
- linear 匀速
- ease-in 加速
- ease-out 减速（和ease相似）
- ease-in-out 先加速后减速
- cubic-bezier 贝塞尔曲线  （生成贝塞尔曲线：http://cubic-bezier.com）

4. 何时开始：单位是秒（必须写单位）可以设置延迟触发时间，默认是0s（可以省略）。

```css
/* 
 1. 多个属性的过渡中间使用逗号进行隔开 
 transition：1s width ，2s height，3s background;  
 
 2. 1s 过渡width，2s 过渡 height，3s 过渡 background
 transition：1s width ，2s  1s height，3s  1s background;
 1s 过渡 width。
 2s 延迟，再用 1s 过渡 height。
 3s 延迟，再用 1s 过渡 background。
*/
```
# 20.【CSS3高级】2D转换
---
1. 转换（transform）是CSS3中颠覆性的特征之一，可以实现元素的位移，旋转，缩放等效果。
- 移动：translate
- 旋转：rotate
- 缩放：scale

**移动（translate）：**
> 一般情况下移动盒子的位置有三种方式：定位，盒子的外边距，2D转换。

1. 语法：
- transform:translate(x,y)x和y分别指的是x轴上移动的位置和y轴上移动的位置（需要带单位像素）。
- transform:translateX(n)
- transform:translateY(n)

2. 移动的特点（重点）：
- 定义2D转换中的移动，沿着x轴和y轴移动元素。
- translate最大的优点：不会影响到其它元素的位置。
- translate中的百分比单位是相对于自身元素的translate:(50%,50%)。
- 对行内标签没有效果。

**旋转（rotate）：**
> 2D旋转指的是让元素在2维平面上顺时针或逆时针旋转。
1. 语法：transform:rotate(度数) 

2. 旋转的特点（重点）：
- rotate里面根度数，单位是deg，比如：rotate(45deg)。
- 角度为正时，顺时针，角度为负，逆时针。
- 默认旋转的中心电视元素的中心点。

3. transform-origin设置元素转换中心点
- 语法：transform-origin：x y；

- 注意后面的参数x和y用空格隔开。
- xy默认转换的中心点是元素的中心点（50% 50%）是等于（center center）。
- 还可以给xy设置像素或者方位名词（top bottom left right center）。

**缩放（scale）：**
> 缩放顾名思义，可以放大和缩小。只要给元素添加上了这个属性就能控制它放大还是缩小。

1. 语法：transform:scale(x,y)
- 注意其中的x和y用逗号分隔开（一定要注意：scale里面参数是不带单位的）。
- transform:scale(1,1)：宽和高都放大一倍，相当于没有放大。
- transform:scale(2,2)：宽和高都放大二倍。
- transform:scale(2)：只写一个参数，第二个参数则和第一个参数一样，相当于scale(2,2)（一个参数就是等比例缩放）。
- transform:scale(0.5,,0.5)：缩小。
- scale缩放最大的优势是：可以设置转换中心点缩放，默认是以中心点缩放的，而不影响其它盒子。

- `注意：之前可以使用改变宽高的方式来改变盒子的大小，但是改变宽高是向下延申的，会影响到其它的盒子。而使用scale是以中心点为准向四周延申的，不会影响其它的盒子。`

**2D转换综合写法：**
1. 同时使用多个转换，其格式为：transform：translate() rotate() scale()等。
2. 其顺序会影响转换效果（先旋转会改变坐标轴方向）。
3. 当同时有位移和其它属性的时候，记得要将位移移到最前面去。

**2D转换总结：**
1. 转换transform简单的理解就是变形有2D和3D之分。
2. 在2D中学习了三个分别是：位移，旋转和缩放。
3. 2D移动translate(x,y)最大的优势是不影响其它盒子，里面参数用%（百分比），是相对元素自身的宽高来计算的。
4. 可以分开写比如：translateX(x)和translateY(y)。
5. 2D旋转rotate(度数)可以实现旋转元素，度数是单位deg。
6. 2D缩放scale(x,y)里面的参数不跟单位，可以是小数，最大的优势是不影响其它盒子。
7. 设置转换中心点transform-origin:x,y；参数可以是百分比、像素或方位名词。
8. 当同时有位移和其它属性的时候，记得要将位移移到最前面去。

# 21.【CSS3高级】CSS3动画
---
> 
**animation 参数：**

> animation ：1s  move  过渡的方式

1. 参数1：运动的时间
2. 参数2：关键帧的名字
3. 参数3：过渡的方式，ease是默认的方式（减速）

- linear 匀速

- ease-in 加速

- ease-out 减速（和ease相似）

- ease-in-out 先加速后减速

- cubic-bezier 贝塞尔曲线  （生成贝塞尔曲线：http://cubic-bezier.com）



4. 参数4：重复的次数

- 是一个数字值

- infinite  无数次

  

5. 参数5：动画执行的顺序

- alternate  偶数次数倒着走，基数次数顺着走
- normal 按正常顺序走，顺时针走

**动画状态：**

1. animation-play-state

- paused    动画停止
- running   动画播放

```css
div{
    width: 100px;
    height: 100px;
    border: 1px solid red;
    background: red;
    animation: 1s move;
}

/* 关键帧名字 move */
@keyframes move{
    0%{
        width: 100px;
    }

    50%{
   		width: 400px;
    }

    100%{
        width: 600px;
    }
}

```

**动画简写属性：**
1. 语法：animation:动画名称 持续时间 运动曲线 何时开始 播放次数 是否反方向 动画起始或者结束状态；
```css
  animation: first 5s linear 2s infinite alternate;
```

- 简写属性里面不包含animation-play-state，使用这个属性需要单独写。
- 暂停动画：animation-play-state:paused(暂停动画的播放)，running正常播放动画。
- 想要动画走回来，而不是直接跳回来：animation-direction:alternate。
- 盒子动画结束后，停在结束位置：animation-fill-mode:forwards。

# 22.【CSS3高级】3D转换
---
1. 生活环境是3D的，照片就是3D物体在2D平面呈现的例子。
2. 3D主要知识点：3D位移（translate3d(x,y,z)），3D旋转（rotate3d(x,y,z)），透视（perspective），3D呈现（transform-style）。

**3D特点：**
1. 近大远小。
2. 物体后面遮挡不可见。

**三维坐标系：**
> 三维坐标系其实就是指立体空间，立体空间是由三个轴共同组成的。
1. X轴：水平向右 注意：X右边是正值，左边是负值。
2. Y轴：垂直向下 注意：Y下面是正值，上面是负值。
3. Z轴：垂直屏幕 注意：往外面是正值，往里面是负值。

**3D位移translate3d(x,y,z)：**
> 3D移动在2D移动的基础上多加了一个可以移动的方向，就是z轴方向。

1. 3D位移语法：
- transform:translateX(100px) 仅仅是在X轴上移动。
- transform:translateY(100px) 仅仅是在Y轴上移动。
- transform:translateZ(100px) 仅仅是在Z轴上移动（注意：translateZ一般用px单位）。
- transform:translate3d(x,y,z) 其中X,Y,Z分别指要移动的轴的方向距离（xyz三个不能空，如果不需要的参数就写成0）。

**透视perspective：**

1. 在2D平面产生近大远小视觉立体，但是只是效果的二维的。
- 如果想要在网页上产生3D效果需要透视（理解成3D物体投影在2D平面内）。
- 模拟人类的视觉位置，可认为安排一只眼睛去看。
- 透视我们也称为视距：视距就是人的眼睛到屏幕的距离。
- 距离视觉点越近的在电脑平面城像越大，越远成像越小。
- 透视的单位是像素。

2. 透视注意事项：
- `透视写在被观察元素的父盒子上面（透视需要写在父盒子上面，加给父级元素和爷爷辈的元素都是可以的。）`。
- 视距：视距就是一个距离人的眼睛到屏幕的距离。
- Z轴：物体距离屏幕的距离，Z轴越大（正值）我们看到的物体就越大，这里指的是translateZ。


**3D旋转rotate3d：**
1. 3D旋转指可以让元素在三维平面内沿着x轴，y轴，z轴或者自定义轴进行旋转。

2. 3D旋转语法：
- transform:rotateX(45deg)  沿着X轴正方向旋转45度。
- transform:rotateY(45deg)  沿着Y轴正方向旋转45度。
- transform:rotateZ(45deg)  沿着Z轴正方向旋转45度。
- transform:rotate3d(x,y,z,deg) 沿着自定义轴旋转deg为角度（了解即可）。 
```css
  /* 1. 沿着X轴旋转45deg */
  transform:rotate3d(1,0,0,45deg);
  /* 2. 沿着Y轴旋转45deg */
  transform:rotate3d(0,1,0,45deg);
  /* 3. 矢量沿着对角线进行旋转的 */
  transform:rotate3d(1,1,0,45deg);
```

**3D呈现transform-style：**
1. 控制子元素是否开启三维立体环境。
2. transform-style:flat子元素不开启3d立体空间默认的。
3. transform-style:preserve-3d子元素开启立体空间。
4. 代码写给父级，但是影响的是子盒子（transform-style:preserve-3d这个属性是写给父级元素的）。
> 加给父级元素和爷爷辈的元素都是可以的。
5. 这个属性和重要，后面必须用的。

# 23. CSS属性书写顺序【重点】
---
1. 布局定位属性：display，position，float，clear，visibility，overflow（display写到第一个，毕竟关系到模式）。
2. 自身属性：width，height，margin，padding，border，background。
3. 文本属性：color，font，text-decoration，text-align，vertical-align，white-space，break-word。
4. 其它属性（CSS3）：content，cursor，border-radius，bos-shadow，text-shadow，background:linear-gradient。

# 24.【CSS3高级】背景渐变
---
**背景线性渐变：**
1. 语法：background:linear-gradient(起始方向，颜色1，颜色2，......)
- 颜色可以有很多个。
- 背景线性渐变在使用的过程中如果无效，请添加浏览器私有前缀。
- 起始方向：方位名词或者度数，如果省略默认就是top（从上到下显示）。

2. background:-webkit-linear-gradient(left,red,blue)

3. background:-webkit-linear-gradient(left top,red,blue)