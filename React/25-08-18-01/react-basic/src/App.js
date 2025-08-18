//项目的根组件
// App.js——>index.js->public/index.html(id=root)

const count =100

function getName() {
  return '张三';
}
function App() {
  return (
    <div className="App">
      this is App
      {/* 使用引号传递字符串 */}
      {'这是字符串'}
      {/* 识别js变量 */}
      {count}
      {/* 函数调用 */}
      {getName()}
      {/* 方法调用 */}
      {new Date().getDate()}
      {/* 使用js对象 */}
      <div style={{ color: 'red', fontSize: '20px' }}>
        这是一个div
        </div>
      </div>
  );
}

export default App;
