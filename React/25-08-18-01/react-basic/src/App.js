//定义文章类型

const articleType = 1   //0,1,3

//定义核心函数（根据文章类型返回不同的JSX模板）

function getArticleTem() {
  if (articleType === 0) {
    return <div>文章类型为0的模板</div>;
  } else if (articleType === 1) {
    return <div>文章类型为1的模板</div>;
  } else {
    return <div>文章类型为3的模板</div>;
  }
}

function App() {
  return (
    <div className="App">
      {/* 调用函数渲染不同的模板 */}
      {getArticleTem()}
    </div>
  );
}

export default App;
