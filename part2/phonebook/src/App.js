import React, { useState, useEffect } from 'react'
import Filter from './Filter'
import PersonForm from './PersonForm'
import Persons from './Persons'
import PersonService from './Services/PersonService'
import Notification from './Notification'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [searchTerm, setSearchTerm] = useState('')
  const [notification, setNotification] = useState(null, 'success')

  useEffect(() => {
    PersonService.getAll().then(res => setPersons(res))
  }, [])

  return (
    <div>
      <Notification message={notification}></Notification>
      <h2>Phonebook</h2>
      <Filter filterString={searchTerm} setSearchTerm={setSearchTerm}></Filter>
      <PersonForm newName={newName}
        setName={setNewName}
        newNumber={newNumber}
        setNumber={setNewNumber}
        persons={persons}
        setPersons={setPersons}
        setNotification={setNotification}>
      </PersonForm>
      <h2>Numbers</h2>
      <Persons persons={persons} searchTerm={searchTerm} setPersons={setPersons} setNotification={setNotification}></Persons>
    </div>
  )
}

export default App