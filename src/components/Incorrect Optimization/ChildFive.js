import React from 'react';

export const ChildFive = ({ name, handleClick }) => {
  console.log('ChildFive Render');
  return <div>Hello {name}</div>;
};

export const MemoizedChildFive = React.memo(ChildFive);
