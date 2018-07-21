import React from 'react'
import Button from 'apsl-react-native-button'
import { View } from 'react-native'
import { Constants } from 'expo'
import styles from './StartWeegieStyle'

export default class StartWeegieGame extends React.Component {
  static navigationOptions = {
    title: 'Glasgow Welcome Pack',
    headerStyle: {
      backgroundColor: '#0f352f',
      paddingTop: Constants.statusBarHeight
    },
    headerTitleStyle: { color: '#e6bc44' },
    headerTintColor: '#e6bc44'
  };

  render () {
    return (
      <View style={styles.container}>
        <Button
          style={styles.viewButton}
          textStyle={{ color: '#e5ba4f', fontSize: 20, fontWeight: 'bold' }}
          onPress={() => this.props.navigation.navigate('Game')}
        >
          Start
        </Button>
      </View>
    )
  }
}
