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

~~~react
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

~~~react
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
        let VDOM = (    // 此处一定不要写引号, 因为不是字符串
            <h1 title="id">
                <span>Hello, React</span>
            </h1> 
        )       
        // 2.渲染虚拟DOM到页面
        // ReactDOM.render(虚拟Dom, 容器)
        ReactDOM.render(VDOM, document.getElementById('test'))
    </script>
</body>
</html>
~~~

#### 2.1.3.2 使用JS创建虚拟DOM

~~~react
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=
    , initial-scale=1.0">
    <title>使用JS创建虚拟DOM</title>
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

    <!-- 此处一定要写babel -->
    <script type="text/javascript">
        // 1.创建虚拟DOM
        // React.createElement(标签名, 标签属性, 标签内容)  
        let VDOM = React.createElement('h1', {id: 'title'}, React.createElement('span', {}, "Hello, React"))     
        // 2.渲染虚拟DOM到页面
        // ReactDOM.render(虚拟Dom, 容器)
        ReactDOM.render(VDOM, document.getElementById('test'))
    </script>
</body>
</html>
~~~

可以发现，当嵌套多层的时候，该语法会变得非常繁琐，因此在实际开发过程中，我们还是采用JSX的写法即可

### 2.1.4 虚拟DOM与真实DOM

打印一下虚拟DOM

~~~react
console.log("虚拟DOM: ", VDOM)
let TDOM = document.getElementById('test');
console.log("真实DOM: ", TDOM);
~~~

