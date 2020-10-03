import { createVNode } from '../react-dom/vdom'

// createElement 函数返回虚拟dom
function createElement(type, props, ...children) {
  // console.log('props',props)
  if (!props){
    props={}
  }
  // console.log('chil',children)
  if (children.length > 0){
    props.children = children;
  }

  let vtype;
  if (typeof type === 'string') {
    //普通标签
    vtype = 1;
  }else if (typeof type === 'function') {
    if (type.isClassComponent) {
      // 类组件
      vtype = 2;
    }else {
      // 函数组件
      vtype = 3;
    }
  }
  // console.log({vtype, type, props})
  return createVNode(vtype, type, props)
}

class Component {
  static isClassComponent = true;
  constructor(props) {
    this.props = props;
    this.state = {}
  }
  render() {

  }
}

export default {
  createElement,
  Component
}