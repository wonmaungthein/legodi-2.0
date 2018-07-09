import React from 'react'
import {
  Text,
  View
} from 'react-native'

export default class Article extends React.Component {
  static navigationOptions = {
    title: 'Glasgow Welcome Pack',
    headerStyle: { backgroundColor: '#0f352f' },
    headerTitleStyle: { color: '#e6bc44' }
  };

  render () {
    return (
      <View>
        <Text>Article Text</Text>
      </View>
    )
  }
}
