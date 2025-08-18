// 项目的入口，从这里开始运行

// React必要的两个核心包
import React from 'react';
import ReactDOM from 'react-dom/client';


// 引入项目的根(App)组件
import App from './App';

//把App组件渲染到id为root的DOM元素上
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

