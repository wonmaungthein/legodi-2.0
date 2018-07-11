import React from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'
import CategoriesIcon from '../components/CategoriesIcon'
import { connect } from 'react-redux'
import { fetchCategories } from '../redux/actions/categoriesActions'

class CategoriesList extends React.Component {
  async componentDidMount () {
    this.props.fetchCategories()
  }

  renderCategories = () => {
    return this.props.categories.map((category, i) => {
      return (
        <CategoriesIcon
          key={i}
          title={category.title}
          id={category._id}
          description={category.description}
          navigation={this.props.onPressHandle}
        />
      )
    })
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

const dispatchToProps = dispatch => {
  return {
    fetchCategories: () => {
      return dispatch(fetchCategories())
    }
  }
}

const mapStateToProps = ({ categories }) => ({
  categories: categories.categoriesList
})

export default connect(mapStateToProps, dispatchToProps)(CategoriesList)

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
