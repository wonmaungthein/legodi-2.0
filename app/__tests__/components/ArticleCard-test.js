import React from 'react'
import renderer from 'react-test-renderer'
import { Text, TouchableOpacity, Image, View } from 'react-native'
import ArticleCard from '../../components/ArticleCard/ArticleCard'

it('renders correctly', () => {
  const tree = renderer
    .create(
      <ArticleCard>
        <TouchableOpacity style={{}}>
          <Image style={{width: 100}} source={{ uri: 'http://placehold.it/100x80' }} />{' '}
          <View style={{paddingLeft: 5}}>
            <Text style={{fontWeight: 'bold'}}>Some Text</Text>
            <Text style={{fontWeight: 'bold'}}>Some Text</Text>
          </View>
        </TouchableOpacity>
      </ArticleCard>
    )
    .toJSON()

  expect(tree).toMatchSnapshot()
})
