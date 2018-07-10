import React from 'react'
import { ScrollView, StyleSheet, View, Text } from 'react-native'
import * as api from '../helpers/api'
import ArticlesList from '../components/ArticlesList'

import { Constants } from 'expo'
export default class ArticlesListScreen extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      articles: []
    }
  }

  static navigationOptions = {
    title: 'Glasgow Welcome Pack',
    headerStyle: { backgroundColor: '#0f352f', paddingTop: Constants.statusBarHeight },
    headerTitleStyle: { color: '#e6bc44' }
  };

  async componentDidMount () {
    const categoryId = this.props.navigation.getParam('id', '123')
    const { data: articles } = await api.getArticles(categoryId)
    this.setState({ articles })
  }

  renderArticlesListPage (title, description, articles) {
    return (
      <View>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
        {
          articles.map((article, i) => {
            return (
              <ArticlesList
                key={i}
                title={article.title}
                image={article.articleImage}
                description={article.fullContent}
                navigation={this.props.navigation}
              />
            )
          })
        }
      </View>
    )
  }

  render () {
    const title = this.props.navigation.getParam('categoryTitle', 'No category')
    const description = this.props.navigation.getParam('description', 'No description')
    return (
      <ScrollView style={styles.container}>
        <View style={styles.layout}>
          {
            this.state.articles.length > 0
              ? this.renderArticlesListPage(title, description, this.state.articles)
              : <Text style={styles.title}>There are no articles in this category</Text>
          }
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
    padding: 10
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingBottom: 10
  },
  description: {
    paddingBottom: 20,
    fontSize: 15
  }
})
