//app ->a ->b

import { createContext, useContext } from "react";

//1.creatContext方法创建一个上下文对象
const MsgContext = createContext()
//2.在顶层组件 通过provider组件提供数据
//3.在底层组件 通过useContext钩子函数使用函数
function A() {
  return(
    <div>
      this is A compnent,
      <B />
    </div>
  )
}

function B () {
  const msg = useContext(MsgContext)
  return (
    <div>
      this is B compnent,{msg}
    </div>
  )
}

function App() {
  const msg = 'this is app msg'
    return (
    <div>
      <MsgContext.Provider value={msg}>
      this is App
      <A />
      </MsgContext.Provider>
    </div>
  );
}
export default App;