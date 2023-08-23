import { useDispatch, useSelector } from "react-redux"
import { decrement, increment,reset, incrementByValue } from "./counterSlice";
import { useState } from "react";

const Counter = () => {
  const count = useSelector((state) => state.counter.count)
  const dispatch = useDispatch();

  const [incrementValue, setIncrementValue] = useState(0);



  return (
    <div>
      <h1>Counter</h1>
      <p> {count}  </p>
      <button onClick={() => dispatch(increment())}>Increase</button>
      <span> </span>
      <button onClick={() => dispatch(decrement())}>Reduce</button>
      <div>
        <div>
          <input type="number" value={incrementValue} onChange={(e) => setIncrementValue(parseFloat(e.target.value))} />
        </div>
        <div>
          <button onClick={() => dispatch(incrementByValue(incrementValue))}>Increase by {incrementValue} </button> <span> </span>
          <button onClick={ () => dispatch(reset()) } >Reset</button>
        </div>
      </div>
    </div>
  )
}

export default Counter