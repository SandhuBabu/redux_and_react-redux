import React from 'react'
import Counter from './Counter';

const showCount = () => {
  
  return <div style={{ display: 'flex', alignItems: 'center' }}>
    <span style={{
      letterSpacing: '1px',
      fontSize: '18px'
    }}>Count : </span>
    <Counter/>
  </div>
}

export default showCount