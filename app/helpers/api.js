import axios from 'axios'
import library from '../__mock-api/library'

export const getCategories = async (language = 'en') => axios.get(`/api/${language}`)

export const getArticles = async (categoryId, language) => axios.get(`/api/${language}/${categoryId}`)

export const getWeegieQuestions = async () => axios.get('/api/weegie')

export const getWeegieGameAnswers = async (data) => {
  const response = await axios.get('/api/weegie/user/answer', {params: data})
  const result = library.compareAnswers(response.config.params)
  return result
}
