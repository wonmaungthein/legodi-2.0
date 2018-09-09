import {
  reduxifyNavigator,
  createReactNavigationReduxMiddleware
} from 'react-navigation-redux-helpers'
import {
  createStackNavigator,
  createBottomTabNavigator
} from 'react-navigation'
import { connect } from 'react-redux'

import Home from '../screens/HomeScreen/HomeScreen'
import About from '../screens/AboutScreen/AboutScreen'
import Settings from '../screens/SettingsScreen/SettingsScreen'
import Game from '../screens/WeegieGameScreen/WeegieGameScreen'
import Article from '../screens/Article/Article'
import Articles from '../screens/ArticlesListScreen/ArticlesListScreen'
import AddArticle from '../screens/AddArticle/AddArticle'
import * as helper from './helpers'
import StartGame from '../screens/WeegieGameScreen/StartWeegieGame'

const middleware = createReactNavigationReduxMiddleware(
  'root',
  state => state.nav
)

const HomeStack = createStackNavigator(
  { Home, Articles, Article, AddArticle },
  { initialRouteName: 'Home' }
)
helper.generateNavigation(
  HomeStack,
  'Home',
  '#0f352e',
  'ios-home',
  'md-home'
)

const AboutScreenStack = createStackNavigator({ About })
helper.generateNavigation(
  AboutScreenStack,
  'About',
  '#0f352e',
  'ios-information-circle',
  'md-information-circle'
)

const SettingsStack = createStackNavigator({ Settings })
helper.generateNavigation(
  SettingsStack,
  'Settings',
  '#0f352e',
  'ios-settings',
  'md-settings'
)

const WeggieGameStack = createStackNavigator(
  { StartGame, Game },
  { initialRouteName: 'StartGame' }
)
helper.generateNavigation(
  WeggieGameStack,
  'Game',
  '#0f352e',
  'ios-game-controller-b',
  'md-game-controller-b'
)

var primaryColor = ''
var secondaryColor = ''

const RootNavigator = createBottomTabNavigator(
  {
    HomeStack,
    WeggieGameStack,
    SettingsStack,
    AboutScreenStack
  },
  {
    navigationOptions: ({ navigation }) => {
      let initialValue = true
      navigation.state.routes.map(route => {
        const { routeName } = route

        const { params } = route
        primaryColor = params ? params.primaryColor : ''
        secondaryColor = params ? params.secondaryColor : ''
        console.log(primaryColor, secondaryColor)
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
    },

    tabBarOptions: {
      activeTintColor: primaryColor,
      activeBackgroundColor: '#215e55',
      inactiveBackgroundColor: secondaryColor,
      inactiveTintColor: primaryColor
    }
  }
)

const AppWithNavigationState = reduxifyNavigator(RootNavigator, 'root')

const mapStateToProps = state => {
  return {
    state: state.nav
  }
}

const AppNavigator = connect(mapStateToProps)(AppWithNavigationState)

export { RootNavigator, AppNavigator, middleware }
