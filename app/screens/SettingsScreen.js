import React from 'react'
import { Text, View, Picker, StyleSheet } from 'react-native'
import { Constants } from 'expo'
import { connect } from 'react-redux'
import Action from '../redux/actions/Language'

class SettingsScreen extends React.Component {
  static navigationOptions = {
    title: 'Glasgow Welcome Pack',
    headerStyle: {
      backgroundColor: '#0f352f',
      paddingTop: Constants.statusBarHeight
    },
    headerTitleStyle: { color: '#e6bc44' }
  };

  render () {
    return (
      <View style={styles.container}>
        <Text style={styles.language}>{this.props.language} Is Selected</Text>
        <Text style={styles.changeLanguage}>Change Language:</Text>
        <Picker
          selectedValue={this.props.language}
          style={{ height: 50, width: 100 }}
          onValueChange={itemValue => Action.updateLanguage(itemValue)}
        >
          <Picker.Item label='English' value='English' />
          <Picker.Item label='Arabic' value='Arabic' />
          <Picker.Item label='Amharic' value='Amharic' />
        </Picker>
      </View>
    )
  }
}

const stateToProps = state => {
  return ({
    language: state.Language.language
  })
}

export default connect(stateToProps)(SettingsScreen)

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
