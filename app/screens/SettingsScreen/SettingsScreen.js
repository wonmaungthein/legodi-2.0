import React from 'react'
import { Text, View, Picker } from 'react-native'
import { Constants } from 'expo'
import { connect } from 'react-redux'
import { updateLanguage } from '../../redux/actions/languageActions'
import styles from './SettingStyles'
import PropTypes from 'prop-types'

class SettingsScreen extends React.Component {
  static navigationOptions = {
    title: 'Glasgow Welcome Pack',
    headerStyle: {
      backgroundColor: '#0f352f',
      paddingTop: Constants.statusBarHeight
    },
    headerTitleStyle: { color: '#e6bc44' }
  };

  renderLanguage = () => {
    const { language } = this.props
    if (language === 'ar') {
      return 'Arabic'
    } else if (language === 'am') {
      return 'Amharic'
    }
    return 'English'
  }

  render () {
    return (
      <View style={styles.container}>
        <Text style={styles.language}>{this.renderLanguage()} Is Selected</Text>
        <Text style={styles.changeLanguage}>Change Language:</Text>
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
    )
  }
}

const mapStateToProps = state => {
  return ({
    language: state.language.language
  })
}

const dispatchToProps = dispatch => {
  return {
    onLanguageChange: language => {
      dispatch(updateLanguage(language))
    }
  }
}

SettingsScreen.propTypes = {
  language: PropTypes.string,
  onLanguageChange: PropTypes.func
}

export default connect(mapStateToProps, dispatchToProps)(SettingsScreen)
