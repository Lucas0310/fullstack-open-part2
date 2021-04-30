import React from 'react'

const Person = ({ person, deletePerson }) => {

    return (
        <div>
            <li>{person.name}: {person.number} <button onClick={() => deletePerson(person)}>Delete</button></li> 
        </div>
    )
}

export default Person
