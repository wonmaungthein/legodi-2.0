import React from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'
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

  renderCategories = () => {
    return this.state.categories.map((category, i) => <CategoriesIcon key={i} title={category.title} navigation={this.props.onPressHandle} />)
  }

  render () {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.layout}>
          {this.renderCategories()}
        </View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e5ba4f'
  },
  layout: {
    flex: 1,
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 20
  }
})
