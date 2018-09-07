import React from 'react'
import { ScrollView, Text, View, Image } from 'react-native'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import styles from './AboutScreenStyle'
import { Constants } from 'expo'
import Colors from '../../constants/Colors'
const { primaryColor, secondaryColor } = Colors

class AboutScreen extends React.Component {
  componentDidMount () {
    const { cities, cityId } = this.props
    const title = cities.filter(city => city.city_id === cityId)[0].city_name
    this.props.navigation.setParams({ title })
  }

  componentWillReceiveProps (nextProps) {
    const { cityId } = nextProps
    if (cityId !== this.props.cityId) {
      const title = this.props.cities.filter(city => city.city_id === cityId)[0].city_name
      this.props.navigation.setParams({ title })
    }
  }

  shouldComponentUpdate (nextProps) {
    return this.props.cityId !== nextProps.cityId
  }

  static navigationOptions = ({ navigation }) => {
    const { params } = navigation.state
    return {
      title: params ? `${params.title} Welcome Pack` : 'Glasgow Welcome Pack',
      headerStyle: {
        backgroundColor: secondaryColor,
        paddingTop: Constants.statusBarHeight
      },
      headerTitleStyle: { color: primaryColor }
    }
  };

  renderAboutData (language) {
    if (language === 'am') {
      return (
        <View style={styles.textContainer}>
          <Text style={styles.paragraph}>
            Amharnga
          </Text>
          <Text style={styles.paragraph}>
            Amharnga
          </Text>
          <Text style={styles.paragraph}>
            Amharnga
          </Text>
        </View>
      )
    } else if (language === 'ar') {
      return (
        <View style={styles.textContainer}>
          <Text style={styles.arabicParagraph}>
            تم تطوير هذا التطبيق من قبل طلاب CodeYourFuture - Glasgow بالتعاون مع Refuweegee. الدفعة الاولة.
          </Text>
          <Text style={styles.arabicParagraph}>
            -: CodeYourFuture
          </Text>
          <Text style={styles.arabicParagraph}>هي منظمة لتعلم البرمجة للاجئين وطالبي اللجوء في المملكة المتحدة</Text>
          <Text style={styles.arabicParagraph}>أطلقنا اسم التطبيق Legodi بعد صديقنا سيمون Basegi Legodi ، الذي تم اعتقاله من قبل وزارة الداخلية منذ أكثر من عام حتى الآن.</Text>
        </View>
      )
    } else {
      return (
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
      )
    }
  }

  render () {
    const { language } = this.props
    const aboutContent = this.renderAboutData(language)
    return (
      <ScrollView style={styles.container}>
        {aboutContent}
        <View style={styles.center}>
          <Image
            style={styles.firstImage}
            source={require('../../assets/images/codeyourfuture.png')}
            resizeMode='contain'
          />
        </View>
        <View style={styles.center}>
          <Image
            style={styles.secandImage}
            source={require('../../assets/images/refuweegee.png')}
            resizeMode='contain'
          />
        </View>
      </ScrollView>
    )
  }
}

const mapStateToProps = (state) => ({
  language: state.Setting.language,
  cityId: state.Setting.city,
  cities: state.cities.citiesList
})

AboutScreen.propTypes = {
  language: PropTypes.string.isRequired,
  cityId: PropTypes.string,
  cities: PropTypes.array
}

export default connect(mapStateToProps, null)(AboutScreen)
