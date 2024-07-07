
import axios from 'axios'

const apiClient = axios.create(
    {
        baseURL: 'http://localhost:8080'
    }
);

export const Apitodo= (username) => apiClient.get(`/users/${username}/todo`)

export const deleteTodo= (username, id) => apiClient.delete(`/users/${username}/todo/${id}`)

export const getTodoApi= (username, id) => apiClient.get(`/users/${username}/todo/${id}`)

export const updateApi= (username, id, todo) => apiClient.put(`/users/${username}/todo/${id}`, todo)

export const addTodoApi= (username,  todo) => apiClient.post(`/users/${username}/todo`, todo)

