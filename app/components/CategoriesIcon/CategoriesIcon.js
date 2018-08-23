import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import {
  Ionicons, MaterialIcons, FontAwesome, Entypo, MaterialCommunityIcons, Foundation
} from '@expo/vector-icons'
import styles from './IconStyles'
import PropTypes from 'prop-types'

const CategoriesIcon = props => {
  const getIconName = name => {
    switch (name) {
      case 'Welcome':
        return <Entypo name='hand' size={36} color='#e5ba4f' />
      case 'Asylum':
        return <FontAwesome name='balance-scale' size={32} color='#e5ba4f' />
      case 'Volunteering':
        return <FontAwesome name='child' size={36} color='#e5ba4f' />
      case 'Food':
        return <MaterialCommunityIcons name='food' size={43} color='#e5ba4f' />
      case 'Parks':
        return <Foundation name='guide-dog' size={47} color='#e5ba4f' />
      case 'Sport':
        return <MaterialIcons name='directions-run' size={39} color='#e5ba4f' />
      case 'Shopping':
        return <Ionicons name='md-cart' size={36} color='#e5ba4f' />
      case 'Transport':
        return <Ionicons name='ios-train' size={40} color='#e5ba4f' />
      case 'Children':
        return <Ionicons name='md-contacts' size={36} color='#e5ba4f' />
      case 'Emergency':
        return <FontAwesome name='heartbeat' size={36} color='#e5ba4f' />
      default:
        return <Ionicons name='md-help' size={36} color='#e5ba4f' />
    }
  }
  return (
    <TouchableOpacity
      style={styles.box}
      onPress={() =>
        props.navigation('Articles', {
          id: props.id,
          categoryTitle: props.title,
          description: props.description,
          categoryId: props.id
        })
      }
    >
      <View style={styles.corner} />
      {getIconName(props.iconName)}

      <Text style={styles.title}>{props.title}</Text>
    </TouchableOpacity>
  )
}

CategoriesIcon.propTypes = {
  navigation: PropTypes.func,
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  categoryTitle: PropTypes.string,
  description: PropTypes.string,
  title: PropTypes.string
}

export default CategoriesIcon
