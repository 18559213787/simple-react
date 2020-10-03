import React from  'react'
import {Express, Filter, FunChild, RadioGroup, Radio} from './child'

const footer = (<div>这里是footer标签</div>);

export default function App(){

  return (<div>
  {/*  props.children 为jsx对象*/}
    <Express footer={footer}>
      <h1>这里是h1标签</h1>
      <p>使用props children为jsx对象</p>
    </Express>
        <br/>
    {/*    props.children 进行过滤显示*/}
    <Filter>
      <p>这里是p标签-vue</p>
      <span >span标签</span>
      <h3>h3标签</h3>
      <p>这里是p标签--react</p>
    </Filter>
    <br/>
    {/*  props.children 为函数,组件内使用props.children()调用*/}
    <FunChild api="user">
      {(name, age)=>{
        return <p>
          姓名: {name} ----年龄: {age}
        </p>
      }}
    </FunChild>
    <br/>
  {/* 将RadioGroup父组件的name属性, 拓展给每个子元素 */}
  <RadioGroup name="skill">
    <Radio value="javascript">javascript</Radio>
    <Radio value="java">java</Radio>
    <Radio value="html">html</Radio>
    <Radio value="css">css</Radio>
  </RadioGroup>

  </div>)
}