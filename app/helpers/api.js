import axios from 'axios'

export const getCategories = async (language = 'en') => {
  return axios.get(`/api/${language}`)
}

export const getArticles = async (categoryId, language = 'en') => {
  return axios.get(`/api/${language}/${categoryId}`)
}
