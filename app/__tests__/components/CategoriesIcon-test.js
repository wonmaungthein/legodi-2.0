import React from 'react'
import renderer from 'react-test-renderer'
import CategoriesIcon from '../../components/CategoriesIcon/CategoriesIcon'
import { Text } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

it('renders correctly', () => {
  const tree = renderer
    .create(
      <CategoriesIcon>
        <Ionicons name='md-information-circle' size={36} color='#e5ba4f' />

        <Text>Some Text</Text>
      </CategoriesIcon>
    )
    .toJSON()

  expect(tree).toMatchSnapshot()
})
