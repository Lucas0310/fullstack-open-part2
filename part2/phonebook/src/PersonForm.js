import React from 'react'
import PersonService from './Services/PersonService'

const PersonForm = ({ newName, newNumber, setName, setNumber, persons, setPersons, setNotification }) => {

    const nameHandler = (event) => {
        setName(event.target.value)
    }

    const numberHandler = (event) => {
        setNumber(event.target.value)
    }

    const submitHandler = (event) => {
        event.preventDefault()

        const updatePerson = () => {
            window.confirm(`${newName} is already added to phonebook. Replace the old number with a new one?`)

            const personToUpdate = { ...personAlreadyAdded, number: newNumber }

            PersonService.updatePerson(personToUpdate).then(res => {
                setNotification(`Updated ${personToUpdate.name}`, 'success')

                setTimeout(() => {
                    setNotification(null)
                }, 5000)

                setPersons(persons.map(p => p.id !== personToUpdate.id ? p : res))
            }, () => {
                setNotification(`Information of ${personToUpdate.name} has already been removed from the server`, 'error')

                setTimeout(() => {
                    setNotification(null)
                }, 5000)
            })

            return
        }

        const createPerson = () => {
            const generateId = () => Math.max(...persons.map(person => person.id)) + 1

            const newPerson = { id: generateId(), name: newName, number: newNumber }

            PersonService.create(newPerson).then(res => {

                setNotification(`Added ${newPerson.name}`, 'success')

                setTimeout(() => {
                    setNotification(null)
                }, 5000)

                setPersons(persons.concat(res))
            })
        }

        const personAlreadyAdded = persons.find(person => person.name === newName)

        if (personAlreadyAdded) {
            updatePerson(personAlreadyAdded)
            return
        }

        createPerson()


    }

    return (
        <form onSubmit={submitHandler}>
            <div>
                name: <input value={newName} onChange={nameHandler} />
            </div>
            <div>
                number: <input value={newNumber} onChange={numberHandler} />
            </div>
            <div>
                <button type="submit">add</button>
            </div>
        </form>
    )
}

export default PersonForm
