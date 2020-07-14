import React from 'react';
import './style.css';

const Key = ({ keyLabel, clickHandler }) => (
  <button className="Container" onClick={() => clickHandler(keyLabel)}>
    {keyLabel}
  </button>
);

export default Key;
