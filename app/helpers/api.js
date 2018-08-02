import axios from 'axios'
import FormData from 'form-data'
import library from '../__mock-api/library'

const instance = axios.create({
  baseURL: 'http://legodi-server.herokuapp.com/api'
})

export const getCategories = async (language = 'en') => instance.get(`/categories`)

export const getArticles = async (categoryId, language) => instance.get(`/categories/${categoryId}`)

export const getWeegieQuestions = async () => axios.get('/api/weegie')

export const getWeegieGameAnswers = async (data) => {
  const response = await axios.get('/api/weegie/user/answer', { params: data })
  const result = library.compareAnswers(response.config.params)
  return result
}

export const addArticle = async (article, file) => {
  const config = {
    headers: {
      'accept': 'application/json',
      'Accept-Language': 'en-US,en;q=0.8',
      'Content-Type': 'multipart/form-data'
    }
  }

  let data = new FormData()
  data.append('article', JSON.stringify(article))

  if (file) {
    data.append('image', file)
  }
  console.log(data)
  return instance.post('/addArticle', data, config)
}
