import React from 'react';
import './style.css';

const handleButtonClick = (keyLabel) => {
  console.log(keyLabel);
};

const Key = ({ keyLabel, clickHandler }) => (
  <div className="Container" onClick={() => clickHandler(keyLabel)}>
    {keyLabel}
  </div>
);

export default Key;
