import { StyleSheet } from 'react-native'
import { Constants } from 'expo'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e5ba4f',
    paddingTop: Constants.statusBarHeight
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
