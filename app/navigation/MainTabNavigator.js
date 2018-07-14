import { createStackNavigator, createBottomTabNavigator } from 'react-navigation'
import Home from '../screens/HomeScreen/HomeScreen'
import About from '../screens/AboutScreen/AboutScreen'
import Settings from '../screens/SettingsScreen/SettingsScreen'
import Game from '../screens/WeegieGameScreen/WeegieGameScreen'
import Article from '../screens/Article/Article'
import Articles from '../screens/ArticlesListScreen/ArticlesListScreen'
import generateNavigation from './GenerateNavigation'

const HomeStack = createStackNavigator({Home, Articles, Article}, {initialRouteName: 'Home'})
generateNavigation(HomeStack, 'Home', '#0f352f', 'ios-home', 'md-home')

const WeegieGameStack = createStackNavigator({Game})
generateNavigation(WeegieGameStack, 'Game', '#0f352f', 'ios-game-controller-b', 'md-game-controller-b')

const AboutScreenStack = createStackNavigator({About})
generateNavigation(AboutScreenStack, 'About', '#0f352f', 'ios-information-circle', 'md-information-circle')

const SettingsStack = createStackNavigator({Settings})
generateNavigation(SettingsStack, 'Settings', '#0f352f', 'ios-settings', 'md-settings')

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
