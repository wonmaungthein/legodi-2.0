import React from 'react'
import { ScrollView, StyleSheet, View, Text } from 'react-native'
import * as api from '../helpers/api'
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

  render () {
    const title = this.props.navigation.getParam('category', 'No category')
    return (
      <ScrollView style={styles.container}>
        <View style={styles.layout}>
          <Text>{title}</Text>
          {
            this.state.articles.length > 0
              ? this.state.articles.map((article, i) => <Text key={i}>{article.title}</Text>)
              : <Text>There are no articles in this category</Text>
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
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10
  }
})
