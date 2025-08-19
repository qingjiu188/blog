//父传子
//父组件传递数据，子组件标签身上绑定属性
//子组件接收数据 props的参数

function Son(props) {
  console.log(props)
  return<div>this is son,{props.name},jsx:{props.child}</div>
}

function App() {
  const name='this is app name'
    return (
    <div>
      <Son 
      name={name}
      age={18}
      isTrue={false}
      list={['vue','react']}
      obj={{name:'jack'}}
      cb={()=>console.log(123)}
      child={<span>this is span</span>}
      />
    </div>
  );
}
export default App;