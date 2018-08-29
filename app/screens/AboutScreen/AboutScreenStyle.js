import { StyleSheet } from 'react-native'
import Colors from '../../constants/Colors'
const { primaryColor } = Colors

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: primaryColor
  },
  center: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  paragraph: {
    marginTop: 1,
    fontSize: 20,
    marginLeft: 10,
    padding: 2
  },
  arabicParagraph: {
    marginTop: 1,
    fontSize: 20,
    marginRight: 10,
    padding: 2,
    textAlign: 'right'
  },
  firstImage: {
    width: 280,
    height: 200,
    marginTop: -30
  },
  secandImage: {
    width: 260,
    height: 400,
    marginTop: -100
  }
})

export default styles
