import axios from 'axios'

const instance = axios.create({
  baseURL: 'http://legodi-server.herokuapp.com/api'
})

export const getCategories = async (language = 'en') => instance.get(`/categories`)

export const getArticles = async (categoryId, language) => instance.get(`/categories/${categoryId}`)

export const getWeegieQuestions = async () => instance.get('/weegie')

export const getWeegieGameAnswers = async (data) => {
  try {
    const res = await instance.post('/weegie/user/answer', data)
    return res.data
  } catch (error) {
    console.error(error)
  }
}

export const addArticle = async (data) => instance.post('/api/addArticle', data)
