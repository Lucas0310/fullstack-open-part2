import axios from 'axios'

const baseUrl = 'http://localhost:3001/persons'

const getAll = () => {
    return axios.get(baseUrl).then(res => res.data)
}

const create = newPerson => {
    return axios.post(baseUrl, newPerson).then(res => res.data)
}

const deletePerson = id => {
    return axios.delete(`${baseUrl}/${id}`)
}

const updatePerson = (person) => {
    return axios.put(`${baseUrl}/${person.id}`, person).then(res => res.data)
}

const PersonService = { getAll, create, deletePerson, updatePerson }

export default PersonService