import React from 'react'
import {
  View
} from 'react-native'
import * as api from '../helpers/api'
import CategoriesIcon from '../components/CategoriesIcon'

export default class CategoriesList extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      categories: []
    }
  }

  async componentDidMount () {
    const { data: categories } = await api.getCategories()
    this.setState({ categories })
  }

  render () {
    return (
      <View>
        {this.state.categories.map((category, i) => {
          return (
            <CategoriesIcon title={category.title} key={i} />
          )
        })}
      </View>
    )
  }
}
