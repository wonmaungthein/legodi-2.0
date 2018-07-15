import React from 'react'
import {
  Text,
  TouchableOpacity
} from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import styles from './IconStyles'
import PropTypes from 'prop-types'

const CategoriesIcon = (props) => {
  const getIconName = (name) => {
    let iconName = ''
    switch (name) {
      case 'Welcome':
        iconName = 'md-information-circle'
        break
      case 'Asylum':
        iconName = 'md-paper'
        break
      case 'Volunteering':
        iconName = 'md-briefcase'
        break
      case 'Food':
        iconName = 'md-pizza'
        break
      case 'Parks':
        iconName = 'md-paw'
        break
      case 'Sport':
        iconName = 'md-tennisball'
        break
      case 'Shopping':
        iconName = 'md-cart'
        break
      case 'Transport':
        iconName = 'md-bus'
        break
      case 'Children':
        iconName = 'md-contacts'
        break
      case 'Emergency':
        iconName = 'md-warning'
        break
      default:
        iconName = 'md-help'
    }
    return iconName
  }

  return (
    <TouchableOpacity
      style={styles.box}
      onPress={() => props.navigation('Articles',
        {
          id: props.id,
          categoryTitle: props.title,
          description: props.description
        }
      )}>
      <Ionicons name={getIconName(props.iconName)} size={36} color='#e5ba4f' />
      <Text style={styles.title}>{props.title}</Text>
    </TouchableOpacity>
  )
}

CategoriesIcon.propTypes = {
  navigation: PropTypes.func,
  id: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  categoryTitle: PropTypes.string,
  description: PropTypes.string,
  title: PropTypes.string
}

export default CategoriesIcon
