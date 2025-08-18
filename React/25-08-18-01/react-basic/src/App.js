import { useState } from "react";

function App() {
  let [count,setCount] = useState(0)

  const handldClick = () => {

    //直接修改不能引发视图更新
    // count++
    // console.log(count)

    setCount(count+1)
  }
    return (
    <div className="App">
      <button onClick={handldClick}>{count}</button>
    </div>
  );
}
export default App;