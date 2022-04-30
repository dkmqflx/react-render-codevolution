import React, { useState, useReducer } from 'react';
import { Child } from './Child';

const initialState = 0;
const reducer = (state, action) => {
  switch (action) {
    case 'increment':
      return state + 1;
    case 'decrement':
      return state - 1;
    case 'reset':
      return initialState;
    default:
      return state;
  }
};

export const Parent = () => {
  const [count, dispatch] = useReducer(reducer, initialState);
  console.log('Parent Render');

  return (
    <div>
      <div>Count = {count}</div>
      <button onClick={() => dispatch('increment')}>Increment</button>
      <button onClick={() => dispatch('decrement')}>Decrement</button>
      <button onClick={() => dispatch('reset')}>Reset</button>
      <Child />
    </div>
  );
};
