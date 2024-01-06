import axios from "axios";

const baseUrl = 'http://localhost:3001/persons'

const getAllPersons = () => {
    const request = axios.get(baseUrl)
    return request.then(response => response.data)
}

const createPerson = (personsObj) => {
    const request = axios.post(baseUrl, personsObj)
    return request.then(response => response.data)
}

const deleteP = (id) => {
    const request = axios.delete(`${baseUrl}/${id}`)
    return request.then(response => response.data)
}

export default { getAllPersons, createPerson, deleteP }