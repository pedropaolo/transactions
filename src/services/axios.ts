import axios from 'axios'

// Criação de instância do axios e definição da baseURL

export const api = axios.create({
    baseURL: 'http://localhost:3000/api'
})