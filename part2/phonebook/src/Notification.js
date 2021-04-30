import React from 'react'

const Notification = ({ message, type }) => {

    const succcess = {
        color: 'green',
        background: 'lightgrey',
        fontSize: '20px',
        borderStyle: 'solid',
        borderRadius: '5px',
        padding: '10px',
        marginBottom: '10px'
    }

    const error = {
        color: 'red',
        background: 'lightgrey',
        fontSize: '20px',
        borderStyle: 'solid',
        borderRadius: '5px',
        padding: '10px',
        marginBottom: '10px'
    }

    if (!message) return null

    return (
        <div style={type === 'success' ? succcess : error}>
            {message}
        </div>
    )
}

export default Notification
