import React from 'react'
import {
  Text,
  View,
  Image,
  StyleSheet,
  ScrollView
} from 'react-native'

export default class Article extends React.Component {
  static navigationOptions = {
    title: 'Glasgow Welcome Pack',
    headerStyle: { backgroundColor: '#0f352f' },
    headerTitleStyle: { color: '#e6bc44' }
  };

  render () {
    return (
      <View style={styles.container}>
        <ScrollView>
          <View>
            <Image
              style={styles.image}
              source={{ uri: 'http://placehold.it/300x200' }}
            />
          </View>
          <View style={{padding: 10}}>
            <Text style={styles.title}>Article Title</Text>
          </View>
          <View style={styles.paddingSides}>
            <Text style={{fontSize: 20}}>Sunt aliquip velit magna occaecat eiusmod aliquip ipsum velit qui est ut velit est.</Text>
          </View>
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#e5ba4f',
    paddingTop: 10
  },
  image: {
    width: 300,
    height: 200
  },
  title: {
    fontSize: 28
  },
  paddingSides: {
    paddingLeft: 10,
    paddingRight: 10
  }
})
