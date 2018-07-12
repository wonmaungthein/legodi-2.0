import React from 'react'
import {
  Text,
  StyleSheet,
  TouchableOpacity
} from 'react-native'
import { Ionicons } from '@expo/vector-icons'

const CategoriesList = (props) => {
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

export default CategoriesList

const styles = StyleSheet.create({
  box: {
    width: 100,
    height: 100,
    marginTop: 20,
    backgroundColor: '#245e55',
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    color: '#fff',
    fontWeight: 'bold',
    paddingTop: 10
  }
})
