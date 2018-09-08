import React from 'react'
import { ScrollView, View } from 'react-native'
import CategoriesIcon from '../../components/CategoriesIcon/CategoriesIcon'
import { connect } from 'react-redux'
import { fetchCategories } from '../../redux/actions/categoriesActions'
import { fetchLanguages } from '../../redux/actions/languagesActions'
import { fetchCities } from '../../redux/actions/citiesActions'
import styles from './CategoryListStyles'
import PropTypes from 'prop-types'

class CategoriesList extends React.Component {
  async componentDidMount() {
    const { cityId, languageId } = this.props
    this.props.fetchCities()
    this.props.fetchCategories(languageId, cityId)
    this.props.fetchLanguages()
  }

  renderCategories = () => {
    const language = this.props.languageId
    return this.props.categories.map((category, i) => {
      if (category) {
        return (
          <CategoriesIcon
            key={i}
            id={category.category_id}
            language={language}
            iconName={category.icon}
            title={category.category_name}
            description={category.description}
            navigation={this.props.onPressHandle}
          />
        )
      }
    })
  }

  render() {
    const { cities, cityId } = this.props
    let primaryColor = ""
    if (cities.length !== 0) {
      primaryColor = cities.filter(city => city.city_id === cityId)[0].primary_color
    } else {
      primaryColor = '#e6bb44'
    }

    return (
      <ScrollView style={[styles.container, { backgroundColor: primaryColor }]}>
        <View style={styles.layout}>
          {this.renderCategories()}
        </View>
      </ScrollView>
    )
  }
}

const dispatchToProps = dispatch => {
  return {
    fetchCategories: (languageId, cityId) => {
      return dispatch(fetchCategories(languageId, cityId))
    },
    fetchLanguages: () => {
      return dispatch(fetchLanguages())
    },
    fetchCities: () => {
      return dispatch(fetchCities())
    }

  }
}

const mapStateToProps = ({ categories, Setting, cities }) => ({
  categories: categories.categoriesList,
  languageId: Setting.language,
  cityId: Setting.city,
  cities: cities.citiesList
})

CategoriesList.propTypes = {
  fetchCategories: PropTypes.func,
  fetchCities: PropTypes.func,
  fetchLanguages: PropTypes.func,
  categories: PropTypes.array,
  onPressHandle: PropTypes.func
}

export default connect(mapStateToProps, dispatchToProps)(CategoriesList)
