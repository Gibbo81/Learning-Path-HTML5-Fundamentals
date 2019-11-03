import React from 'react';

export default function ButtonStop(props) {
  return (
    <button onClick={() => props.handle()}>
      STOP
    </button>
  )
}
