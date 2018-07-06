import React from 'react'
import {
  Text,
  View,
  StyleSheet
} from 'react-native'

export default class FotterIcon extends React.Component {
  static navigationOptions = {
    title: 'Glasgow welcome back',
    headerStyle: { backgroundColor: '#0f352f' },
    headerTitleStyle: { color: '#e6bc44' }
  };

  render () {
    return (
      <View style={styles.icon}>
        <Text>Footer Icon</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  icon: {
    backgroundColor: '#000',
    color: '#fff',
    width: 100,
    height: 1000,
    display: 'flex',
    alignItems: 'center',
    flex: 1
  }
})
