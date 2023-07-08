import React from 'react'
import { useSelector } from 'react-redux'

const Header = () => {
  const {name, age} = useSelector(state => state.form)
  return (
    <header style={{
        width: '100%',
        height: '10vh',
        padding: '0 2em',
        background: '#ff04ea',
        fontFamily: 'Tahoma',
        fontSize: '18px',
        color: '#fff',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    }}
    >
        <div>Redux & React-Redux</div>
        <div>Name: {name}, Age: {age}</div>
    </header>
  )
}

export default Header