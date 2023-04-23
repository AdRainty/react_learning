# 1 React简介

## 1.1 什么是React

![image-20230423142517146](https://picgo-1301677055.cos.ap-shanghai.myqcloud.com/images/202304231436422.png)

React是一个用于构建用户界面（将数据渲染为HTML视图）的JavaScript库

假如你需要做一个项目，在页面上显示学生的信息，过程大约分为三步

1. 发送请求获取数据
2. 处理数据（过滤、整理格式等）
3. **操作DOM呈现页面**

React实际上只关注第三步的内容

## 1.2 原生JavaScript的缺点

1. 原生JavaScript操作DOM繁琐。效率低（DOM-API操作UI）

~~~javascript
document.getElementById('app')
document.querySelector('#app')
document.getElementsByTagName('span')
~~~

2. 使用JavaScript直接操作DOM，浏览器会进行大量的编译重排
3. 原生JavaScript没有组件化编码方案，代码复用率低

## 1.3 React优势

1. 采用**组件化**模式、**声明式编码**，提高开发效率及组件复用率
2. React Native中可以使用React语法进行**移动端开发**
3. 使用**虚拟DOM** + 优秀的**Diffing算法**，尽量减少与真实的DOM交互

# 2 React入门

## 2.1 React的基本使用

### 2.1.1 相关js库

1. react.js：React核心库。
2. react-dom.js：提供操作DOM的react扩展库。
3. babel.min.js：解析JSX语法代码转为JS代码的库。

### 2.1.2 快速入门

创建一个Html，具体内容见注释 

~~~html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=
    , initial-scale=1.0">
    <title>Hello React</title>
</head>
<body>
    <!-- 准备容器 -->
    <div id="test">

    </div>

    <!-- 注意, react.development.js一定要在react-dom.development.js之前引入 -->
    <!-- 引入React核心库 -->
    <script type="text/javascript" src="../js/react.development.js"></script>
    <!-- 引入React-DOM，用于支持React操作DOM -->
    <script type="text/javascript" src="../js/react-dom.development.js"></script>
    <!-- 引入label，用于将jsx转为js -->
    <script type="text/javascript" src="../js/babel.min.js"></script>

    <!-- 此处一定要写babel -->
    <script type="text/babel">
        // 1.创建虚拟DOM
        // 此处一定不要写引号, 因为不是字符串
        let VDOM = <h1>Hello, React</h1>        
        // 2.渲染虚拟DOM到页面
        // ReactDOM.render(虚拟Dom, 容器)
        ReactDOM.render(VDOM, document.getElementById('test'))
    </script>
</body>
</html>
~~~

### 2.1.3 虚拟DOM的两种创建方式

#### 2.1.3.1 使用JSX创建虚拟DOM

与上文代码一样

~~~html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=
    , initial-scale=1.0">
    <title>使用JSX创建虚拟DOM</title>
</head>
<body>
    <!-- 准备容器 -->
    <div id="test">

    </div>

    <!-- 注意, react.development.js一定要在react-dom.development.js之前引入 -->
    <!-- 引入React核心库 -->
    <script type="text/javascript" src="../js/react.development.js"></script>
    <!-- 引入React-DOM，用于支持React操作DOM -->
    <script type="text/javascript" src="../js/react-dom.development.js"></script>
    <!-- 引入label，用于将jsx转为js -->
    <script type="text/javascript" src="../js/babel.min.js"></script>

    <!-- 此处一定要写babel -->
    <script type="text/babel">
        // 1.创建虚拟DOM
        // 此处一定不要写引号, 因为不是字符串
        let VDOM = <h1 title="id">Hello, React</h1>        
        // 2.渲染虚拟DOM到页面
        // ReactDOM.render(虚拟Dom, 容器)
        ReactDOM.render(VDOM, document.getElementById('test'))
    </script>
</body>
</html>
~~~

#### 2.1.3.2 使用JS创建虚拟DOM

