import React from 'react'
import { Text, View, ScrollView } from 'react-native'
import PropTypes from 'prop-types'
import { CheckBox } from 'react-native-elements'
import { Constants } from 'expo'
import { connect } from 'react-redux'
import styles from './WeegieGameStyle'
import { fetchWeegieGameQuestions } from '../../redux/actions/weegieGame'
import Button from 'apsl-react-native-button'

class WeegieGame extends React.Component {
  state = {
    checked: false,
    open: false
  };
  static navigationOptions = {
    title: 'Glasgow Welcome Pack',
    headerStyle: {
      backgroundColor: '#0f352f',
      paddingTop: Constants.statusBarHeight
    },
    headerTitleStyle: { color: '#e6bc44' }
  };

  componentDidMount () {
    this.props.onGetWeegieQuestions()
  }

  handleCheckBox = e => {
    this.setState({ checked: !this.state.checked })
  };

  handleOpen = e => {
    this.setState({ open: true })
  };

  showGame = data => {
    return data.map((question, index) => {
      const questionNum = index + 1
      return (
        <View key={question._id} styles={styles.content}>
          <Text style={styles.question}>
            {questionNum}- {question.title}
          </Text>
          <Text>
            <CheckBox
              title={question.choices.a}
              checked={this.state.checked}
              onPress={this.handleCheckBox}
              containerStyle={styles.checkBoxContainer}
              uncheckedColor='#0f352f'
              textStyle={styles.label}
            />
          </Text>
          <Text>
            <CheckBox
              title={question.choices.b}
              checked={this.state.checked}
              onPress={this.handleCheckBox}
              containerStyle={styles.checkBoxContainer}
              uncheckedColor='#0f352f'
              textStyle={styles.label}
            />
          </Text>
          <Text>
            <CheckBox
              title={question.choices.c}
              checked={this.state.checked}
              onPress={this.handleCheckBox}
              containerStyle={styles.checkBoxContainer}
              uncheckedColor='#0f352f'
              textStyle={styles.label}
            />
          </Text>
          <Text>
            <CheckBox
              title={question.choices.d}
              checked={this.state.checked}
              onPress={this.handleCheckBox}
              containerStyle={styles.checkBoxContainer}
              uncheckedColor='#0f352f'
              textStyle={styles.label}
            />
          </Text>
        </View>
      )
    })
  };

  render () {
    const data = this.props.WeegieGameQuestions

    return (
      <ScrollView style={styles.container}>

        {this.state.open ? null : (
          <View style={styles.viewButton}>
            <Button style={styles.startButton} onPress={this.handleOpen} textStyle={{color: '#e5ba4f', fontSize: 20, fontWeight: 'bold'}}>
              Start
            </Button>

          </View>

        )

        // <Button
        //   onPress={this.handleOpen}
        //   title='Start'
        //   raised
        //   titleStyle={{color: '#000'}}
        //   buttonStyle={{
        //     backgroundColor: '#0f352f',
        //     width: 300,
        //     height: 45,
        //     borderColor: 'transparent',
        //     borderWidth: 0,
        //     borderRadius: 5
        //   }}
        // />
        }
        {this.state.open ? this.showGame(data) : null}
      </ScrollView>
    )
  }
}

const mapStateToProps = ({ WeegieGame }) => {
  return {
    WeegieGameQuestions: WeegieGame.weegieQuestions
  }
}

const dispatchToProps = dispatch => {
  return {
    onGetWeegieQuestions: () => dispatch(fetchWeegieGameQuestions())
  }
}

WeegieGame.propTypes = {
  weegieGameQuestions: PropTypes.object,
  onGetWeegieQuestions: PropTypes.func.isRequired
}

export default connect(
  mapStateToProps,
  dispatchToProps
)(WeegieGame)
