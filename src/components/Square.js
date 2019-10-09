import React from 'react';

const Square = (prps) =>  {
  let clname = "square";
  if (prps.highlight) {
    clname += " highlight";
  }
  return (<button type="button" className={clname} onClick={() => prps.onClick()}>
    {prps.value}
  </button>);
}

export default Square
