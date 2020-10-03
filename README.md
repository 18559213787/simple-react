##### 创建项目文件夹 simple-react

> npm  init  -y      //初始化项目
>
> npm run dev 或 npm dev  //运行项目

```js
simple-react
	index.js
	index.html
	package.json
	.babelrc
	src
```

```
jsx对象--->

经过babel/plugin-transform-react-jsx插件, 编译成为 js 对象---->

经过React.createElement 方法处理,返回vdom   ----->

经过ReactDom.render 函数处理,返回真实dom(在状态改变,也是在里面进行diff计算)


```

react 组件中props.children使用
props.children可以是任意表达式







