import React from 'react'
import { Text, View, ScrollView } from 'react-native'
import PropTypes from 'prop-types'
import { CheckBox } from 'react-native-elements'
import { connect } from 'react-redux'
import styles from './WeegieGameStyle'
import { fetchWeegieGameQuestions, fetchWeegieGameAnswer } from '../../redux/actions/weegieGame'
import Button from 'apsl-react-native-button'
import { Constants } from 'expo'

class WeegieGame extends React.Component {
  static navigationOptions = {
    title: 'Weegie Game',
    headerStyle: { backgroundColor: '#0f352f', paddingTop: Constants.statusBarHeight },
    headerTitleStyle: { color: '#e6bc44' },
    headerTintColor: '#e6bc44'
  };

  state = {
    checked1: false,
    checked2: false,
    checked3: false,
    checked4: false,
    question: [],
    open: true,
    dataIndex: 0,
    isAnswerScreen: false
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
    const { question } = this.state
    this.props.onGetWeegieAnswers(question)
      .then(() => this.setState({ open: false, isAnswerScreen: true }))
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
          <View>
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
          </View>
          <View>
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
          </View>
          <View>
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
          </View>
          <View>
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
          </View>
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

  renderAnswers = (data) => {
    const { goBack } = this.props.navigation
    return (
      <View>
        <Text>Correct answers {data.weegieGameAnsers.correctAnswers}</Text>
        <Text>Wrong answers {data.weegieGameAnsers.wrongAnswers}</Text>
        {
          data.weegieGameAnsers.wrongAnswersList.map(answer => {
            return (
              <View key={answer._id}>
                <Text>{answer.title}</Text>
                <Text>A: {answer.choices.d}</Text>
                <Text>B: {answer.choices.a}</Text>
                <Text>C: {answer.choices.b}</Text>
                <Text>D: {answer.choices.c}</Text>
                <Text>Answer: {answer.answer}</Text>
              </View>
            )
          })
        }
        <Button style={{marginBottom: 20}}onPress={() => goBack()} >
            Back To Start
        </Button>
      </View>
    )
  }

  showGameContent = (data, WeegieGameAnswers) => {
    if (this.state.open) {
      return this.showGame(data)
    } else if (this.state.isAnswerScreen) {
      return this.renderAnswers(WeegieGameAnswers)
    }
    return (
      <View style={styles.viewButton}>
        <Button style={styles.startButton} onPress={this.handleOpen} textStyle={{ color: '#e5ba4f', fontSize: 20, fontWeight: 'bold' }}>
          Start
        </Button>
      </View>
    )
  }

  render () {
    const data = this.props.WeegieGameQuestions
    const { WeegieGameAnswers } = this.props
    return (
      <ScrollView style={styles.container}>
        {this.showGameContent(data, WeegieGameAnswers)}
      </ScrollView>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    WeegieGameQuestions: state.WeegieGame.weegieQuestions,
    WeegieGameAnswers: state.WeegieGameAnswers
  }
}

const dispatchToProps = dispatch => {
  return {
    onGetWeegieAnswers: (userAnswers) => dispatch(fetchWeegieGameAnswer(userAnswers)),
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
