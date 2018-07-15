import React from 'react'
import { Text } from 'react-native'
import PropTypes from 'prop-types'

export class MonoText extends React.Component {
  render () {
    return <Text {...this.props} style={[this.props.style, { fontFamily: 'space-mono' }]} />
  }
}

MonoText.propTypes = {
  style: PropTypes.object
}
