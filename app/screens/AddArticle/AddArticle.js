import React from 'react'
import {
  View,
  ScrollView,
  Text
} from 'react-native'
import styles from './AddArticleStyle'
import { Constants } from 'expo'
import Colors from '../../constants/Colors'
import { FormLabel, FormInput } from 'react-native-elements'

const { primaryColor, secondaryColor } = Colors

export default class AddArticle extends React.Component {
  static navigationOptions = {
    title: 'Add New Article',
    headerStyle: { backgroundColor: secondaryColor, paddingTop: Constants.statusBarHeight },
    headerTitleStyle: { color: primaryColor },
    headerTintColor: primaryColor
  };

  someFunction () {
    // console.warn("hi")
  }
  render () {
    const title = this.props.navigation.getParam('categoryTitle', 'No category')
    return (
      <ScrollView style={styles.container}>
        <View style={styles.layout}>
          <Text>Category: {title}</Text>
          <View>
            <FormLabel labelStyle={styles.inputTitle}>Title</FormLabel>
            <FormInput
              onChangeText={this.someFunction}
              inputStyle={{ color: secondaryColor }}
              containerStyle={{ borderBottomColor: secondaryColor }}
            />
          </View>
        </View>
      </ScrollView>
    )
  }
}