![image-20230423212055434](https://picgo-1301677055.cos.ap-shanghai.myqcloud.com/images/image-20230423212055434.png)

可以发现

1. 虚拟DOM本质是Object类型的对象
2. 虚拟DOM比真实DOM轻，因为虚拟DOM是React内部在用，无需真实DOM上那么多属性
3. 虚拟DOM最终会被React转换为真实DOM，呈现在页面上

## 2.2 React JSX

JSX，全称JavaScript XML，是react定义的一种类似于XML的JS扩展语法：

 JS + XML本质是`React.createElement(component, props, ...children)`方法的语法糖

**JSX语法规则：**

1. 定义虚拟DOM时，不要写引号
2. 标签中混入JS表达式时，使用`{}`

~~~react
let myId = 'id'
let myData = 'Hello, React'
let VDOM = (
    <h2 id={myId.toLowerCase()}>
        <span>{myData.toLocaleLowerCase()}</span>
    </h2> 
)       
~~~

3. 样式的类名指定使用`className`

~~~react
let VDOM = ( 
    <h2 className="title" id={myId.toLowerCase()}>
        <span>{myData.toLocaleLowerCase()}</span>
    </h2> 
)      
~~~

4. 内联样式需要使用`style={{key:value}}`的形式

~~~react
let VDOM = (
    <h2 className="title" id={myId.toLowerCase()}>
        <span style={{color: 'white'}}>{myData.toLocaleLowerCase()}</span>
    </h2> 
)      
~~~

5. JSX不允许出现多个根标签，当出现多个标签时，可以使用一个`div`包裹起来

~~~react
let VDOM = (   
    <div>
        <h2 className="title" id={myId.toLowerCase()}>
            <span style={{color: 'white'}}>{myData.toLocaleLowerCase()}</span>
        </h2> 
        <input type="text"/>
    </div> 
) 
~~~

6. 标签必须闭合
7. 标签首字母若为小写字母开头，则将该标签转为html中同名元素，若无该标签对应的同名元素则报错
8. 标签首字母若为大写字母开头，React就去渲染对应的组件，若组件没有定义则保存

## 2.3 模块与组件、模块化与组件化

### 2.3.1 模块

模块就是向外提供特定功能的js程序, 一般就是一个js文件

随着业务逻辑增加，代码越来越多且复杂，使用模块可以复用js, 简化js的编写, 提高js运行效率

### 2.3.2 组件

组件是用来实现局部功能效果的代码和资源的集合(html/css/js/image等等)

例如下面一个页面

![image-20230423221219406](https://picgo-1301677055.cos.ap-shanghai.myqcloud.com/images/image-20230423221219406.png)

在原先写在同一个html里面，用不同的div分割，现在可以使用组件，拆分成不同的组件，可以达到复用编码, 简化项目编码, 提高运行效率的效果

# 3 React面向组件编程

## 3.1 安装开发者调试工具

以Firefox为例

![image-20230423221745479](https://picgo-1301677055.cos.ap-shanghai.myqcloud.com/images/image-20230423221745479.png)

## 3.2 组件的基本使用

### 3.2.1 函数式组件

~~~react
// 1.创建函数式组件
function Demo() {
    return <h2>我是用函数定义的组件, 适用于简单组件的定义</h2>
}

// 2.渲染组件到页面
ReactDOM.render(<Demo/>, document.getElementById('test'))
~~~

执行`ReactDOM.render`后，React的工作：

1. React解析组件标签，找到了`Demo`组件
2. 发现组件是用函数定义的，随后调用该函数，将返回的虚拟DOM转为真实DOM，随后呈现在页面中

### 3.2.2 类式组件

~~~react
// 1.创建类式组件, 需要继承React.Component
class Demo extends React.Component {
    render() {
        return <h2>我是用类定义的组件, 适用于复杂组件的定义</h2>   
    }
}

// 2.渲染组件到页面
ReactDOM.render(<Demo/>, document.getElementById('test'))
~~~

执行`ReactDOM.render`后，React的工作：

1. React解析组件标签，找到了`Demo`组件
2. 发现组件是用类定义的，随后new出该类的实例，并通过该实例调用到原型上的render方法
3. 将render返回的虚拟DOM转为真实DOM，随后呈现在页面中

## 3.3 组件实例三大核心属性

之前的类式组件中，打印一下this

~~~react
class Demo extends React.Component {
    render() {
        console.log(this)
        return <h2>我是用类定义的组件, 适用于复杂组件的定义</h2>   
    }
}
~~~

输出如下：

![image-20230424001400771](https://picgo-1301677055.cos.ap-shanghai.myqcloud.com/images/image-20230424001400771.png)

其中`props`、`refs`、`state`就是组件实例的三大核心属性

### 3.3.1 State

state是组件对象最重要的属性, 值是对象(可以包含多个key-value的组合)

组件被称为"状态机", 通过更新组件的state来更新对应的页面显示(重新渲染组件)

下面一个案例，点击更换天气

~~~react
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=
    , initial-scale=1.0">
    <title>State</title>
    <link rel="shortcut icon" href="../images/favicon.ico" type="image/x-icon">
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
        // 1.创建类式组件, 需要继承React.Component
        class Weather extends React.Component {

            // 自定义构造器
            constructor(props) {
                super(props)
                // 更新组件状态
                this.state = {isHot: false}
                this.changeWeather = this.changeWeather.bind(this)
            }

            render() {
                let msg = this.state.isHot? "炎热": "凉爽"
                return <h1 onClick={this.changeWeather}>今天天气很{msg}</h1>   
            }

            changeWeather() {
                // 只有通过Weather实例调用changeWeather方法,changeWeather的方法才是Weather实例
                // 由于changeWeather是作为onClick的回调，所以不是通过实例调用的，是直接调用
                // 类中的方法默认开启了局部的严格模式，所以changeWeather中的this为undefined
                console.log(this)
                // 状态不可直接更改，需要使用setState
                this.setState({isHot: !this.state.isHot })
            }
        }

        // 2.渲染组件到页面
        ReactDOM.render(<Weather/>, document.getElementById('test'))
    </script>
</body>
</html>
~~~

注意：

1. 组件中render方法中的this为组件实例对象
2. 组件自定义的方法中this为undefined，如何解决？

   - 强制绑定this: 通过函数对象的bind()

   - 箭头函数
3. 状态数据，不能直接修改或更新，需要使用setState
4. setState为合并的动作而非替换
5. 构造器调用一次，render调用1+n次，1是初始化，n是状态更新的次数

上面写法可以简化，简化后写法：

~~~react
<script type="text/babel">
    class Weather extends React.Component {

        state = {isHot: false}

        changeWeather = () => {
            this.setState({isHot: !this.state.isHot })
        }

        render() {
            let msg = this.state.isHot? "炎热": "凉爽"
            return <h1 onClick={this.changeWeather}>今天天气很{msg}</h1>   
        }
    }

    ReactDOM.render(<Weather/>, document.getElementById('test'))
</script>
~~~

