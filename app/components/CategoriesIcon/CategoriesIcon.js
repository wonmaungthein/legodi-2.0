import React from 'react'
import { connect } from 'react-redux'
import { Text, TouchableOpacity, View } from 'react-native'
import {
  Ionicons,
  MaterialIcons,
  FontAwesome,
  Entypo,
  MaterialCommunityIcons,
  Foundation
} from '@expo/vector-icons'
import styles from './IconStyles'
import PropTypes from 'prop-types'

class CategoriesIcon extends React.Component {
  getIconName = name => {
    const { cities, cityId } = this.props
    const { primary_color: primaryColor } = cities.filter(city => city.city_id === cityId)[0]
    switch (name) {
      case 'Welcome':
        return <Entypo name='hand' size={36} color={primaryColor} />
      case 'Asylum':
        return (
          <FontAwesome name='balance-scale' size={32} color={primaryColor} />
        )
      case 'Volunteering':
        return <FontAwesome name='child' size={36} color={primaryColor} />
      case 'Food':
        return (
          <MaterialCommunityIcons name='food' size={43} color={primaryColor} />
        )
      case 'Parks':
        return <Foundation name='guide-dog' size={47} color={primaryColor} />
      case 'Sport':
        return (
          <MaterialIcons name='directions-run' size={39} color={primaryColor} />
        )
      case 'Shopping':
        return <Ionicons name='md-cart' size={36} color={primaryColor} />
      case 'Transport':
        return <Ionicons name='ios-train' size={40} color={primaryColor} />
      case 'Children':
        return <Ionicons name='md-contacts' size={36} color={primaryColor} />
      case 'Emergency':
        return <FontAwesome name='heartbeat' size={36} color={primaryColor} />
      default:
        return <Ionicons name='md-help' size={36} color={primaryColor} />
    }
  }
  render () {
    const { cities, cityId } = this.props
    const { primary_color: primaryColor, categories_color: categoriesColor } = cities.filter(city => city.city_id === cityId)[0]
    return (
      <TouchableOpacity
        style={[styles.box, { backgroundColor: categoriesColor }]}
        onPress={() =>
          this.props.navigation('Articles', {
            id: this.props.id,
            categoryTitle: this.props.title,
            description: this.props.description,
            categoryId: this.props.id
          })
        }
      >
        <View style={[styles.corner, { borderTopColor: primaryColor, borderRightColor: primaryColor }]} />
        {this.getIconName(this.props.iconName)}

        <Text style={styles.title}>{this.props.title}</Text>
      </TouchableOpacity>
    )
  }
}

const mapStateToProps = (state) => ({
  cityId: state.Setting.city,
  cities: state.cities.citiesList
})

CategoriesIcon.propTypes = {
  navigation: PropTypes.func,
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  categoryTitle: PropTypes.string,
  description: PropTypes.string,
  title: PropTypes.string
}

export default connect(mapStateToProps)(CategoriesIcon)
