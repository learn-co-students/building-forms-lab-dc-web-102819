// Add BandInput component
import React, { Component } from 'react'

class BandInput extends Component {
  constructor() {
    super()
    this.state = {
      name: ''
    }
  }

  changeHandler = (e) => {
    this.setState({name: e.target.value})
  }

  submitHandler = (e) => {
    e.preventDefault()
    this.props.addBand(this.state)
    this.setState({name: ''})
  }
  
  
  render() {
    return(
      <div>
        <form onSubmit={this.submitHandler}>
          <label>Band Name</label>
          <input type='text' value={this.state.name} onChange={this.changeHandler}/>
          <button type='submit'>Add Band</button>
        </form>
      </div>
    )
  }
}

export default BandInput
