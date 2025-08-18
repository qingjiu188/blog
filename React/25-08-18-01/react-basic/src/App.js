// // 定义组件
// function Button() {
//   //组件逻辑
//   return <button>click me!</button>
// }


// function App() {
//   return (
//     <div className="App">
//       {/* 使用组件 */}
//       {/* 自闭和 */}
//       <Button />
//       {/* 成对 */}
//       <Button></Button>
//     </div>
//   );
// }


//箭头函数的写法
// 定义组件
const Button = () => {
  //组件逻辑
  return <button>click me!</button>
}


function App() {
  return (
    <div className="App">
      {/* 使用组件 */}
      {/* 自闭和 */}
      <Button />
      {/* 成对 */}
      <Button></Button>
    </div>
  );
}


export default App;