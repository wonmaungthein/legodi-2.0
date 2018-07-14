import React from 'react'
import { Platform } from 'react-native'
import TabBarIcon from '../components/TabBarIcon'

// GenerateNavigation function created to reduce the code in MainTabNavigator and make it easy to use and unerstand
// GenerateNavigation takes 5 parameters we can update it take more or less parameters

const generateNavigation = (routeStack, label, color, iosIcon, androidIcon) => {
  routeStack.navigationOptions = {
    tabBarLabel: label,
    tabBarIcon: ({ focused }) => (
      <TabBarIcon
        focused={focused}
        color={color}
        name={
          Platform.OS === 'ios'
            ? `${iosIcon}${focused ? '' : '-outline'}`
            : androidIcon
        }
      />
    )
  }
}

export default generateNavigation
