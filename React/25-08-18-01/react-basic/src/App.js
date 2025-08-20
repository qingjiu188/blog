//hook使用规则
//1.只能在组件中或者其他自定义hook函数中调用（不能在组件中使用）
//2.只能在组件的顶层调用，不能嵌套在if，for，其他函数中


//演示1
//在组件外使用
import { useState } from "react"
// useState('')

//演示2
//在if for 组件内使用
function App () {
  // if(Math.random() > 0.5) {
  //   useState()
  // }
  return (
    <div>
      this is App
    </div>
  )
}

export default App