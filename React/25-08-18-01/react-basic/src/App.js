//useState实现一个计数器

import { useState } from "react";


function App() {
// 调用useState添加一个状态变量
//count 状态变量
// setCount改变状态变量的方法
  const [count,setCount] = useState(0)

  //点击事件回调
  const handleClick = () => {
    //作用1:用传入的新值修改count
    //2:重新使用新的count渲染ui
    setCount(count+1)
  }

  return (
    <div className="App">
      <button onClick={handleClick}>{count}</button>
    </div>
  );
}
export default App;