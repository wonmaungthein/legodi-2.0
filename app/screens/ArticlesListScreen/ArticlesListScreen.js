import React from 'react'
import { ScrollView, View, Text } from 'react-native'
import ArticleCard from '../../components/ArticleCard/ArticleCard'
import { connect } from 'react-redux'
import { fetchArticles } from '../../redux/actions/categoriesActions'
import { Constants } from 'expo'
import styles from './ArticleListStyles'
import PropTypes from 'prop-types'

class ArticlesListScreen extends React.Component {
  static navigationOptions = {
    title: 'Glasgow Welcome Pack',
    headerStyle: { backgroundColor: '#0f352f', paddingTop: Constants.statusBarHeight },
    headerTitleStyle: { color: '#e6bc44' }
  };

  async componentDidMount () {
    const categoryId = this.props.navigation.getParam('id', '123')
    const { language } = this.props

    this.props.listArticles(categoryId, language)
  }

  renderArticlesListPage = () => {
    const { language } = this.props
    const { articles } = this.props
    const title = this.props.navigation.getParam('categoryTitle', 'No category')
    const description = this.props.navigation.getParam('description', 'No description')

    return (
      <View>
        <Text style={language === 'ar' ? styles.arabicTitle : styles.title} >{title}</Text>
        <Text style={language === 'ar' ? styles.arabicDescription : styles.description} >{description}</Text>
        {

          articles.map((article, i) => {
            const navigateToArticle = () => this.props.navigation.navigate('Article', {
              title: article.title,
              language: language,
              image: article.articleImage,
              description: article.fullContent
            })

            return (
              <ArticleCard
                key={i}
                language={language}
                title={article.title}
                image={article.articleImage}
                description={article.fullContent}
                navigateToArticle={navigateToArticle}
              />
            )
          })
        }
      </View>
    )
  }

  render () {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.layout}>
          {
            this.props.articles.length > 0
              ? this.renderArticlesListPage()
              : <Text style={styles.title}>There are no articles in this category</Text>
          }
        </View>
      </ScrollView>
    )
  }
}

const mapStateToProps = (state) => ({
  articles: state.categories.articlesInCategory,
  language: state.language.language
})

const dispatchToProps = dispatch => {
  return {
    listArticles: (categoryId, language) => dispatch(fetchArticles(categoryId, language))
  }
}

ArticlesListScreen.propTypes = {
  listArticles: PropTypes.func,
  articles: PropTypes.array
}

export default connect(mapStateToProps, dispatchToProps)(ArticlesListScreen)
