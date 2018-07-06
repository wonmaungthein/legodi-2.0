import React from 'react'
import {
  Text,
  StyleSheet,
  TouchableOpacity
} from 'react-native'
import { Ionicons } from '@expo/vector-icons'

const CategoriesList = (props) => {
  const iconName = (name) => {
    let str = ''
    switch (name) {
      case 'Welcome':
        str = 'md-information-circle'
        break
      case 'Asylum':
        str = 'md-paper'
        break
      case 'Volunteering':
        str = 'md-briefcase'
        break
      case 'Food':
        str = 'md-pizza'
        break
      case 'Parks':
        str = 'md-paw'
        break
      case 'Sport':
        str = 'md-tennisball'
        break
      case 'Shopping':
        str = 'md-cart'
        break
      case 'Transport':
        str = 'md-bus'
        break
      case 'Children':
        str = 'md-contacts'
        break
      case 'Emergency':
        str = 'md-warning'
        break
    }
    return str
  }

  return (
    <TouchableOpacity style={styles.box}>
      <Ionicons name={iconName(props.title)} size={36} color='#e5ba4f' />
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
