import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement } from '../../redux/Counter/counterAction'

const styles = {
    background: '#ff04ea',
    color: '#fff',
    border: 'none',
    padding: '10px 20px',
    borderRadius: '5px',
    fontSize: '14px',
    fontWeight: '600',
    cursor: 'pointer'
}

const CounterButtons = () => {

    const dispatch = useDispatch();


    return (
        <div style={{
            marginTop: '1em',
            background: '#383837',
            padding: '1em',
            borderRadius: '5px'
            }}>
            <button
                onClick={() => {
                    dispatch(increment())
                }}
                style={styles}
            >Increment</button>
            <button
                onClick={() => {
                    dispatch(decrement())
                }}
                style={{ ...styles, marginLeft: '10px' }}>Decrement</button>
        </div>
    )
}

export default CounterButtons