import React from 'react'
import {
  Text,
  TouchableOpacity,
  Image,
  View
} from 'react-native'
import styles from './ArticleStyle'
import PropTypes from 'prop-types'

const ArticleCard = (props) => {
  const { language, description, title, articleImage } = props
  return (
    <TouchableOpacity
      style={[styles.container, styles.text]}
      onPress={props.navigateToArticle}>
      <Image style={styles.image} source={{ uri: articleImage ? `data:image/png;base64,${articleImage}` : 'http://placehold.it/300x200' }} />
      <View style={styles.content}>
        <Text style={language === 'ar' ? styles.arabicTitle : styles.title}>{title}</Text>
        <Text style={language === 'ar' ? styles.arabicDescription : styles.description} numberOfLines={2} ellipsizeMode={'tail'}>{description}</Text>
      </View>
    </TouchableOpacity>
  )
}

ArticleCard.propTypes = {
  navigateToArticle: PropTypes.func,
  title: PropTypes.string,
  description: PropTypes.string
}

export default ArticleCard
