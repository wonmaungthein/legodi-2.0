import {
  StyleSheet
} from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    paddingBottom: 10
  },
  text: {
    width: 250
  },
  content: {
    flexDirection: 'column',
    paddingLeft: 5
  },
  image: {
    width: 100,
    height: 80
  },
  title: {
    fontWeight: 'bold'
  },
  description: {
    fontSize: 15
  },
  arabicTitle: {
    fontWeight: 'bold',
    textAlign: 'right'
  },
  arabicDescription: {
    fontSize: 15,
    textAlign: 'right'
  }
})

export default styles
