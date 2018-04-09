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
        <div id="v" className="gallery__img">(1963) V.</div>
        <div id="clot" className="gallery__img">(1966) The Crying of Lot 49</div>
        <div id="grainbow" className="gallery__img">(1973) Gravity's Rainbow</div>
        <div id="slearner" className="gallery__img">(1984) Slow Learner</div>
        <div id="vland" className="gallery__img">(1990) Vineland</div>
        <div id="mdixon" className="gallery__img">(1997) Mason & Dixon</div>
        <div id="atday" className="gallery__img">(2006) Against the Day</div>
        <div id="ivice" className="gallery__img">(2009) Inherent Vice</div>
        <div id="bedge" className="gallery__img">(2013) Bleeding Edge</div>
      </div>
    );
  }
}
 
export default Work;
