import axios from 'axios'

export const getCategories = async (language = 'en') => axios.get(`/api/${language}`)

export const getArticles = async (categoryId, language) => axios.get(`/api/${language}/${categoryId}`)

export const getWeegieQuestions = async () => axios.get('/api/weegie')
