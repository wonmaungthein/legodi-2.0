import React from 'react'
import { Text, View, ScrollView } from 'react-native'
import PropTypes from 'prop-types'
import { CheckBox } from 'react-native-elements'
import { connect } from 'react-redux'
import styles from './WeegieGameStyle'
import { fetchWeegieGameQuestions } from '../../redux/actions/weegieGame'
import Button from 'apsl-react-native-button'

class WeegieGame extends React.Component {
  state = {
    checked1: false,
    checked2: false,
    checked3: false,
    checked4: false,
    question: [],
    open: false,
    dataIndex: 0
  };

  componentDidMount () {
    this.props.onGetWeegieQuestions()
  }

  handleNextQuestion = (e) => {
    const { dataIndex } = this.state
    e.preventDefault()
    if (dataIndex < 10) {
      this.setState({
        dataIndex: dataIndex + 1,
        checked1: false,
        checked2: false,
        checked3: false,
        checked4: false
      })
    }
  };

  handleOpen = () => {
    this.setState({ open: true })
  };

  handleSubmitQuestion = () => {
    console.log(this.state.question)
  }

  showGame = data => {
    if (data.length > 0) {
      const { dataIndex } = this.state
      const question = data[dataIndex]
      const questionNum = dataIndex + 1
      return (
        <View styles={styles.content}>
          <Text style={styles.question}>
            {questionNum}- {question.title}
          </Text>
          <Text>
            <CheckBox
              title={question.choices.a}
              checked={this.state.checked1}
              onPress={() => {
                this.state.question.push({ title: question._id, answer: 'a' })
                this.setState({ checked1: !this.state.checked1 })
              }}
              containerStyle={styles.checkBoxContainer}
              uncheckedColor='#0f352f'
              textStyle={styles.label}
              value='a'
            />
          </Text>
          <Text>
            <CheckBox
              title={question.choices.b}
              checked={this.state.checked2}
              onPress={() => {
                this.state.question.push({ title: question._id, answer: 'b' })
                this.setState({ checked2: !this.state.checked2 })
              }
              }
              containerStyle={styles.checkBoxContainer}
              uncheckedColor='#0f352f'
              textStyle={styles.label}
              value='b'
            />
          </Text>
          <Text>
            <CheckBox
              title={question.choices.c}
              checked={this.state.checked3}
              onPress={() => {
                this.state.question.push({ title: question._id, answer: 'c' })
                this.setState({ checked3: !this.state.checked3 })
              }
              }
              containerStyle={styles.checkBoxContainer}
              uncheckedColor='#0f352f'
              textStyle={styles.label}
              value='c'
            />
          </Text>
          <Text>
            <CheckBox
              title={question.choices.d}
              checked={this.state.checked4}
              onPress={() => {
                this.state.question.push({ title: question._id, answer: 'd' })
                this.setState({ checked4: !this.state.checked4 })
              }
              }
              containerStyle={styles.checkBoxContainer}
              uncheckedColor='#0f352f'
              textStyle={styles.label}
              value='c'
            />
          </Text>
          {
            questionNum === 11
              ? <Button onPress={this.handleSubmitQuestion} >
              Submit
              </Button>
              : <Button onPress={this.handleNextQuestion} >
            Next
              </Button>
          }
        </View>
      )
    }
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
