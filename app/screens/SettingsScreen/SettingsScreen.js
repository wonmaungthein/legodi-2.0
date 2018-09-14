import React from 'react'
import { Text, View, Picker } from 'react-native'
import { connect } from 'react-redux'
import { fetchCategories } from '../../redux/actions/categoriesActions'
import { updateLanguage, updateCity } from '../../redux/actions/settingActions'
import styles from './SettingStyles'
import PropTypes from 'prop-types'
import { fetchCities } from '../../redux/actions/citiesActions'
import { Constants } from 'expo'

class SettingsScreen extends React.Component {
  componentDidMount () {
    const { cities, cityId, languageId } = this.props
    const { city_name: title, primary_color: primaryColor, secondary_color: secondaryColor, categories_color: categoriesColor } = cities.filter(city => city.city_id === cityId)[0]
    this.props.navigation.setParams({ title, primaryColor, secondaryColor, categoriesColor, languageId, renderHeaderTitle: this.renderHeaderTitle(cityId, languageId) })
  }

  updateCityTitleAndColors = (cityId) => {
    const { cities } = this.props
    const { city_name: title, primary_color: primaryColor, secondary_color: secondaryColor, categories_color: categoriesColor } = cities.filter(city => city.city_id === cityId)[0]
    this.props.navigation.setParams({ title, primaryColor, secondaryColor, categoriesColor })
  }

  translateHeaderTitle = (cityId, languageId) => {
    this.props.navigation.setParams({ languageId, renderHeaderTitle: this.renderHeaderTitle(cityId, languageId) })
  }

  renderCity = (cityId) => {
    const { cities } = this.props
    return cities.filter(city => city.city_id === cityId)[0].city_name
  }

  renderHeaderTitle = (cityId, languageId) => {
    const city = this.renderCity(cityId)
    if (languageId === 'en') {
      return `${city} Welcome Pack`
    } else if (languageId === 'ar') {
      if (city === 'Glasgow') {
        return 'باقة ترحيب غلاسكو'
      } else if (city === 'Edinburgh') {
        return 'باقة ترحيب غلاسكو'
      } else {
        return 'بايسلي ترحيب حزمة'
      }
    } else {
      if (city === 'Glasgow') {
        return 'ግላስጎው እንኳን ደህና መጡ ፓኬጅ'
      } else if (city === 'Edinburgh') {
        return 'የኢዲትብሌን የእንኳን ደህና መጡ ጥሪ'
      } else {
        return 'Paisley እንኳን ደህና መጡ እሽግ'
      }
    }
  }

  static navigationOptions = ({ navigation }) => {
    const { params } = navigation.state
    const primaryColor = params ? `${params.primaryColor}` : '#e6bb44'
    const secondaryColor = params ? `${params.secondaryColor}` : '#0f352e'
    const headerTitle = params ? params.renderHeaderTitle : 'Glasgow Welcome Pack'
    return {
      title: headerTitle,
      headerStyle: {
        backgroundColor: secondaryColor,
        paddingTop: Constants.statusBarHeight
      },
      headerTitleStyle: { color: primaryColor }
    }
  };

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

  render () {
    const { languages, cities, languageId, cityId } = this.props
    const { city_name: title, primary_color: primaryColor, secondary_color: secondaryColor } = cities.filter(city => city.city_id === cityId)[0]
    return (
      <View style={[styles.container, { backgroundColor: primaryColor }]}>
        <View style={[styles.container, { backgroundColor: primaryColor }]}>
          <Text style={[styles.language, { backgroundColor: secondaryColor, color: primaryColor }]}>
            {this.renderLanguage(languageId)} {}
          </Text>
          <Picker

            selectedValue={languageId}
            style={{ height: 50, width: 100 }}
            onValueChange={itemValue => { this.props.onLanguageChange(itemValue); this.updateCategories(itemValue, cityId); this.translateHeaderTitle(cityId, itemValue) }}
          >
            {
              languages.map((language, value) => {
                return <Picker.Item key={value} label={language.long_name} value={language.short_name} />
              })
            }
          </Picker>
        </View>
        <View style={[styles.container, { backgroundColor: primaryColor }]}>
          <Text style={[styles.language, { backgroundColor: secondaryColor, color: primaryColor }]}>{title} is selected</Text>
          <Picker
            selectedValue={cityId}
            style={{ height: 50, width: 100 }}
            onValueChange={itemValue => {
              this.props.onCityChange(itemValue)
              this.updateCategories(languageId, itemValue)
              this.updateCityTitleAndColors(itemValue)
              this.translateHeaderTitle(itemValue, languageId)
            }}
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
  languageId: PropTypes.string,
  languages: PropTypes.array,
  cityId: PropTypes.string.isRequired,
  cities: PropTypes.array.isRequired,
  onLanguageChange: PropTypes.func,
  onCityChange: PropTypes.func,
  fetchCategories: PropTypes.func,
  fetchCities: PropTypes.func
}

export default connect(
  mapStateToProps,
  dispatchToProps
)(SettingsScreen)
