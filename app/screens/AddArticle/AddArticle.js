import React from 'react'
import Button from 'apsl-react-native-button'
import { View, ScrollView, Text, Picker, Image, Alert } from 'react-native'
import styles from './AddArticleStyle'
import { addArticle } from '../../helpers/api'
import { Constants, ImagePicker, Permissions } from 'expo'
import Colors from '../../constants/Colors'
import { FormLabel, FormInput } from 'react-native-elements'
const { primaryColor, secondaryColor } = Colors

export default class AddArticle extends React.Component {
  static navigationOptions = {
    title: 'Add New Article',
    headerStyle: {
      backgroundColor: secondaryColor,
      paddingTop: Constants.statusBarHeight
    },
    headerTitleStyle: { color: primaryColor },
    headerTintColor: primaryColor
  };

  constructor (props) {
    super(props)
    // state for the form of adding article
    this.state = {
      title: '',
      fullContent: '',
      category: this.props.navigation.getParam('categoryId'),
      status: 'Pending',
      language: {
        text: 'English',
        short: 'en'
      },
      articleImage: null
    }
  }

  // The function returns another function which updates the state with passing name
  handleChange = name => text => {
    this.setState({ [name]: text })
  };

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
  };

  sendData () {
    const { title, fullContent, category, status, articleImage } = this.state
    const language = this.state.language.short
    const data = {
      title,
      fullContent,
      category,
      language,
      status,
      articleImage
    }
    if (title.length > 0 && fullContent.length > 0 && language.length > 0) {
      addArticle(data, articleImage)
      Alert.alert(
        'Thank you!',
        'We will review your article.',
        [{ text: 'OK', onPress: () => this.props.navigation.goBack() }],
        { cancelable: false }
      )
    } else {
      Alert.alert(
        'Please check the form!',
        'Title, Content and Language are required.',
        [{ text: 'OK' }],
        { cancelable: false }
      )
    }
    addArticle(data, articleImage)
  }

  pickImage = async () => {
    const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL)
    if (status === 'granted') {
      let result = await ImagePicker.launchImageLibraryAsync({
        allowsEditing: true,
        aspect: [4, 3],
        mediaTypes: 'Images'
      })
      if (!result.cancelled) {
        this.setState({ articleImage: result.uri })
      }
    }
  };

  render () {
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
              onChangeText={this.handleChange('fullContent')}
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
              onValueChange={itemValue =>
                this.onHandleChangeLanguage(itemValue)
              }
            >
              <Picker.Item label='English' value='en' />
              <Picker.Item label='Arabic' value='ar' />
              <Picker.Item label='Amharic' value='am' />
            </Picker>
          </View>

          <View style={styles.imagePicker}>
            <Button onPress={this.pickImage}>Choose an image</Button>
            {this.state.articleImage && (
              <Image
                source={{ uri: this.state.articleImage }}
                style={{ width: 200, height: 200 }}
              />
            )}
          </View>

          <Button
            onPress={() => this.sendData()}
            style={styles.submitButton}
            textStyle={{
              color: primaryColor,
              fontSize: 20,
              fontWeight: 'bold'
            }}
          >
            Submit
          </Button>
        </View>
      </ScrollView>
    )
  }
}
