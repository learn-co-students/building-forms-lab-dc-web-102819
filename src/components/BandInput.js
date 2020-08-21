// Add BandInput component
import React, { Component } from "react";

class BandInput extends Component {
  constructor() {
    super();
    this.state = {
      text: "",
    };
  }

  handleChange = (e) => {
    this.setState({
      text: e.target.value,
    });
  };

  handleSbumit = (e) => {
    const {addBand} =this.props
    e.preventDefault();
    addBand(this.state);
    this.setState({
      text: "",
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSbumit}>
          <input
            type="text"
            value={this.state.text}
            onChange={this.handleChange}
          ></input>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default BandInput;
