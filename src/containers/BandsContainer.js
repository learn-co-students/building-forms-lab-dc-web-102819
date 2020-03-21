import React, { Component } from 'react'
import {connect} from 'react-redux'

import BandInput from '../components/BandInput'
import Band from '../components/Band'

class BandsContainer extends Component {
  render() {
    return(
      <div>
        <BandInput addBand = {this.props.addBand}/>
        <Band bands={this.props.bands}/>
      </div>
    )
  }
}

const mapStateToProps = ({bands}) => ({bands})

const mapDispatchToProps = dispatch => ({
  addBand: nameInput => dispatch({type: 'ADD_BAND', nameInput})
})

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer)
