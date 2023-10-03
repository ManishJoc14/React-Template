import "./css/App.css"
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, incrementByAmount } from "./Redux/counter";
function App() {
  const {count} = useSelector(store => store.counter); 
  // i want a count variable from store and counterReducer

  const dispatch = useDispatch(); //renaming 
  return (
    <div className="container">
      <h1>The Count is : {count}</h1>
      <button onClick={()=>dispatch(increment())}>Increase</button>
      <button onClick={()=>dispatch(decrement())}>Decrease</button>
      <button onClick={()=>dispatch(incrementByAmount(33))}>Increase by 33</button> {/*we can pass payload wich can be number, array ,.... any*/}
    </div>
  );
}

export default App;
