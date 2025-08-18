import { useState } from "react";

function App() {
  let [count,setCount] = useState(0)

  const handldClick = () => {

    //直接修改不能引发视图更新
    // count++
    // console.log(count)

    setCount(count+1)
  }

  //修改对象状态
  const [form,setForm] = useState({name:'jack'})
  const changeForm = () =>{
    setForm({
      ...form,
      name:'john'
    })
  }

    return (
    <div className="App">
      <button onClick={handldClick}>{count}</button>
    <button onClick={changeForm}>修改form{form.name}</button>
    </div>
  );
}
export default App;