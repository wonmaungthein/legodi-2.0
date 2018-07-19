import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e6bb44',
    padding: 20
  },
  content: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center'
  },
  question: {
    fontSize: 20,
    color: '#0f352f',
    fontWeight: 'bold'
  },
  checkBoxContainer: {
    backgroundColor: '#e5ba4f',
    borderColor: '#e5ba4f'
  },
  label: {
    fontSize: 15,
    color: '#000'
  },
  viewButton: {
    backgroundColor: '#0f352f',
    width: 300,
    height: 45,
    borderColor: 'transparent',
    borderWidth: 0,
    borderRadius: 5,
    marginTop: 10

  }

})
export default styles

// titleStyle={{color: '#000',width:33}}
//           buttonStyle={{
//             backgroundColor: '#0f352f',
//             width: 300,
//             height: 45,
//             borderColor: 'transparent',
//             borderWidth: 0,
//             borderRadius: 5
//           }}
