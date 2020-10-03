/*import React from 'react'
import ReactDom from 'react-dom'
import App from './src/App'

ReactDom.render(<App />, document.querySelector('#root'));*/

//实现简单react
import React from './react/index'
import ReactDom from './react-dom/index'

const FunComp = (props) =>{
  const click = ()=>{
    console.log(111)
  }
  return (<div>
    这里是函数式组件--{props.food}
    <button onClick={click}>click me</button>
  </div>)
};
class ClaComp extends React.Component{
  constructor() {
    super();
  }
  render() {
    const arr = [1,2,3,4]
    return (<div>
      <p>这里是类组件</p>
      <ul>
        { arr.map(item=>(<li key={item}>{item}</li>))}
      </ul>
    </div>);
  }
}
const name = 'China';
const js= (<div>
            <p style={{color:'red', fontSize: 16}}>hello world</p>
            <div>
              <span>{name}</span>
              <span>子元素</span>
            </div>
              这里是js对象
            <FunComp food='apple'/>
            <ClaComp />
        </div>);
console.log(js);

ReactDom.render(js, document.querySelector('#root'));