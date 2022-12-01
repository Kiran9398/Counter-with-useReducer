import React,{useReducer} from 'react';
import './CounterOne.css'

const initialState = 0;
const reducer = (state,action) => {
    switch(action){
        case 'increment':
            return state + 1
        case 'decrement':
            return state - 1;
        case 'reset':
            return initialState
        default:
            return state            
    }
}

function CounterOne(){
    const [count,dispatch]= useReducer(reducer,initialState)
    return(
        <div>
            <div className='mt-3 mb-4 counter'>Count : {count}</div>
            <button className='increment-button' onClick={() => dispatch('increment')}>Increment</button>
            <button className='decrement-button' onClick={() => dispatch('decrement')}>Decrement</button>
            <button className='reset-button' onClick={() => dispatch('reset')}>Reset</button>
        </div>
    )
}

export default CounterOne;