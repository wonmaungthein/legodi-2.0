import React from 'react'
import {
  Text,
  View,
  Image,
  ScrollView
} from 'react-native'
import { Constants } from 'expo'
import styles from './ArticleStyle'
export default class Article extends React.Component {
  static navigationOptions = {
    title: 'Glasgow Welcome Pack',
    headerStyle: { backgroundColor: '#0f352f', paddingTop: Constants.statusBarHeight },
    headerTitleStyle: { color: '#e6bc44' },
    headerTintColor: '#e6bc44'
  };

  render () {
    const language = this.props.navigation.getParam('language', 'en')
    const description = this.props.navigation.getParam('description', 'Default description')
    return (
      <View style={styles.container}>
        <ScrollView>
          <View style={styles.center}>
            <Image
              style={styles.image}
              source={{ uri: 'http://placehold.it/300x200' }}
            />
          </View>
          <View style={[styles.center, { padding: 15 }]}>
            <Text style={language === 'ar' ? styles.arabicTitle : styles.title}>{this.props.navigation.getParam('title', 'Default Title')}</Text>
          </View>
          <View style={styles.paddingSides}>
            <Text style={language === 'ar' ? styles.arabicDescription : styles.description}>{description}</Text>
          </View>
        </ScrollView>
      </View>
    )
  }
}
