import React, { useState } from 'react';
import { MemoizedChildTwo } from './ChildTwo';

export const ParentTwo = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('Vishwas');

  console.log('ParentTwo Render');
  return (
    <div>
      <button onClick={() => setName('Codevolution')}>Change name</button>
      <button onClick={() => setCount((c) => c + 1)}>Count - {count}</button>
      <MemoizedChildTwo name={name} />
    </div>
  );
};
