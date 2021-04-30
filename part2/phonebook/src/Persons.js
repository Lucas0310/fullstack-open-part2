import React from 'react'
import Person from './Person'
import PersonService from './Services/PersonService'

const Persons = ({ persons, searchTerm, setPersons, setNotification }) => {

    const deletePerson = (person) => {
        window.confirm(`Delete ${person.name}?`)

        PersonService.deletePerson(person.id).catch(() => {
            setNotification(`Information of ${person.name} has already been from server`, 'error')

            setTimeout(() => {
                setNotification(null)
            }, 5000)

            setPersons(persons.filter(p => p.id !== person.id))
        })
    }
    return (
        persons.map(person => {
            if (person.name.toUpperCase().includes(searchTerm.toUpperCase())) {
                return <div key={person.id}>
                    <Person person={person} setPersons={setPersons} deletePerson={deletePerson}></Person>
                </div>
            }

            return ''
        }
        )
    )
}

export default Persons
