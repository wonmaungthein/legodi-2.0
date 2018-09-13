import React from 'react'
import { connect } from 'react-redux'
import { ScrollView, Text, View } from 'react-native'
import { WebBrowser, Constants } from 'expo'
import PropTypes from 'prop-types'
import CategoriesList from '../CategoriesList/CategoriesList'
import styles from './HomeStyles'

class HomeScreen extends React.Component {
  async componentDidMount () {
    const { cities, cityId, languageId } = this.props
    if (cities.length && cityId && languageId) {
      const {
        city_name: title,
        primary_color: primaryColor,
        secondary_color: secondaryColor,
        categories_color: categoriesColor
      } = cities.filter(city => city.city_id === cityId)[0]
      this.props.navigation.setParams({
        title,
        primaryColor,
        secondaryColor,
        categoriesColor,
        languageId
      })
    }
  }

  componentWillReceiveProps (nextProps) {
    const { cityId, languageId } = nextProps
    if (cityId !== this.props.cityId || languageId !== this.props.languageId) {
      const {
        city_name: title,
        primary_color: primaryColor,
        secondary_color: secondaryColor,
        categories_color: categoriesColor
      } = this.props.cities.filter(city => city.city_id === cityId)[0]
      this.props.navigation.setParams({
        title,
        primaryColor,
        secondaryColor,
        categoriesColor,
        languageId
      })
    }
  }

  shouldComponentUpdate (nextProps) {
    return this.props.cityId !== nextProps.cityId
  }

  static navigationOptions = ({ navigation }) => {
    const { params } = navigation.state
    return {
      title: params ? `${params.title} Welcome Pack` : 'Glasgow Welcome Pack',
      headerStyle: {
        backgroundColor: params ? `${params.secondaryColor}` : '#0f352e',
        paddingTop: Constants.statusBarHeight
      },
      headerTitleStyle: {
        color: params ? `${params.primaryColor}` : '#e6bb44'
      }
    }
  }

  render () {
    const { navigate } = this.props.navigation
    const { cities, cityId } = this.props
    let primaryColor = ''
    if (cities.length !== 0) {
      primaryColor = cities.filter(city => city.city_id === cityId)[0]
        .primary_color
    } else {
      primaryColor = '#e6bb44'
    }
    return (
      <View style={[styles.container, { backgroundColor: primaryColor }]}>
        <ScrollView contentContainerStyle={styles.contentContainer}>
          <CategoriesList onPressHandle={navigate} />
        </ScrollView>
      </View>
    )
  }

  _maybeRenderDevelopmentModeWarning () {
    if (__DEV__) {
      const learnMoreButton = (
        <Text onPress={this._handleLearnMorePress} style={styles.helpLinkText}>
          Learn more
        </Text>
      )

      return (
        <Text style={styles.developmentModeText}>
          LEGODI 2.0 tools. {learnMoreButton}
        </Text>
      )
    } else {
      return (
        <Text style={styles.developmentModeText}>
          You are not in development mode, your app will run at full speed.
        </Text>
      )
    }
  }

  _handleLearnMorePress = () => {
    WebBrowser.openBrowserAsync(
      'https://docs.expo.io/versions/latest/guides/development-mode'
    )
  }

  _handleHelpPress = () => {
    WebBrowser.openBrowserAsync(
      'https://docs.expo.io/versions/latest/guides/up-and-running.html#can-t-see-your-changes'
    )
  }
}

const mapStateToProps = state => ({
  cityId: state.Setting.city,
  cities: state.cities.citiesList,
  languageId: state.Setting.language
})

HomeScreen.propTypes = {
  cityId: PropTypes.string,
  cities: PropTypes.array
}

export default connect(mapStateToProps)(HomeScreen)
