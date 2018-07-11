import React from 'react'
import {
  Text,
  View
} from 'react-native'
import { Constants } from 'expo'
import { connect } from 'react-redux'

class WeegieGame extends React.Component {
  static navigationOptions = {
    title: 'Glasgow Welcome Pack',
    headerStyle: { backgroundColor: '#0f352f', paddingTop: Constants.statusBarHeight },
    headerTitleStyle: { color: '#e6bc44' }
  };

  render () {
    return (
      <View>
        <Text>Weegie Game Screen</Text>
      </View>
    )
  }
}

const stateToProps = (state) => ({
  state
})

export default connect(stateToProps)(WeegieGame)
