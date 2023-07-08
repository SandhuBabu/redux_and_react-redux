import React from 'react'

const Container = ({children, bg}) => {
  return <div style={{
        width: '100%',
        height: '45vh',
        background: bg,
        color: '#fff',
        fontFamily: 'Tahoma',
        display: 'grid',
        placeItems: 'center'
    }}>{children}</div>
  
}

export default Container