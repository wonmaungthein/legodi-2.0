import React from 'react'
import {
  Text,
  View,
  StyleSheet
} from 'react-native'

export default class Header extends React.Component {
  render () {
    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.tabBarInfoText}>
            This is a tab bar. You can edit it in:
          </Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000'
  }
})
