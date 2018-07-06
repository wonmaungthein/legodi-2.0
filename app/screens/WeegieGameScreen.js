import React from 'react'
import {
  Text,
  View
} from 'react-native'

export default class WeegieGame extends React.Component {
  static navigationOptions = {
    title: 'Glasgow welcome back',
    headerStyle: { backgroundColor: '#0f352f' },
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
