import React from 'react'
import Button from 'apsl-react-native-button'
import {
  View,
  ScrollView,
  Text,
  Picker,
  Image
} from 'react-native'
import styles from './AddArticleStyle'
import { Constants, ImagePicker, Permissions } from 'expo'
import Colors from '../../constants/Colors'
import { FormLabel, FormInput } from 'react-native-elements'
// Colors passed from the Constants => yellow and green
const { primaryColor, secondaryColor } = Colors

export default class AddArticle extends React.Component {
  static navigationOptions = {
    title: 'Add New Article',
    headerStyle: { backgroundColor: secondaryColor, paddingTop: Constants.statusBarHeight },
    headerTitleStyle: { color: primaryColor },
    headerTintColor: primaryColor
  };

  constructor (props) {
    super(props)
    // state for the form of adding article
    this.state = {
      title: '',
      content: '',
      categoryId: this.props.navigation.getParam('categoryId'),
      status: 'Not Approved',
      language: {
        text: 'English',
        short: 'en'
      },
      image: null
    }
  }

  // The function returns another function which updates the state with passing name
  handleChange = name => text => {
    this.setState({ [name]: text })
  }

  onHandleChangeLanguage = value => {
    switch (value) {
      case 'en':
        this.setState({ language: { text: 'Enlish', short: 'en' } })
        return this.state.language.short
      case 'ar':
        this.setState({ language: { text: 'Arabic', short: 'ar' } })
        return this.state.language.short
      case 'am':
        this.setState({ language: { text: 'Amharic', short: 'am' } })
        return this.state.language.short
    }
  }

  sendData () {
    console.log('Pressed')
  }

  pickImage = async () => {
    const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL)
    // console.log('permissions and status of CAMERA: ', status);

    if (status === 'granted') {
      let result = await ImagePicker.launchImageLibraryAsync({
        allowsEditing: true,
        aspect: [4, 3],
        mediaTypes: 'Images'
      })
      // console.log(result);
      if (!result.cancelled) {
        this.setState({ image: result.uri })
      }
    }
  };

  render () {
    console.log(this.state)
    return (
      <ScrollView style={styles.container}>
        <View style={styles.layout}>
          <View>
            <FormLabel labelStyle={styles.inputTitle}>Title</FormLabel>
            <FormInput
              onChangeText={this.handleChange('title')}
              inputStyle={{ color: secondaryColor }}
              containerStyle={{ borderBottomColor: secondaryColor }}
            />
          </View>
          <View>
            <FormLabel labelStyle={styles.inputTitle}>Content</FormLabel>
            <FormInput
              multiline
              onChangeText={this.handleChange('content')}
              inputStyle={{ color: secondaryColor, width: Constants.width }}
              containerStyle={{ borderBottomColor: secondaryColor }}
            />
          </View>
          <View style={styles.pickerContainer}>
            <Text style={styles.language}>
              {this.state.language.text} is selected
            </Text>
            <Text style={styles.changeLanguage}>Select Language:</Text>
            <Picker
              selectedValue={this.state.language.short}
              style={{ height: 50, width: 100 }}
              onValueChange={itemValue => this.onHandleChangeLanguage(itemValue)}
            >
              <Picker.Item label='English' value='en' />
              <Picker.Item label='Arabic' value='ar' />
              <Picker.Item label='Amharic' value='am' />
            </Picker>
          </View>

          <View>
            <Button
              onPress={this.pickImage}
            >
              Choose an image
            </Button>
            {this.state.image &&
              <Image source={{ uri: this.state.image }} style={{ width: 200, height: 200 }} />}
          </View>

          <Button
            onPress={() => this.sendData()}
            style={styles.submitButton}
            textStyle={{ color: primaryColor, fontSize: 20, fontWeight: 'bold' }}
          >
            Submit
          </Button>
        </View>
      </ScrollView>
    )
  }
}
