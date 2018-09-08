import React from 'react'
import { ScrollView, View, Text } from 'react-native'
import ArticleCard from '../../components/ArticleCard/ArticleCard'
import { connect } from 'react-redux'
import { fetchArticles } from '../../redux/actions/categoriesActions'
import { Constants } from 'expo'
import styles from './ArticleListStyles'
import PropTypes from 'prop-types'
import { Ionicons } from '@expo/vector-icons'

class ArticlesListScreen extends React.Component {

  async componentDidMount() {
    const categoryId = this.props.navigation.getParam('id')
    this.props.listArticles(categoryId)
    const { cities, cityId } = this.props
    const { city_name: title, primary_color: primaryColor, secondary_color: secondaryColor } = cities.filter(city => city.city_id === cityId)[0]
    this.props.navigation.setParams({ title, primaryColor, secondaryColor })
  }

  componentWillReceiveProps(nextProps) {
    const { cityId } = nextProps
    if (cityId !== this.props.cityId) {
      const { city_name: title, primary_color: primaryColor, secondary_color: secondaryColor } = this.props.cities.filter(city => city.city_id === cityId)[0]
      this.props.navigation.setParams({ title, primaryColor, secondaryColor })
    }
  }

  shouldComponentUpdate(nextProps) {
    return this.props.cityId !== nextProps.cityId
  }

  static navigationOptions = ({ navigation }) => {
    const { params } = navigation.state
    const primaryColor = params ? `${params.primaryColor}` : '#e6bb44'
    return {
      title: params ? `${params.title} Welcome Pack` : 'Glasgow Welcome Pack',
      headerStyle: {
        backgroundColor: params ? `${params.secondaryColor}` : '#0f352e',
        paddingTop: Constants.statusBarHeight
      },
      headerRight: (
        <Ionicons
          name='md-add'
          size={28}
          color={primaryColor}
          style={{ paddingRight: 10, paddingTop: 5 }}
          onPress={() =>
            navigation.navigate('AddArticle', {
              categoryId: navigation.getParam('categoryId')
            })
          }
        />
      ),
      headerTitleStyle: { color: primaryColor },
      headerTintColor: primaryColor
    }
  };

  renderArticlesListPage = () => {
    const { language } = this.props
    const { articles } = this.props
    const title = this.props.navigation.getParam(
      'categoryTitle',
      'No category'
    )
    const description = this.props.navigation.getParam(
      'description',
      'No description'
    )

    return (
      <View>
        <Text style={language === 'ar' ? styles.arabicTitle : styles.title}>
          {title}
        </Text>
        <Text
          style={
            language === 'ar' ? styles.arabicDescription : styles.description
          }
        >
          {description}
        </Text>
        {articles.map((article, i) => {
          const navigateToArticle = () =>
            this.props.navigation.navigate('Article', {
              title: article.title,
              language: language,
              description: article.short_content || article.full_content,
              articleImage: article.image
            })

          return (
            <ArticleCard
              key={i}
              language={language}
              title={article.title}
              image={article.image}
              description={article.full_content}
              navigateToArticle={navigateToArticle}
            />
          )
        })}
      </View>
    )
  };

  render() {
    const { cities, cityId } = this.props
    const { primary_color: primaryColor } = cities.filter(city => city.city_id === cityId)[0]
    return (
      <ScrollView style={[styles.container, { backgroundColor: primaryColor }]}>
        <View style={styles.layout}>
          {// this.props.articles.length > 0
            this.renderArticlesListPage()
            // : <Text style={styles.title}>There are no articles in this category</Text>
          }
        </View>
      </ScrollView>
    )
  }
}

const mapStateToProps = state => ({
  articles: state.categories.articlesInCategory,
  language: state.Setting.language,
  cityId: state.Setting.city,
  cities: state.cities.citiesList
})

const dispatchToProps = dispatch => {
  return {
    listArticles: categoryId => dispatch(fetchArticles(categoryId))
  }
}

ArticlesListScreen.propTypes = {
  listArticles: PropTypes.func,
  articles: PropTypes.array
}

export default connect(
  mapStateToProps,
  dispatchToProps
)(ArticlesListScreen)
