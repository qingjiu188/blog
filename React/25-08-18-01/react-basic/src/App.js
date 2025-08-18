//项目的根组件
// App.js——>index.js->public/index.html(id=root)

const isLogin = false

function App() {
  return (
    <div className="App">
      {/* 逻辑与&& */}
      {isLogin && <span>this is span</span>}
      {/* 三元运算 */}
      <p>
      {isLogin ? <span>this is true </span> : <span>this is false</span>}
      </p>
      </div>
  );
}

export default App;
