import React from 'react'
import { connect } from 'react-redux'
import Button from 'apsl-react-native-button'
import { View, ScrollView, Image, Alert } from 'react-native'
import styles from './AddArticleStyle'
import { addArticle } from '../../helpers/api'
import { Constants, ImagePicker, Permissions } from 'expo'
import { FormLabel, FormInput } from 'react-native-elements'

class AddArticle extends React.Component {
  constructor (props) {
    super(props)
    // state for the form of adding article
    this.state = {
      title: '',
      shortContent: '',
      fullContent: '',
      categoryId: this.props.navigation.getParam('categoryId'),
      status: 'pending',
      articleImage: '',
      imageUrl: ''
    }
  }

  async componentDidMount () {
    const { cities, cityId } = this.props
    const { primary_color: primaryColor, secondary_color: secondaryColor } = cities.filter(city => city.city_id === cityId)[0]
    this.props.navigation.setParams({ primaryColor, secondaryColor })
  }

  componentWillReceiveProps (nextProps) {
    const { cityId } = nextProps
    if (cityId !== this.props.cityId) {
      const { primary_color: primaryColor, secondary_color: secondaryColor } = this.props.cities.filter(city => city.city_id === cityId)[0]
      this.props.navigation.setParams({ primaryColor, secondaryColor })
    }
  }

  shouldComponentUpdate (nextProps) {
    return this.props.cityId !== nextProps.cityId
  }

  static navigationOptions = ({ navigation }) => {
    const { params } = navigation.state
    const primaryColor = params ? `${params.primaryColor}` : '#e6bb44'
    return {
      title: 'Add New Article',
      headerStyle: {
        backgroundColor: params ? `${params.secondaryColor}` : '#0f352e',
        paddingTop: Constants.statusBarHeight
      },
      headerTitleStyle: { color: primaryColor },
      headerTintColor: primaryColor
    }
  };

  // The function returns another function which updates the state with passing name
  handleChange = name => text => {
    this.setState({ [name]: text })
  };

  sendData () {
    const { title, shortContent, fullContent, categoryId, status, articleImage } = this.state
    const data = {
      title,
      shortContent,
      fullContent,
      categoryId,
      status,
      articleImage
    }
    if (title.length > 0 && fullContent.length > 0 && shortContent.length > 0) {
      addArticle(data)
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
    addArticle(data)
  }

  pickImage = async () => {
    const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL)
    if (status === 'granted') {
      let result = await ImagePicker.launchImageLibraryAsync({
        allowsEditing: true,
        aspect: [4, 3],
        mediaTypes: 'Images',
        base64: true
      })
      if (!result.cancelled) {
        this.setState({ articleImage: result.base64, imageUrl: result.uri })
      }
    }
  };

  render () {
    const { cities, cityId } = this.props
    const { primary_color: primaryColor, secondary_color: secondaryColor } = cities.filter(city => city.city_id === cityId)[0]
    return (
      <ScrollView style={[styles.container, { backgroundColor: primaryColor }]}>
        <View style={styles.layout}>
          <View>
            <FormLabel labelStyle={{ color: secondaryColor }}>Title</FormLabel>
            <FormInput
              onChangeText={this.handleChange('title')}
              inputStyle={{ color: secondaryColor }}
              containerStyle={{ borderBottomColor: secondaryColor }}
            />
          </View>
          <View>
            <FormLabel labelStyle={{ color: secondaryColor }}>Short Description</FormLabel>
            <FormInput
              multiline
              onChangeText={this.handleChange('shortContent')}
              inputStyle={{ color: secondaryColor, width: Constants.width }}
              containerStyle={{ borderBottomColor: secondaryColor }}
            />
          </View>
          <View>
            <FormLabel labelStyle={{ color: secondaryColor }}>Full Description</FormLabel>
            <FormInput
              multiline
              onChangeText={this.handleChange('fullContent')}
              inputStyle={{ color: secondaryColor, width: Constants.width }}
              containerStyle={{ borderBottomColor: secondaryColor }}
            />
          </View>
          <View style={styles.imagePicker}>
            <Button onPress={this.pickImage}>Choose an image</Button>
            {
              this.state.imageUrl && (
                <Image
                  source={{ uri: this.state.imageUrl }}
                  style={{ width: 200, height: 200 }}
                />
              )
            }
          </View>

          <Button
            onPress={() => this.sendData()}
            style={[styles.submitButton, { backgroundColor: secondaryColor }]}
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

const mapStateToProps = (state) => ({
  cityId: state.Setting.city,
  cities: state.cities.citiesList
})

export default connect(
  mapStateToProps
)(AddArticle)
