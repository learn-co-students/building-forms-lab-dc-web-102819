import React, { Component } from "react";
import BandInput from "../components/BandInput";
import { connect } from "react-redux";
import Band from "../components/Band";

class BandsContainer extends Component {
  render() {    
    return (
      <div>
        <BandInput addBand={this.props.addBand}/>
        {this.props.bands.map((band, index) => <Band key={index} band={band}/>)}
      </div>
    );
  }
}

const mapStatetoProps = (state) =>{
  return{
    bands:state.bands
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addBand: (text) => dispatch({ type: "ADD_TEXT", text }),
  };
};

export default connect(mapStatetoProps, mapDispatchToProps)(BandsContainer);
