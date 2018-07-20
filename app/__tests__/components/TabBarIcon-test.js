import React from 'react'
import renderer from 'react-test-renderer'
import TabBarIcon from '../../components/TabBarIcon'
import { Icon } from 'expo'

describe('TabBarIcon Component', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <TabBarIcon>
          <Icon.Ionicons />
        </TabBarIcon>
      )
      .toJSON()

    expect(tree).toMatchSnapshot()
  })
})
