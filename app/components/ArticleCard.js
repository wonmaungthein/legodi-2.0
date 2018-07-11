import React from 'react'
import {
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  View
} from 'react-native'

const ArticleCard = (props) => {
  return (
    <TouchableOpacity
      style={[styles.container, styles.text]}
      onPress={props.navigateToArticle}>
      <Image style={styles.image} source={{uri: 'http://placehold.it/100x80'}} />
      <View style={styles.content}>
        <Text style={styles.title}>{props.title}</Text>
        <Text style={styles.description} numberOfLines={2} ellipsizeMode={'tail'}>{props.description}</Text>
      </View>
    </TouchableOpacity>
  )
}

export default ArticleCard

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    paddingBottom: 10
  },
  text: {
    width: 250
  },
  content: {
    flexDirection: 'column',
    paddingLeft: 5
  },
  image: {
    width: 100,
    height: 80
  },
  title: {
    fontWeight: 'bold'
  },
  description: {
    fontSize: 15
  }
})
