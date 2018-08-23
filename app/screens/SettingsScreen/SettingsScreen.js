import React from 'react'
import { Text, View, Picker } from 'react-native'
import { connect } from 'react-redux'
import { updateLanguage, updateCity } from '../../redux/actions/settingActions'
import styles from './SettingStyles'
import PropTypes from 'prop-types'

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
    const {language} = this.props
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
            onValueChange={itemValue => this.props.onLanguageChange(itemValue)}
          >
            <Picker.Item label='English' value='en' />
            <Picker.Item label='Arabic' value='ar' />
            <Picker.Item label='Amharic' value='am' />
          </Picker>
        </View>
        <View style={styles.container}>
          <Text style={styles.language}>{this.props.city} is selected</Text>
          <Text style={styles.changeLanguage}>Change City:</Text>
          <Picker
            selectedValue={this.props.city}
            style={{ height: 50, width: 100 }}
            onValueChange={itemValue => this.props.onCityChange(itemValue)}
          >
            <Picker.Item label='Glasgow' value='Glasgow' />
            <Picker.Item label='Edinburgh' value='Edinburgh' />
            <Picker.Item label='Paisley' value='Paisley' />
          </Picker>
        </View>
      </View>
    )
  }
}

const mapStateToProps = state => {
  return {
    language: state.Setting.language,
    city: state.Setting.city
  }
}

const dispatchToProps = dispatch => {
  return {
    onLanguageChange: language => {
      dispatch(updateLanguage(language))
    },
    onCityChange: city => {
      dispatch(updateCity(city))
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
