import React from 'react';

export default function({value, name}) {
  return (
    <div>
      <h2>axis name: {name}</h2>
      <h2>axis status: </h2>
      <meter value={value} min={-1} max={1} />
    </div>
  );
}