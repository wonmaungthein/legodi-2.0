import { StyleSheet } from 'react-native'
import Colors from '../../constants/Colors'
const { primaryColor, secondaryColor } = Colors

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: primaryColor
  },
  layout: {
    flex: 1,
    padding: 10
  },
  inputTitle: {
    color: secondaryColor
  },
  pickerContainer: {
    paddingTop: 20,
    alignItems: 'center'
  },
  language: {
    fontSize: 17,
    fontWeight: 'bold',
    backgroundColor: secondaryColor,
    color: primaryColor,
    padding: 10,
    textAlign: 'center'
  },
  changeLanguage: {
    fontSize: 15,
    marginTop: 10
  },
  submitButton: {
    backgroundColor: secondaryColor,
    height: 45,
    borderRadius: 5,
    marginTop: 10
  }
})

export default styles
