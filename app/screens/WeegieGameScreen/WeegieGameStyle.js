import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20
  },
  content: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center'
  },
  playAgain: {
    padding: 40
  },
  PlayAgainBtn: {
    height: 45,
    borderColor: 'transparent',
    borderWidth: 0,
    borderRadius: 5,
    marginTop: 10
  },
  question: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  label: {
    fontSize: 15,
    color: '#000'
  },
  viewButton: {
    width: 300,
    height: 45,
    borderColor: 'transparent',
    borderWidth: 0,
    borderRadius: 5,
    marginTop: 10
  },
  correctAnswers: {
    fontSize: 24,
    textAlign: 'center'
  },
  wrongAnswers: {
    fontSize: 24,
    textAlign: 'center'
  },
  questionTitle: {
    fontSize: 20,
    paddingTop: 10,
    paddingBottom: 10
  },
  answer: {
    fontSize: 20,
    paddingTop: 10,
    color: 'green'
  }
})
export default styles
