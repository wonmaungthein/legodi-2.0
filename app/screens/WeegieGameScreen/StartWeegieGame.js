import React from 'react'
import Button from 'apsl-react-native-button'
import { View } from 'react-native'
import { Constants } from 'expo'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import styles from './StartWeegieStyle'
import Colors from '../../constants/Colors'
const { primaryColor, secondaryColor } = Colors

class StartWeegieGame extends React.Component {
  componentDidMount () {
    const { cities, cityId } = this.props
    const title = cities.filter(city => city.city_id === cityId)[0].city_name
    this.props.navigation.setParams({ title })
  }

  componentWillReceiveProps (nextProps) {
    const { cityId } = nextProps
    if (cityId !== this.props.cityId) {
      const title = this.props.cities.filter(city => city.city_id === cityId)[0].city_name
      this.props.navigation.setParams({ title })
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
        backgroundColor: secondaryColor,
        paddingTop: Constants.statusBarHeight
      },
      headerTitleStyle: { color: primaryColor },
      headerTintColor: primaryColor
    }
  };

  render () {
    return (
      <View style={styles.container}>
        <Button
          style={styles.viewButton}
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
