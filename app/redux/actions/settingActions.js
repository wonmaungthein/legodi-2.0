import * as types from './types'

export const updateLanguage = (language) => {
  return {type: types.UPDATE_LANGUAGE, language}
}
export const updateCity = (city) => {
  return {type: types.UPDATE_CITY, city}
}
