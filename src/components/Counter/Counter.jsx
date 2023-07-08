import React, { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';

const Counter = () => {
  const { count } = useSelector(state => state.counter);
  const countRef = useRef();

  useEffect(() => {
      countRef.current.style.transform = 'translateY(-10px)';
    setTimeout(() => {
        countRef.current.style.transform = 'translateY(0px)';
    }, 100);
  }, [count]);

  return (
    <p
      ref={countRef}
      style={{
        width: '35px',
        height: '35px',
        background: '#ff04ea',
        display: 'grid',
        placeItems: 'center',
        borderRadius: '50%',
        padding: '5px',
        marginLeft: '10px',
        transition: '200ms',
      }}
    >
      {count}
    </p>
  );
};

export default Counter;
