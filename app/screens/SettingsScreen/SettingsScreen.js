import React from 'react'
import { Text, View, Picker } from 'react-native'
import { connect } from 'react-redux'
import { fetchCategories } from '../../redux/actions/categoriesActions'
import { updateLanguage, updateCity } from '../../redux/actions/settingActions'
import styles from './SettingStyles'
import PropTypes from 'prop-types'
import { fetchCities } from '../../redux/actions/citiesActions'

class SettingsScreen extends React.Component {
  renderLanguage = () => {
    const { language } = this.props
    if (language === 'ar') {
      return 'عربي'
    } else if (language === 'am') {
      return 'አማርኛ'
    }
    return 'English'
  };

  translateContent = (language) => {
    if (language === 'ar') {
      return 'اخترت '
    } else if (language === 'am') {
      return 'ተመርጧል'
    } else {
      return 'is selected'
    }
  }

  translateHeaderContent = (language) => {
    if (language === 'ar') {
      return 'اختار اللغة'
    } else if (language === 'am') {
      return 'ተመርጧል'
    } else {
      return 'is selected'
    }
  }

  render () {
    const { language } = this.props
    const { languages } = this.props
    const { cities } = this.props
    return (
      <View style={styles.container}>
        <View style={styles.container}>
          <Text style={styles.language}>
            {this.renderLanguage()} {}
          </Text>
          <Text style={styles.changeLanguage}>{this.translateHeaderContent(language)}</Text>
          <Picker

            selectedValue={this.props.language}
            style={{ height: 50, width: 100 }}
            onValueChange={itemValue => { this.props.onLanguageChange(itemValue); this.props.fetchCategories(itemValue) }}
          >
            {
              languages.map((language, value) => {
                return <Picker.Item key={value} label={language.long_name} value={language.short_name} />
              })
            }
          </Picker>
        </View>
        <View style={styles.container}>
          <Text style={styles.language}>{this.props.city} is selected</Text>
          <Text style={styles.changeLanguage}>Change City:</Text>
          <Picker
            selectedValue={this.props.city}
            style={{ height: 50, width: 100 }}
            onValueChange={itemValue => { this.props.onCityChange(itemValue) }}
          >
            {
              cities.map((city, value) => {
                console.log(city, value)
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
  console.log(state.cities)
  return {
    language: state.Setting.language,
    city: state.Setting.city,
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
    fetchCategories: (language) => {
      return dispatch(fetchCategories(language))
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
