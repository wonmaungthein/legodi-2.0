import { StyleSheet, Dimensions } from 'react-native'
const height = Dimensions.get('window').height

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  layout: {
    flex: 1,
    padding: 10
  },
  pickerContainer: {
    paddingTop: 20,
    alignItems: 'center'
  },
  imagePicker: {
    marginTop: height - 630,
    alignItems: 'center'
  },
  submitButton: {
    height: 45,
    borderRadius: 5,
    marginTop: 10
  }
})

export default styles
