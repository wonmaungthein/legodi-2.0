import { StyleSheet } from 'react-native'
import Colors from '../../constants/Colors'
const { primaryColor } = Colors

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: primaryColor
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center'
  },
  contentContainer: {
    paddingTop: 0
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7'
  }
})

export default styles
