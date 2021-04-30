import React from 'react'

const Filter = ({searchTerm, setSearchTerm}) => {   

  const onChangeHandlerSearch = (event) => {
    setSearchTerm(event.target.value)
  }

    return (
        <div>
        filter shown with: <input value={searchTerm} onChange={onChangeHandlerSearch}></input>
      </div>
    )
}

export default Filter
