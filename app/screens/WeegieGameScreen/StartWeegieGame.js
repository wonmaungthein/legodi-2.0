import React from 'react'
import Button from 'apsl-react-native-button'
import { View } from 'react-native'
import { Constants } from 'expo'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import styles from './StartWeegieStyle'

class StartWeegieGame extends React.Component {
  componentDidMount () {
    const { cities, cityId } = this.props
    const { city_name: title, primary_color: primaryColor, secondary_color: secondaryColor } = cities.filter(city => city.city_id === cityId)[0]
    this.props.navigation.setParams({ title, primaryColor, secondaryColor })
  }

  componentWillReceiveProps (nextProps) {
    const { cityId } = nextProps
    if (cityId !== this.props.cityId) {
      const { city_name: title, primary_color: primaryColor, secondary_color: secondaryColor } = this.props.cities.filter(city => city.city_id === cityId)[0]
      this.props.navigation.setParams({ title, primaryColor, secondaryColor })
    }
  }

  shouldComponentUpdate (nextProps) {
    return this.props.cityId !== nextProps.cityId
  }

  static navigationOptions = ({ navigation }) => {
    const { params } = navigation.state
    const primaryColor = params ? `${params.primaryColor}` : '#e6bb44'
    return {
      title: params ? `${params.title} Welcome Pack` : 'Glasgow Welcome Pack',
      headerStyle: {
        backgroundColor: params ? `${params.secondaryColor}` : '#0f352e',
        paddingTop: Constants.statusBarHeight
      },
      headerTitleStyle: { color: primaryColor },
      headerTintColor: primaryColor
    }
  };

  render () {
    const { cities, cityId } = this.props
    const { primary_color: primaryColor, secondary_color: secondaryColor } = cities.filter(city => city.city_id === cityId)[0]
    return (
      <View style={[styles.container, { backgroundColor: primaryColor }]}>
        <Button
          style={{ backgroundColor: secondaryColor }}
          textStyle={{ color: primaryColor, fontSize: 20, fontWeight: 'bold' }}
          onPress={() => this.props.navigation.navigate('Game')}
        >
          Start
        </Button>
      </View>
    )
  }
}

const mapStateToProps = (state) => ({
  cityId: state.Setting.city,
  cities: state.cities.citiesList
})

StartWeegieGame.propTypes = {
  cityId: PropTypes.string,
  cities: PropTypes.array
}

export default connect(mapStateToProps, null)(StartWeegieGame)
