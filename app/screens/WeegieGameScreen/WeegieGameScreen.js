import React from 'react'
import { Text, View, ScrollView } from 'react-native'
import PropTypes from 'prop-types'
import { CheckBox } from 'react-native-elements'
import { connect } from 'react-redux'
import styles from './WeegieGameStyle'
import {
  fetchWeegieGameQuestions,
  fetchWeegieGameAnswer
} from '../../redux/actions/weegieGame'
import Button from 'apsl-react-native-button'
import { Constants } from 'expo'

class WeegieGame extends React.Component {
  static navigationOptions = ({ navigation }) => {
    const { params } = navigation.state
    const primaryColor = params ? `${params.primaryColor}` : '#e6bb44'
    return {
      title: 'Weegie Game',
      headerStyle: {
        backgroundColor: params ? `${params.secondaryColor}` : '#0f352e',
        paddingTop: Constants.statusBarHeight
      },
      headerTitleStyle: { color: primaryColor },
      headerTintColor: primaryColor
    }
  };

  state = {
    checked: 'a',
    question: [],
    open: true,
    dataIndex: 0,
    isAnswerScreen: false
  };

  componentDidMount () {
    this.props.onGetWeegieQuestions()
    const { cities, cityId } = this.props
    const { primary_color: primaryColor, secondary_color: secondaryColor } = cities.filter(city => city.city_id === cityId)[0]
    this.props.navigation.setParams({ primaryColor, secondaryColor })
  }

  handleNextQuestion = e => {
    const data = this.props.WeegieGameQuestions
    const { dataIndex, checked } = this.state
    const answer = checked
    const title = data[dataIndex].question_id

    this.state.question.push({ title, answer })

    e.preventDefault()
    if (dataIndex <= 12) {
      this.setState({
        dataIndex: dataIndex + 1
      })
    } else {
      const { question } = this.state
      this.props.onGetWeegieAnswers(question).then(() => {
        this.setState({ open: false, isAnswerScreen: true })
      })
    }
  };

  handleOpen = () => {
    this.setState({ open: true })
  };

  resetGame = () =>
    this.setState({
      checked: 'a',
      question: [],
      open: true,
      dataIndex: 0,
      isAnswerScreen: false
    });

  handleCheckBox = value => {
    this.setState({ checked: value })
  };

  showGame = data => {
    if (data.length > 0) {
      const { dataIndex } = this.state
      const question = data[dataIndex]
      const questionNum = dataIndex + 1
      const { cities, cityId } = this.props
      const { primary_color: primaryColor, secondary_color: secondaryColor } = cities.filter(city => city.city_id === cityId)[0]
      return (
        <View styles={styles.content}>
          <Text style={[styles.question, { color: secondaryColor }]}>
            {questionNum}- {question.title}
          </Text>
          <View>
            <CheckBox
              title={question.a}
              checked={this.state.checked === 'a'}
              onPress={() => {
                this.handleCheckBox('a')
              }}
              containerStyle={{ backgroundColor: primaryColor, borderColor: primaryColor }}
              uncheckedColor={secondaryColor}
              textStyle={styles.label}
            />
          </View>
          <View>
            <CheckBox
              title={question.b}
              checked={this.state.checked === 'b'}
              onPress={() => {
                this.handleCheckBox('b')
              }}
              containerStyle={{ backgroundColor: primaryColor, borderColor: primaryColor }}
              uncheckedColor={secondaryColor}
              textStyle={styles.label}
            />
          </View>
          <View>
            <CheckBox
              title={question.c}
              checked={this.state.checked === 'c'}
              onPress={() => {
                this.handleCheckBox('c')
              }}
              containerStyle={{ backgroundColor: primaryColor, borderColor: primaryColor }}
              uncheckedColor={secondaryColor}
              textStyle={styles.label}
              value='c'
            />
          </View>
          <View>
            <CheckBox
              title={question.d}
              checked={this.state.checked === 'd'}
              onPress={() => {
                this.handleCheckBox('d')
              }}
              containerStyle={{ backgroundColor: primaryColor, borderColor: primaryColor }}
              uncheckedColor={secondaryColor}
              textStyle={styles.label}
              value='c'
            />
          </View>
          <Button
            style={[styles.PlayAgainBtn, { backgroundColor: secondaryColor }]}
            onPress={this.handleNextQuestion}
            textStyle={{
              color: primaryColor,
              fontSize: 20,
              fontWeight: 'bold'
            }}
          >
            {questionNum === 14 ? 'Submit' : 'Next'}
          </Button>
        </View>
      )
    }
  };

  renderAnswers = data => {
    const { cities, cityId } = this.props
    const { primary_color: primaryColor, secondary_color: secondaryColor } = cities.filter(city => city.city_id === cityId)[0]
    return (
      <View>
        <Text style={styles.correctAnswers}>
          Correct &#x2714; :{' '}
          <Text style={{ color: 'green' }}>
            {data.weegieGameAnsers.correctAnswers}
          </Text>
        </Text>
        <Text style={styles.wrongAnswers}>
          Wrong &#x2716; :{' '}
          <Text style={{ color: 'red' }}>
            {data.weegieGameAnsers.wrongAnswers}
          </Text>
        </Text>
        {data.weegieGameAnsers.wrongAnswersList.map(answer => {
          return (
            <View key={answer._id}>
              <Text style={styles.questionTitle}>{answer.title}</Text>
              <View style={{ marginLeft: 20 }}>
                <Text>A: {answer.d}</Text>
                <Text>B: {answer.a}</Text>
                <Text>C: {answer.b}</Text>
                <Text>D: {answer.c}</Text>
                <Text style={styles.answer}>Answer: {answer.answer}</Text>
              </View>
            </View>
          )
        })}
        <View style={styles.playAgain}>
          <Button
            textStyle={{
              color: primaryColor,
              fontSize: 20,
              fontWeight: 'bold'
            }}
            style={[styles.PlayAgainBtn, { backgroundColor: secondaryColor }]}
            onPress={this.resetGame}
          >
            Play Again
          </Button>
        </View>
      </View>
    )
  };

  showGameContent = (data, WeegieGameAnswers) => {
    if (this.state.open) {
      return this.showGame(data)
    } else if (this.state.isAnswerScreen) {
      return this.renderAnswers(WeegieGameAnswers)
    }
    const { cities, cityId } = this.props
    const { primary_color: primaryColor, secondary_color: secondaryColor } = cities.filter(city => city.city_id === cityId)[0]
    return (
      <View style={[styles.viewButton, { backgroundColor: secondaryColor }]}>
        <Button
          style={styles.startButton}
          onPress={this.handleOpen}
          textStyle={{ color: primaryColor, fontSize: 20, fontWeight: 'bold' }}
        >
          Start
        </Button>
      </View>
    )
  };

  render () {
    const data = this.props.WeegieGameQuestions
    const { WeegieGameAnswers } = this.props
    const { cities, cityId } = this.props
    const { primary_color: primaryColor } = cities.filter(city => city.city_id === cityId)[0]
    return (
      <ScrollView style={[styles.container, { backgroundColor: primaryColor }]}>
        {this.showGameContent(data, WeegieGameAnswers)}
      </ScrollView>
    )
  }
}

const mapStateToProps = state => {
  return {
    WeegieGameQuestions: state.WeegieGame.weegieQuestions,
    WeegieGameAnswers: state.WeegieGameAnswers,
    cityId: state.Setting.city,
    cities: state.cities.citiesList
  }
}

const dispatchToProps = dispatch => {
  return {
    onGetWeegieAnswers: userAnswers =>
      dispatch(fetchWeegieGameAnswer(userAnswers)),
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
