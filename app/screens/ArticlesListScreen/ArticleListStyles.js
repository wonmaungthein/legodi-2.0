import { StyleSheet } from 'react-native'
import Colors from '../../constants/Colors'
const { primaryColor } = Colors

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: primaryColor
  },
  layout: {
    flex: 1,
    padding: 10
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingBottom: 10
  },
  description: {
    paddingBottom: 20,
    fontSize: 15
  },
  arabicTitle: {
    fontSize: 20,
    textAlign: 'right',
    fontWeight: 'bold',
    paddingBottom: 10
  },
  arabicDescription: {
    paddingBottom: 20,
    textAlign: 'right',
    fontSize: 15
  }
})

export default styles
