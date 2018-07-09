import React from 'react'
import { ScrollView, StyleSheet, View, Text } from 'react-native'
import * as api from '../helpers/api'

export default class ArticlesListScreen extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      articles: []
    }
  }

  static navigationOptions = {
    title: 'Glasgow Welcome Pack',
    headerStyle: { backgroundColor: '#0f352f' },
    headerTitleStyle: { color: '#e6bc44' }
  };

  async componentDidMount () {
    const { data: articles } = await api.getArticles('5a256e431aefb70014e3a24b')
    this.setState({ articles })
  }

  renderArticles = () => {
    return this.state.articles.map((article, i) => <Text key={i}>{article.title}</Text>)
  }

  render () {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.layout}>
          {this.renderArticles()}
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
