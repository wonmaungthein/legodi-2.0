import React from 'react'
import {
  View,
  ScrollView
} from 'react-native'
import styles from './AddArticleStyle'
import { Constants } from 'expo'

export default class AddArticle extends React.Component {
  static navigationOptions = {
    title: 'Add New Article',
    headerStyle: { backgroundColor: '#0f352f', paddingTop: Constants.statusBarHeight },
    headerTitleStyle: { color: '#e6bc44' },
    headerTintColor: '#e6bc44'
  };

  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          asdfds
        </ScrollView>
      </View>
    )
  }
}
