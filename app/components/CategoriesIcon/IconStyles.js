import {
  StyleSheet
} from 'react-native'

const styles = StyleSheet.create({
  box: {
    width: 100,
    height: 100,
    marginTop: 20,
    backgroundColor: '#245e55',
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    color: '#fff',
    fontWeight: 'bold',
    paddingTop: 10
  },
  corner: {
    width: 20,
    height: 20,
    position: 'absolute',
    top: 0,
    right: 0,
    borderWidth: 10,
    borderBottomColor: 'black',
    borderLeftColor: 'black',
    borderTopColor: '#e5ba4f',
    borderRightColor: '#e5ba4f'
  }
})

export default styles
