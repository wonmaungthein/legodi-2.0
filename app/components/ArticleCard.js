import React from 'react'
import {
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  View
} from 'react-native'

const ArticleCard = (props) => {
  const { language } = props
  return (
    <TouchableOpacity
      style={[styles.container, styles.text]}
      onPress={props.navigateToArticle}>
      <Image style={styles.image} source={{uri: 'http://placehold.it/100x80'}} />
      <View style={styles.content}>
        <Text style={language === 'ar' ? styles.arabicTitle : styles.title}>{props.title}</Text>
        <Text style={language === 'ar' ? styles.arabicDescription : styles.description} numberOfLines={2} ellipsizeMode={'tail'}>{props.description}</Text>
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
  },
  arabicTitle: {
    textAlign: 'right',
    fontWeight: 'bold'
  },
  arabicDescription: {
    fontSize: 15,
    textAlign: 'right'
  }
})
