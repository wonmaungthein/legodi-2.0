import axios from 'axios'

export const getCategories = async (language = 'en') => {
  return axios.get(`/api/${language}`)
}
