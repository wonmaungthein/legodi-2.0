import React from 'react'
import {
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  View
} from 'react-native'

const ArticlesList = (props) => {
  return (
    <TouchableOpacity
      style={[styles.container, styles.text]}
      onPress={() => props.navigation.navigate('Article', {
        title: props.title,
        image: props.image,
        description: props.description
      })}>
    >
      <Image style={styles.image} source={{uri: 'http://placehold.it/100x80'}} />
      <View style={styles.content}>
        <Text style={styles.title}>{props.title}</Text>
        <Text style={styles.description} numberOfLines={2} ellipsizeMode={'tail'}>{props.description}</Text>
      </View>
    </TouchableOpacity>
  )
}

export default ArticlesList

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
