import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { submitForm } from '../../redux/UserForm/formActions'

const controllerStyles = {
    marginTop: '1em',
    display: 'flex',
    flexDirection: 'column'
}

const inputStyles = {
    width: '300px',
    height: '40px',
    border: 'none',
    outline: 'none',
    borderRadius: '5px',
    marginTop: '10px',
    paddingLeft: '10px',
    fontSize: '14px',
    color: '#fff',
    background: '#c1bdbd38',
    letterSpacing: '1px',
}

const buttonStyle = {
    width: '300px',
    height: '40px',
    marginTop: '1em',
    background: '#ff04ea',
    borderRadius: '5px',
    color: '#fff',
    fontWeight: '600',
    cursor: 'pointer'

}

const Form = () => {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const dispatch = useDispatch();

    return (
        <div style={{
            width: '100%',
            display: 'grid',
            placeItems: 'center',
            alignItems: 'center'
        }}>
            <div style={controllerStyles}>
                Name
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    style={inputStyles}
                />
            </div>
            <div style={controllerStyles}>
                Age
                <input
                    type="number"
                    value={age}
                    onChange={e => setAge(e.target.value)}
                    style={inputStyles}
                />
            </div>

            <button
                style={buttonStyle}
                onClick={() => {
                    if (name.trim() === '' || age.trim() === '')
                        return
                    setName('');
                    setAge('');
                    dispatch(submitForm({ name, age }));
                }}
            >Submit</button>
        </div>
    )
}

export default Form