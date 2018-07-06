import React from 'react'
import {
  ScrollView,
  StyleSheet,
  Text,
  View } from 'react-native'

export default class AboutScreen extends React.Component {
  static navigationOptions = {
    title: 'Glasgow welcome back',
    headerStyle: { backgroundColor: '#0f352f' },
    headerTitleStyle: { color: '#e6bc44' }
  };

  render () {
    return (
      <ScrollView style={styles.container}>
        <View>
          <Text>About Screen</Text>
        </View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff'
  }
})
