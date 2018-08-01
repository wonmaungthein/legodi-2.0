import {
  reduxifyNavigator,
  createReactNavigationReduxMiddleware
} from 'react-navigation-redux-helpers'
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation'
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

const HomeStack = createStackNavigator({ Home, Articles, Article, AddArticle }, { initialRouteName: 'Home' })

helper.generateNavigation(HomeStack, 'Home', '#0f352f', 'ios-home', 'md-home')

const AboutScreenStack = helper.generateSingleStackNavigator(About)
helper.generateNavigation(AboutScreenStack, 'About', '#0f352f', 'ios-information-circle', 'md-information-circle')

const SettingsStack = helper.generateSingleStackNavigator(Settings)
helper.generateNavigation(SettingsStack, 'Settings', '#0f352f', 'ios-settings', 'md-settings')

const WeggieGameStack = createStackNavigator({ StartGame, Game }, { initialRouteName: 'StartGame' })
helper.generateNavigation(WeggieGameStack, 'Game', '#0f352f', 'ios-game-controller-b', 'md-game-controller-b')

const RootNavigator = createBottomTabNavigator(
  {
    HomeStack,
    WeggieGameStack,
    SettingsStack,
    AboutScreenStack
  },
  {
    navigationOptions: ({ navigation }) => helper.tabBarVisibility(navigation),

    tabBarOptions: {
      activeTintColor: '#e6bc44',
      activeBackgroundColor: '#215e55',
      inactiveBackgroundColor: '#0f352f',
      inactiveTintColor: '#e6bc44'
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
