import React, { Component } from "react";
 
class Work extends Component {
  render() {
    return (
      <div className="work__gallery">
      <div className="quote">
      <h3 className="focus-in-expand-fwd">
        “If they can get you asking the wrong questions,<br /> they don't have to worry about answers.”<br /> 
        ― Thomas Pynchon, Gravity's Rainbow
      </h3>
      </div>
      <hr />
      <div className="gallery__container">
          <div id="v" className="gallery__img"></div>
          <div id="clot" className="gallery__img"></div>
          <div id="grainbow" className="gallery__img"></div>
          <div id="slearner" className="gallery__img"></div>
          <div id="vland" className="gallery__img"></div>
          <div id="mdixon" className="gallery__img"></div>
          <div id="atday" className="gallery__img"></div>
          <div id="ivice" className="gallery__img"></div>
          <div id="bedge" className="gallery__img"></div>
        </div>
      </div>
    );
  }
}
 
export default Work;
