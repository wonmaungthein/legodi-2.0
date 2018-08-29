import { StyleSheet } from 'react-native'
import Colors from '../../constants/Colors'
const { primaryColor } = Colors

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: primaryColor,
    paddingTop: 10
  },
  center: {
    flex: 1,
    alignItems: 'center'
  },
  image: {
    width: 300,
    height: 200
  },
  title: {
    fontSize: 28
  },
  paddingSides: {
    paddingLeft: 10,
    paddingRight: 10
  },
  description: {
    fontSize: 18
  },
  arabicTitle: {
    fontSize: 28,
    textAlign: 'right'
  },
  arabicDescription: {
    textAlign: 'right',
    fontSize: 16,
    lineHeight: 22
  }
})
export default styles
