import React from 'react'
import { ScrollView, View, Text } from 'react-native'
import ArticleCard from '../../components/ArticleCard/ArticleCard'
import { connect } from 'react-redux'
import { fetchArticles } from '../../redux/actions/categoriesActions'
import { Constants } from 'expo'
import styles from './ArticleListStyles'
import PropTypes from 'prop-types'
import { Ionicons } from '@expo/vector-icons'
import Colors from '../../constants/Colors'
const { primaryColor, secondaryColor } = Colors

class ArticlesListScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Glasgow Welcome Pack',
      headerStyle: {
        backgroundColor: secondaryColor,
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

  async componentDidMount () {
    const categoryId = this.props.navigation.getParam('id')
    this.props.listArticles(categoryId)
  }

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
              image: article.articleImage,
              description: article.short_content || article.full_content
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

  render () {
    return (
      <ScrollView style={styles.container}>
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
  language: state.Setting.language
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
