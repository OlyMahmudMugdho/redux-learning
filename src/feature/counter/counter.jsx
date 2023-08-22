import { useDispatch } from "react-redux";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { decrement, increment } from "./counterSlice";

const Counter = () => {
    const count = useSelector((state) => state.counter.count);
    const dispatch = useDispatch();

    return (
        <>
            <p>
                counter = {count}
            </p>
            <div>
                <button onClick={() => dispatch(increment())}>+</button> 
                <span>  </span>
                <button onClick={() => dispatch(decrement())}>-</button>
            </div>
        </>
    )
}

export default Counter;