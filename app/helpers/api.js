import axios from 'axios'
import FormData from 'form-data'

const instance = axios.create({
  baseURL: 'http://localhost:3001/api'
})

export const getCategories = async (language = 'en') => instance.get(`/categories/language?language=${language}`)

export const getArticles = async (categoryId, language) => instance.get(`/categories/${categoryId}/?language=${language}`)

export const getWeegieQuestions = async () => instance.get('/weegie')

export const getWeegieGameAnswers = async (data) => {
  try {
    const res = await instance.post('/weegie/user/answer', data)
    return res.data
  } catch (error) {
    console.error(error)
  }
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

  try {
    const response = await instance.post('/addArticle', data, config)
    return response
  } catch (error) {
    console.log(error)
  }
}
