import React, { useState } from 'react';
import './Switch.css';

export const Switch = () => {
  const [isLeft, setIsLeft] = useState(true);

  return (
    <div className="switch">
      <button className="button" onClick={() => setIsLeft(true)}>
        Left
      </button>
      <div className="track">
        <div className={`slider ${isLeft ? 'left' : 'right'}`}></div>
      </div>
      <button className="button" onClick={() => setIsLeft(false)}>
        Right
      </button>
    </div>
  );
};
