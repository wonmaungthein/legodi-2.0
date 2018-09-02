import React from 'react'
import { Text, View, Picker } from 'react-native'
import { connect } from 'react-redux'
import { fetchCategories } from '../../redux/actions/categoriesActions'
import { updateLanguage, updateCity } from '../../redux/actions/settingActions'
import styles from './SettingStyles'
import PropTypes from 'prop-types'
import { fetchCities } from '../../redux/actions/citiesActions'

class SettingsScreen extends React.Component {
  renderLanguage = (languageId) => {
    if (languageId === 'ar') {
      return 'عربي اخترت'
    } else if (languageId === 'am') {
      return 'አማርኛ ተመርጧል'
    } else {
      return 'English is selected'
    }
  }

  updateCategories = (languageId, cityId) => {
    this.props.fetchCategories(languageId, cityId)
  }

  render() {
    const { languages, cities, languageId, cityId } = this.props

    return (
      <View style={styles.container}>
        <View style={styles.container}>
          <Text style={styles.language}>
            {this.renderLanguage(languageId)} {}
          </Text>
          <Picker

            selectedValue={languageId}
            style={{ height: 50, width: 100 }}
            onValueChange={itemValue => { this.props.onLanguageChange(itemValue); this.updateCategories(itemValue, cityId) }}
          >
            {
              languages.map((language, value) => {
                return <Picker.Item key={value} label={language.long_name} value={language.short_name} />
              })
            }
          </Picker>
        </View>
        <View style={styles.container}>
          <Text style={styles.language}>{cities.filter(city => city.city_id === cityId)[0].city_name} is selected</Text>
          <Picker
            selectedValue={cityId}
            style={{ height: 50, width: 100 }}
            onValueChange={itemValue => { this.props.onCityChange(itemValue); this.updateCategories(languageId, itemValue) }}
          >
            {
              cities.map((city, value) => {
                return <Picker.Item key={value} label={city.city_name} value={city.city_id} />
              })
            }
          </Picker>
        </View>
      </View>
    )
  }
}

const mapStateToProps = state => {
  return {
    languageId: state.Setting.language,
    cityId: state.Setting.city,
    languages: state.languages.languagesList,
    cities: state.cities.citiesList
  }
}

const dispatchToProps = dispatch => {
  return {
    onLanguageChange: language => {
      dispatch(updateLanguage(language))
    },
    onCityChange: city => {
      dispatch(updateCity(city))
    },
    fetchCategories: (languageId, cityId) => {
      return dispatch(fetchCategories(languageId, cityId))
    },
    fetchCities: () => {
      return dispatch(fetchCities())
    }
  }
}

SettingsScreen.propTypes = {
  language: PropTypes.string,
  onLanguageChange: PropTypes.func
}

export default connect(
  mapStateToProps,
  dispatchToProps
)(SettingsScreen)
