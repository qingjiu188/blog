//项目的根组件
// App.js——>index.js->public/index.html(id=root)

const list =[
  {id: 1, name: 'List1'},
  {id: 2, name: 'List2'},
  {id: 3, name: 'List3'}
];
function App() {
  return (
    <div className="App">
      this is App
      {/* 渲染列表 */}
      {/* map循环哪个结构  return结构 */}
      {/* 注意事项：加上一个独一无二的key属性  字符串或者数字也行   */}
      {/* 在常规中，通常用id作为key来绑定 */}
      {/* key的作用：React框架内部使用，提升更新性能 */}
      <ul>
        {list.map(item=><li key={item.id}>{item.name}</li>)}
      </ul>
      </div>
  );
}

export default App;
