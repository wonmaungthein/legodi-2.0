import React from 'react'
import Button from 'apsl-react-native-button'
import { View } from 'react-native'
import { Constants } from 'expo'
import styles from './StartWeegieStyle'
import Colors from '../../constants/Colors'
const { primaryColor, secondaryColor } = Colors

export default class StartWeegieGame extends React.Component {
  static navigationOptions = {
    title: 'Glasgow Welcome Pack',
    headerStyle: {
      backgroundColor: secondaryColor,
      paddingTop: Constants.statusBarHeight
    },
    headerTitleStyle: { color: primaryColor },
    headerTintColor: primaryColor
  };

  render () {
    return (
      <View style={styles.container}>
        <Button
          style={styles.viewButton}
          textStyle={{ color: primaryColor, fontSize: 20, fontWeight: 'bold' }}
          onPress={() => this.props.navigation.navigate('Game')}
        >
          Start
        </Button>
      </View>
    )
  }
}
