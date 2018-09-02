import { StyleSheet, Dimensions } from 'react-native'
import Colors from '../../constants/Colors'
const { primaryColor, secondaryColor } = Colors
const height = Dimensions.get('window').height

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
  imagePicker: {
    marginTop: height - 750,
    alignItems: 'center'
  },
  submitButton: {
    backgroundColor: secondaryColor,
    height: 45,
    borderRadius: 5,
    marginTop: 10
  }
})

export default styles
