import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increaseByAmount, increment, reset } from './counterSlice';

const CounterView = () => {
    const count = useSelector((state) => state?.counter?.count)
    const dispatch = useDispatch()
    console.log(count);
    return (
        <div>
            <h2>CounterView</h2>
            <h3>Count : {count}</h3>
            <button onClick={() => { dispatch(increment()) }}>Increment</button>
            <button onClick={() => { dispatch(decrement()) }}>Decrement</button>
            <button onClick={() => { dispatch(reset()) }}>Reset</button>
            <button onClick={() => { dispatch(increaseByAmount(5)) }}>increaseByAmount 5</button>
        </div>
    );
};

export default CounterView;