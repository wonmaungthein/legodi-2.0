import React from "react";
import { ScrollView, StyleSheet, Text, View, Image } from "react-native";
import { Constants } from "expo";

export default class AboutScreen extends React.Component {
  static navigationOptions = {
    title: "Glasgow Welcome Pack",
    headerStyle: {
      backgroundColor: "#0f352f",
      paddingTop: Constants.statusBarHeight
    },
    headerTitleStyle: { color: "#e6bc44" }
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.textContainer}>
          <Text style={styles.paragraph}>
            This application was developed by CodeYourFuture students - Glasgow
            Cohort 1 - in collaboration with Refuweegee.
          </Text>
          <Text style={styles.paragraph}>
            CodeYourFuture is an organisation that teaches programming to
            refugees and asylum seekers in the UK.
          </Text>
          <Text style={styles.paragraph}>
            We named the app Legodi after our friend Simon Basegi Legodi, who
            has been detained by the Home Office for more than 1 year now.
          </Text>
        </View>
        <View style={styles.center}>
          <Image
            style={styles.firstImage}
            source={require("../assets/images/codeyourfuture.png")}
            resizeMode="contain"
          />
        </View>
        <View style={styles.center}>
          <Image
            style={styles.secandImage}
            source={require("../assets/images/refuweegee.png")}
            resizeMode="contain"
          />
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: "#e6bb44"
  },
  center: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  paragraph: {
    marginTop: 1,
    fontSize: 20,
    marginLeft: 10,
    padding: 2
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
});
