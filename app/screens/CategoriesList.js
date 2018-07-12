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
    const language = this.props.language
    return this.props.categories.map((category, i) => {
      if (language === 'ar') {
        return (
          <CategoriesIcon
            key={i}
            id={category._id}
            language={language}
            iconName={category.title}
            title={category.titleTranslation[language]}
            description={category.arabicDescription}
            navigation={this.props.onPressHandle}
          />
        )
      } else if (language === 'am') {
        return (
          <CategoriesIcon
            key={i}
            id={category._id}
            iconName={category.title}
            title={category.titleTranslation[language]}
            description={category.amharngaDescription}
            navigation={this.props.onPressHandle}
          />
        )
      } else {
        return (
          <CategoriesIcon
            key={i}
            id={category._id}
            title={category.title}
            iconName={category.title}
            description={category.description}
            navigation={this.props.onPressHandle}
          />
        )
      }
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

const mapStateToProps = ({ categories, language }) => ({
  categories: categories.categoriesList,
  language: language.language
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
