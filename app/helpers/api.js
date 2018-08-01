import axios from 'axios'
import library from '../__mock-api/library'

const instance = axios.create({
  baseURL: 'http://legodi-server.herokuapp.com/api'
})

export const getCategories = async (language = 'en') => instance.get(`/categories?language=${language}`)

export const getArticles = async (categoryId, language) => instance.get(`/categories/${categoryId}/?language=${language}`)

export const getWeegieQuestions = async () => axios.get('/api/weegie')

export const getWeegieGameAnswers = async (data) => {
  const response = await axios.get('/api/weegie/user/answer', { params: data })
  const result = library.compareAnswers(response.config.params)
  return result
}

export const addArticle = async (data) => instance.post('/api/addArticle', data)
