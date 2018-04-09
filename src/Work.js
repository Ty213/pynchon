import React, { Component } from "react";
 
class Work extends Component {
  render() {
    return (
      <div className="work__gallery">
      <div className="quote">
      <h3>
        “If they can get you asking the wrong questions,<br /> they don't have to worry about answers.”<br /> 
        ― Thomas Pynchon, Gravity's Rainbow
      </h3>
      </div>
      <hr />
        <div id="v" classname="gallery__img">(1963) V.</div>
        <div id="clot" classname="gallery__img">(1966) The Crying of Lot 49</div>
        <div id="grainbow" classname="gallery__img">(1973) Gravity's Rainbow</div>
        <div id="slearner" classname="gallery__img">(1984) Slow Learner</div>
        <div id="vland" classname="gallery__img">(1990) Vineland</div>
        <div id="mdixon" classname="gallery__img">(1997) Mason & Dixon</div>
        <div id="atday" classname="gallery__img">(2006) Against the Day</div>
        <div id="ivice" classname="gallery__img">(2009) Inherent Vice</div>
        <div id="bedge" classname="gallery__img">(2013) Bleeding Edge</div>
      </div>
    );
  }
}
 
export default Work;
