import { StyleSheet } from 'react-native'
import Colors from '../../constants/Colors'
const { primaryColor, secondaryColor } = Colors

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: primaryColor,
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  language: {
    fontSize: 20,
    fontWeight: 'bold',
    backgroundColor: secondaryColor,
    color: primaryColor,
    width: 330,
    padding: 15,
    textAlign: 'center'
  },
  changeLanguage: {
    fontSize: 18,
    marginTop: 15
  }
})
export default styles
