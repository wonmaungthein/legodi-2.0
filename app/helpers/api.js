import axios from 'axios'
import library from '../__mock-api/library'

// Create base URL for the old Heroku api
const instance = axios.create({
  baseURL: 'http://legodi-server.herokuapp.com/api'
})

export const getCategories = async (language = 'en') => instance.get(`/categories`)

export const getArticles = async (categoryId, language) => instance.get(`/categories/${categoryId}`)

export const getWeegieQuestions = async () => instance.get('/weegie')

export const getWeegieGameAnswers = async (data) => {
  return instance.get('/weegie/user/answer', { params: data })
    .then((response) => library.compareAnswers(response.config.params))
}
