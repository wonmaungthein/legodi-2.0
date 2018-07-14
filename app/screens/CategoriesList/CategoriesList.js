import React from 'react'
import { ScrollView, View } from 'react-native'
import CategoriesIcon from '../../components/CategoriesIcon/CategoriesIcon'
import { connect } from 'react-redux'
import { fetchCategories } from '../../redux/actions/categoriesActions'
import styles from './CategoryListStyles'
import PropTypes from 'prop-types'

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

CategoriesList.propTypes = {
  fetchCategories: PropTypes.func,
  categories: PropTypes.array,
  onPressHandle: PropTypes.func
}

export default connect(mapStateToProps, dispatchToProps)(CategoriesList)
