import React from 'react';

export const wrapRootElement = (props) => {
  console.log('RENDER');
  return (
    <>{props.element}</>
  )
}
