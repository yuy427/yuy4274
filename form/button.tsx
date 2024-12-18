import React from 'react';
import './App.css';

function button({a}:any) {
  return (
    <div className="container">
      <button className="text" >{a}</button>
      {/* <button className="text" >{'name:\nbusyo'}</button> */}
    </div>
  );
}

export default button;

