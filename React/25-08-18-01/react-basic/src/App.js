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
      <ul>
        {list.map(item=><li key={item.id}>{item.name}</li>)}
      </ul>
      </div>
  );
}

export default App;
