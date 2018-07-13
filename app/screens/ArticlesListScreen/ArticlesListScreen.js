import React from 'react'
import { ScrollView, View, Text } from 'react-native'
import ArticleCard from '../../components/ArticleCard/ArticleCard'
import { connect } from 'react-redux'
import { fetchArticles } from '../../redux/actions/categoriesActions'
import { Constants } from 'expo'
import styles from './ArticleListStyles'

class ArticlesListScreen extends React.Component {
  static navigationOptions = {
    title: 'Glasgow Welcome Pack',
    headerStyle: { backgroundColor: '#0f352f', paddingTop: Constants.statusBarHeight },
    headerTitleStyle: { color: '#e6bc44' }
  };

  async componentDidMount () {
    const categoryId = this.props.navigation.getParam('id', '123')

    this.props.listArticles(categoryId)
  }

  renderArticlesListPage = () => {
    const { articles } = this.props
    const title = this.props.navigation.getParam('categoryTitle', 'No category')
    const description = this.props.navigation.getParam('description', 'No description')

    return (
      <View>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
        {

          articles.map((article, i) => {
            const navigateToArticle = () => this.props.navigation.navigate('Article', {
              title: article.title,
              image: article.articleImage,
              description: article.fullContent
            })

            return (
              <ArticleCard
                key={i}
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
  articles: state.categories.articlesInCategory
})

const dispatchToProps = dispatch => {
  return {
    listArticles: (categoryId) => dispatch(fetchArticles(categoryId))
  }
}
export default connect(mapStateToProps, dispatchToProps)(ArticlesListScreen)
