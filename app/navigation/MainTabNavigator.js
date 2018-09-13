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
import StartGame from '../screens/WeegieGameScreen/WeegieGameScreen'
import Article from '../screens/Article/Article'
import Articles from '../screens/ArticlesListScreen/ArticlesListScreen'
import AddArticle from '../screens/AddArticle/AddArticle'
import * as helper from './helpers'
import Game from '../screens/WeegieGameScreen/StartWeegieGame'

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
  'ios-home',
  'md-home'
)

const AboutScreenStack = createStackNavigator({ About })
helper.generateNavigation(
  AboutScreenStack,
  'About',
  'ios-information-circle',
  'md-information-circle'
)

const SettingsStack = createStackNavigator({ Settings })
helper.generateNavigation(
  SettingsStack,
  'Settings',
  'ios-settings',
  'md-settings'
)

const WeggieGameStack = createStackNavigator(
  { StartGame, Game },
  { initialRouteName: 'Game' }
)
helper.generateNavigation(
  WeggieGameStack,
  'Game',
  'ios-game-controller-b',
  'md-game-controller-b'
)

const RootNavigator = createBottomTabNavigator(
  {
    HomeStack,
    WeggieGameStack,
    SettingsStack,
    AboutScreenStack
  },
  {
    navigationOptions: ({ navigation }) => helper.tabBarVisibility(navigation)
  }
)

const AppWithNavigationState = reduxifyNavigator(RootNavigator, 'root')

const mapStateToProps = state => {
  console.log(state.nav)
  return {
    state: state.nav
  }
}

const AppNavigator = connect(mapStateToProps)(AppWithNavigationState)

export { RootNavigator, AppNavigator, middleware }
