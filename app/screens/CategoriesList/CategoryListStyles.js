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
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 20
  }
})

export default styles
