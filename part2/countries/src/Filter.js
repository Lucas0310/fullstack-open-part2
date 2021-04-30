import React from 'react'

const Filter = ({ filter, setFilter }) => {

    const clickHandler = (event) => {
        setFilter(event.target.value)
    }

    return (
        <div>
            find countries <input value={filter} onChange={clickHandler} />
        </div>
    )
}

export default Filter
