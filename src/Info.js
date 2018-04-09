import React, { Component } from "react";
 
class Info extends Component {
  render() {
    return (
      <div className="info__wrapper">
        <h2>Links</h2>
        <a href="https://en.wikipedia.org/wiki/Thomas_Pynchon" target="_blank" rel="noopener noreferrer">Thomas Pynchon -wikipedia</a><br />
        <a href="https://thomaspynchon.com/" target="_blank" rel="noopener noreferrer">Thomas Pynchon -Fan page</a>
      </div>
    );
  }
}
 
export default Info;