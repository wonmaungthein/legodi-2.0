import React from 'react'
import {
  ScrollView,
  StyleSheet,
  Text,
  View
} from 'react-native'
import { WebBrowser } from 'expo'
import CategoriesList from './CategoriesList'

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Glasgow Welcome Pack',
    headerStyle: { backgroundColor: '#0f352f' },
    headerTitleStyle: { color: '#e6bc44' }
  };

  render () {
    return (
      <View style={styles.container}>
        <ScrollView
          contentContainerStyle={styles.contentContainer}
        >
          <CategoriesList />
        </ScrollView>
      </View>
    )
  }

  _maybeRenderDevelopmentModeWarning () {
    if (__DEV__) {
      const learnMoreButton = (
        <Text onPress={this._handleLearnMorePress} style={styles.helpLinkText}>
          Learn more
        </Text>
      )

      return (
        <Text style={styles.developmentModeText}>
          LEGODI 2.0 tools. {learnMoreButton}
        </Text>
      )
    } else {
      return (
        <Text style={styles.developmentModeText}>
          You are not in development mode, your app will run at full speed.
        </Text>
      )
    }
  }

  _handleLearnMorePress = () => {
    WebBrowser.openBrowserAsync(
      'https://docs.expo.io/versions/latest/guides/development-mode'
    )
  };

  _handleHelpPress = () => {
    WebBrowser.openBrowserAsync(
      'https://docs.expo.io/versions/latest/guides/up-and-running.html#can-t-see-your-changes'
    )
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e5ba4f'
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
