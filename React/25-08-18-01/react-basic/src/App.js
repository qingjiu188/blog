
function App() {
  // 事件参数e
  // const handleClick = (e) => {
  //   console.log('按钮被点击了',e);
  // };

  //   return (
  //   <div className="App">
  //     <button onClick={handleClick}>点击我</button>
  //   </div>
  // );

  // 传送自定义参数
  // const handleClick = (name) => {
  //   console.log('按钮被点击了',name);
  // };
  // return (
  //   <div className="App">
  //     <button onClick={() => handleClick('jack')}>点击我</button>
  //   </div>
  // );

// 既要传递自定义的参数，也需要事件对象e
  const handleClick = (name,e) => {
    console.log('按钮被点击了',name,e);
  };
  return (
    <div className="App">
      <button onClick={(e) => handleClick('jack',e)}>点击我</button>
    </div>
  );
}

export default App;