import React from 'react'
import {
  Text,
  View
} from 'react-native'
import PropTypes from 'prop-types'
import { Constants } from 'expo'
import { connect } from 'react-redux'
import styles from './WeegieGame'
import {fetchWeegieGameQuestions} from '../../redux/actions/weegieGame'

class WeegieGame extends React.Component {
  static navigationOptions = {
    title: 'Glasgow Welcome Pack',
    headerStyle: { backgroundColor: '#0f352f', paddingTop: Constants.statusBarHeight },
    headerTitleStyle: { color: '#e6bc44' }
  };

  componentDidMount () {
    this.props.onGetWeegieQuestions()
  }
  render () {
    return (
      <View styles={styles.container}>
        <Text>Weegie Game Screen</Text>
      </View>
    )
  }
}

const mapStateToProps = ({WeegieGame}) => {
  console.log(WeegieGame.weegieQuestions)
  return {
    WeegieGame
  }
}

const dispatchToProps = dispatch => {
  return {
    onGetWeegieQuestions: () => dispatch(fetchWeegieGameQuestions())
  }
}

WeegieGame.propTypes = {
  // weegieGameQuestions: PropTypes.object.isRequired,
  onGetWeegieQuestions: PropTypes.func.isRequired
}

export default connect(mapStateToProps, dispatchToProps)(WeegieGame)
