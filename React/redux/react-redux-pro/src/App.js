import { useDispatch,useSelector } from "react-redux";
//导入actionCreater
import {inscrement,decrement,addToNum} from './store/modules/counterStore'

function App() {
  const { count } = useSelector(state =>state.counter)
  const dispatch = useDispatch()
  return (
    <div className="App">
     <button onClick={() => dispatch(decrement())}>-</button>
      {count}
     <button onClick={() => dispatch(inscrement())} >+</button>
     <button onClick={() => dispatch(addToNum(10))}>add to 10</button>
     <button onClick={() => dispatch(addToNum(200))}>add to 200</button>
    </div>
  );
}

export default App;
