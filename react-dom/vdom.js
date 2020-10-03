export function createVNode(vtype, type, props) {
  const vnode = {vtype, type, props};
  return vnode;
}

export function initVNode(vnode) {
  const { vtype } = vnode;

  if (!vtype) {
    return document.createTextNode(vnode);
  }

  if (vtype === 1) {
    return createElement(vnode);
  }else if (vtype === 2){
    // 类组件
    return createClassComp(vnode);
  }else if (vtype === 3){
    // 函数组件
    return createFunctionComp(vnode);
  }
}

function createElement(vnode) {
  const {type, props} = vnode;
  // 根据type 创建元素
  const dom = document.createElement(type);

  const {key, children, ...rest} = props;
  // 处理属性
  Object.keys(rest).forEach(attr => {
    const value = rest[attr];
    if (attr === 'className') {
      dom.setAttribute('class', value)
    }else if (attr === 'htmlFor') {
      dom.setAttribute('for', value)
    }else if (attr.startsWith('on')){
      let eventName = attr.toLowerCase();
      dom[eventName] = value;
    }else if (attr === 'style' && typeof value === 'object') {
        let styleStr = Object.keys(value).map(a => {
          return a + ': ' + value[a];
        }).join(';')
      dom.setAttribute('style', styleStr)
    }else {
      dom.setAttribute(attr, value)
    }
  });

  // 递归子元素,创建出来后,添加到父元素dom上
  children.forEach(child => {
    if (Array.isArray(child)){
      // 使用数组map方法,生成子节点,
      child.forEach(c => dom.appendChild(initVNode(c)))
    }else {
        // 每个child都是vnode
      dom.appendChild(initVNode(child))
    }
  });

  return dom;
}
function createClassComp(vnode) {
  // type是class组件声明
  const {type, props} = vnode;
  let instance = new type(props);
  let vdom = instance.render();
  return initVNode(vdom);
}
function createFunctionComp(vnode) {
  //type是函数
  const {type, props} = vnode;
  let vdom = type(props);
  return initVNode(vdom);
}