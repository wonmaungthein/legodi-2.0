import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#e6bb44'
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
