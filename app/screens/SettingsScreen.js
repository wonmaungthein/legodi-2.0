import React from 'react'
import { Text, View, Picker, StyleSheet } from 'react-native'
import { Constants } from 'expo'
import { connect } from 'react-redux'
import { updateLanguage } from '../redux/actions/languageActions'

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
    const { language } = this.props;
    if (language === 'ar') {
      return 'Arabic'
    }else if (language === 'am') {
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

export default connect(mapStateToProps, dispatchToProps)(SettingsScreen)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  language: {
    fontSize: 20,
    backgroundColor: '#e5ba4f',
    width: 330,
    padding: 10,
    textAlign: 'center'
  },
  changeLanguage: {
    fontSize: 18,
    marginTop: 15
  }
})
