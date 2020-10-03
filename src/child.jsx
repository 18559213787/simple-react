import React from  'react'

// children 为jsx表达式,直接使用
export  function Express(props) {
  return (<div>
    {props.children}
    <div style={{color:"red"}}>
      {props.footer}
    </div>
  </div>)
}

// 对props.children进行过滤显示,只显示p标签
export function Filter(props) {
  // props.children为孩子数组
  return (<div>
    {React.Children.map(props.children,child => {
    //  child为每个标签的vdom
      if (child.type !== 'p'){  //child.type为标签类型,不是p标签的直接返回
        // console.log(child)
        return;
      }
      return child;
    })}
  </div>)
}

//props.children为函数
const Api={
  //模拟请求user接口
  user(){
    return {
      name: '张三',
      age: 20
    }
  }
}

export function FunChild(props) {
  const {name, age} = Api[props.api]();
  return (<div>
    {props.children(name, age)}
  </div>)
}

// radio使用
export function RadioGroup(props) {
  // console.log(props.children),子元素为数组
  return (<div>
    {React.Children.map(props.children, child => {
      console.log(child)
      // 每个child 都是vdom,无法拓展
      // 使用React.cloneElement方法,给子组件的props 拓展name属性
      return React.cloneElement(child, {name: props.name})
    })}
  </div>)
}

//props接收有children和value,或者更多属性
// 通过RadioGroup 拓展,rest 不仅有value属性,也有了name 属性
export function Radio({children, ...rest}) {
  return (<label>
    <input type="radio" {...rest} />
    {children}
  </label>)
}

