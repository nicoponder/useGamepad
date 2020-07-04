import React from 'react';

export default function({index, value}) {
  return (
    <div>
      <h2>button name: {index}</h2>
      <h2>button status: {value ? 'pressed' : 'not pressed'}</h2>
    </div>
  );
}