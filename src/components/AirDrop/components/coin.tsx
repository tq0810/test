import React, { useState, useEffect } from 'react';
import './CoinAnimation.less';

interface Animation {
  id: number;
  x: number;
  y: number;
  opacity: number;
}

export const CoinAnimation: React.FC = () => {
  const [animations, setAnimations] = useState<Animation[]>([]);

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const containerRect = e.currentTarget.getBoundingClientRect();
    const offsetX = e.clientX - containerRect.left;
    const offsetY = e.clientY - containerRect.top;

    const newAnimation: Animation = {
      id: Date.now(),
      x: offsetX,
      y: offsetY,
      opacity: 1,
    };
    setAnimations([...animations, newAnimation]);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimations((prevAnimations) =>
        prevAnimations
          .map((animation) => {
            if (animation.opacity > 0) {
              return {
                ...animation,
                opacity: animation.opacity - 0.01,
                y: animation.y - 1,
              };
            }
            return animation;
          })
          .filter((prevAnimations) => {
            return prevAnimations.opacity > 0;
          }),
      );
    }, 10);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="container" onClick={handleClick}>
      {animations.map((animation) => (
        <div
          key={animation.id}
          className="coin"
          style={{
            left: animation.x,
            top: animation.y,
            opacity: animation.opacity,
          }}
        >
          +2
        </div>
      ))}
      点击
    </div>
  );
};

// export default CoinAnimation;
