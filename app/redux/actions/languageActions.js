import { UPDATE_LANGUAGE } from './types'

export const updateLanguage = (language) => {
  return {type: UPDATE_LANGUAGE, language}
}
