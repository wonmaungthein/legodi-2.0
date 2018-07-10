import React from 'react'
import { Platform } from 'react-native'
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation'

import TabBarIcon from '../components/TabBarIcon'
import HomeScreen from '../screens/HomeScreen'
import AboutScreen from '../screens/AboutScreen'
import SettingsScreen from '../screens/SettingsScreen'
import WeegieGameScreen from '../screens/WeegieGameScreen'
import Article from '../screens/Article'
import ArticlesListScreen from '../screens/ArticlesListScreen'

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen,
    Articles: ArticlesListScreen,
    Article: Article
  },
  {
    initialRouteName: 'Home'
  }
)

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      color='#0f352f'
      focused={focused}
      name={Platform.OS === 'ios' ? `ios-home${focused ? '' : '-outline'}` : 'md-home'}
    />
  )
}

const WeegieGameStack = createStackNavigator({
  Game: WeegieGameScreen
})

WeegieGameStack.navigationOptions = {
  tabBarLabel: 'Game',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      color='#0f352f'
      focused={focused}
      name={Platform.OS === 'ios' ? `ios-game-controller-b${focused ? '' : '-outline'}` : 'md-game-controller-b'}
    />
  )
}

const AboutScreenStack = createStackNavigator({
  About: AboutScreen
})

AboutScreenStack.navigationOptions = {
  tabBarLabel: 'About',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      color='#0f352f'
      focused={focused}
      name={Platform.OS === 'ios' ? `ios-information-circle${focused ? '' : '-outline'}` : 'md-information-circle'}
    />
  )
}

const SettingsStack = createStackNavigator({
  Settings: SettingsScreen
})

SettingsStack.navigationOptions = {
  tabBarLabel: 'Settings',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      color='#0f352f'
      focused={focused}
      name={Platform.OS === 'ios' ? `ios-settings${focused ? '' : '-outline'}` : 'md-settings'}
    />
  )
}

export default createBottomTabNavigator({
  HomeStack,
  AboutScreenStack,
  SettingsStack,
  WeegieGameStack
},
{
  navigationOptions: {
    tabBarVisible: true
  },
  tabBarOptions: {
    activeTintColor: '#e6bc44',
    activeBackgroundColor: '#215e55',
    inactiveBackgroundColor: '#0f352f',
    inactiveTintColor: '#e6bc44'
  }
}
)
