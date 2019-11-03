import React from 'react';

export default function ButtonT(props) {
  return (
    <button onClick={() => props.handle(props.value)}>
      {props.value}
    </button>
  )
}
