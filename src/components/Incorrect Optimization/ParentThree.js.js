import React, { useState } from 'react';
import { MemoizedChildFour } from './ChildFour.js';

export const ParentThree = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('Vishwas');

  console.log('ParentThree Render');
  return (
    <div>
      <button onClick={() => setName('Codevolution')}>Change name</button>
      <button onClick={() => setCount((c) => c + 1)}>Count - {count}</button>

      <MemoizedChildFour name={name}></MemoizedChildFour>
    </div>
  );
};
