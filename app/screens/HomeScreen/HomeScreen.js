import React from 'react'
import { connect } from 'react-redux'
import { ScrollView, Text, View } from 'react-native'
import { WebBrowser, Constants } from 'expo'
import PropTypes from 'prop-types'
import CategoriesList from '../CategoriesList/CategoriesList'
import styles from './HomeStyles'
import Colors from '../../constants/Colors'
const { primaryColor, secondaryColor } = Colors

class HomeScreen extends React.Component {

  componentWillReceiveProps(nextProps) {
    const { cityId } = nextProps
    if (cityId !== this.props.cityId) {
      const title = this.props.cities.filter(city => city.city_id === cityId)[0].city_name
      this.props.navigation.setParams({ title })
    }
  }

  shouldComponentUpdate(nextProps) {
    return this.props.cityId !== nextProps.cityId
  }

  static navigationOptions = ({ navigation }) => {
    const { params } = navigation.state
    return {
      title: params ? `${params.title} Welcome Pack` : 'Glasgow Welcome Pack',
      headerStyle: {
        backgroundColor: secondaryColor,
        paddingTop: Constants.statusBarHeight
      },
      headerTitleStyle: { color: primaryColor }
    }
  };

  render() {
    const { navigate } = this.props.navigation
    return (
      <View style={styles.container}>
        <ScrollView contentContainerStyle={styles.contentContainer}>
          <CategoriesList onPressHandle={navigate} />
        </ScrollView>
      </View>
    )
  }

  _maybeRenderDevelopmentModeWarning() {
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
  };

  _handleHelpPress = () => {
    WebBrowser.openBrowserAsync(
      'https://docs.expo.io/versions/latest/guides/up-and-running.html#can-t-see-your-changes'
    )
  };
}

const mapStateToProps = (state) => ({
  cityId: state.Setting.city,
  cities: state.cities.citiesList
})

HomeScreen.propTypes = {
  cityId: PropTypes.string,
  cities: PropTypes.array
}

export default connect(mapStateToProps, null)(HomeScreen)