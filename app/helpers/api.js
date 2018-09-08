import axios from 'axios'

const instance = axios.create({
  baseURL: 'http://localhost:3001/api'
})

export const getCategories = async (languageId = 'en', cityId = 'GLA') =>
  instance.get(`/categories/language?language=${languageId}&city=${cityId}`)

export const getLanguages = async () => instance.get('/languages')

export const getCities = async () => {
  const response = await instance.get('/cities')
  return response
}

export const getArticles = async (categoryId) => instance.get(`/categories/${categoryId}/articles`)

export const getWeegieQuestions = async () => instance.get('/weegie/quiz')

export const getWeegieGameAnswers = async (data) => {
  try {
    const res = await instance.post('/weegie/quiz/answers', data)
    return res.data
  } catch (error) {
    console.error(error)
  }
}

export const addArticle = async (data) => {
  try {
    const { data: response } = await instance.post('/articles', data)
    return response
  } catch (error) {
    console.log(error)
  }
}
