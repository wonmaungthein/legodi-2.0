import axios from 'axios'
import FormData from 'form-data'

const instance = axios.create({
  baseURL: 'https://api.staging.legodi.codeyourfuture.io/api'
})

export const getCategories = async (language = 'en') => instance.get(`/categories/language?language=${language}`)

export const getLanguages = async () => instance.get('/languages')

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
