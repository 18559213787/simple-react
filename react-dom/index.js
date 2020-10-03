import { initVNode } from './vdom'

function render(vnode, container) {
  // container.innerHTML = `<pre>${JSON.stringify(vnode,null ,2)}</pre>`
  // 将虚拟dom转换真实dom,追加到容器里
  const dom = initVNode(vnode);
  container.appendChild(dom)

  return container;
}

export default {
  render
}