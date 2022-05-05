import React, { useState } from 'react';
import { ChildThree, MemoizedChildThree } from './ChildThree';

export const ParentThree = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('Vishwas');

  console.log('ParentThree Render');
  return (
    <div>
      <button onClick={() => setName('Codevolution')}>Change name</button>
      <button onClick={() => setCount((c) => c + 1)}>Count - {count}</button>
      {/* <MemoizedChildThree name={name}>Hello</MemoizedChildThree> */}

      {/* <ChildThree name={name} /> */}
      <MemoizedChildThree name={name}>
        <strong>Hello</strong>
      </MemoizedChildThree>
      {/* <MemoizedChildFour name={name} /> */}
    </div>
  );
};
