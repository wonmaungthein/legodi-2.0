import React from 'react'
import { Platform } from 'react-native'
import TabBarIcon from '../components/TabBarIcon'
// import { Constants } from 'expo'
// import { createStackNavigator } from 'react-navigation'

// GenerateNavigation function created to reduce the code in MainTabNavigator and make it easy to use and understand
// GenerateNavigation takes 5 parameters we can update it take more or less parameters
export const generateNavigation = (
  routeStack,
  label,
  iosIcon,
  androidIcon
) => {
  routeStack.navigationOptions = ({ navigation }) => {
    const { params } = navigation.state.routes[0]
    const primaryColor = params ? params.primaryColor : '#e6bb44'
    const secondaryColor = params ? params.secondaryColor : '#0f352e'
    const categoriesColor = params ? params.categoriesColor : '#205f55'
    return {
      tabBarLabel: label,
      tabBarIcon: ({ focused }) => (
        <TabBarIcon
          focused={focused}
          color={primaryColor}
          name={
            Platform.OS === 'ios'
              ? `${iosIcon}${focused ? '' : '-outline'}`
              : androidIcon
          }
        />
      ),
      tabBarOptions: {
        activeTintColor: primaryColor,
        activeBackgroundColor: categoriesColor,
        inactiveBackgroundColor: secondaryColor,
        inactiveTintColor: primaryColor
      }
    }
  }
}

// Control tab bar visibility at different screens
export const tabBarVisibility = navigation => {
  let initialValue = true
  navigation.state.routes.map(route => {
    const { routeName } = route
    if (
      routeName === 'Article' ||
      routeName === 'Articles' ||
      routeName === 'Game'
    ) {
      initialValue = false
      return initialValue
    }
  })
  return initialValue ? null : { tabBarVisible: false }
}

// const tabHeader = {
//   title: 'Glasgow Welcome Pack',
//   headerStyle: {
//     backgroundColor: secondaryColor,
//     paddingTop: Constants.statusBarHeight
//   },
//   headerTitleStyle: { color: primaryColor }
// }
// generateSingleStackNavigator takes one parmeter the screen
// generateSingleStackNavigator generate the navigator with screen header
// it's work now only for single screens (component have only one screen like about screen)
// export const generateSingleStackNavigator = screen =>
//   createStackNavigator({
//     MyTab: {
//       screen,
//       navigationOptions: tabHeader
//     }
//   })
