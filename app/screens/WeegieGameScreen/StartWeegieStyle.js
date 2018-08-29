import { StyleSheet } from 'react-native'
import Colors from '../../constants/Colors'
const { primaryColor, secondaryColor } = Colors

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: primaryColor,
    padding: 40
  },
  viewButton: {
    backgroundColor: secondaryColor
  }
})
export default styles
