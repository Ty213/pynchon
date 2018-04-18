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
          <a href="https://www.penguinrandomhouse.com/books/312578/v-by-thomas-pynchon/9781101594568" target="_blank"><div id="v" className="gallery__img"></div></a>
          <a href="https://www.penguinrandomhouse.com/books/312579/the-crying-of-lot-49-by-thomas-pynchon/9781101594605" target="_blank"><div id="clot" className="gallery__img"></div></a>
          <a href="https://www.penguinrandomhouse.com/books/299800/gravitys-rainbow-by-thomas-pynchon/" target="_blank"><div id="grainbow" className="gallery__img"></div></a>
          <a href="https://www.penguinrandomhouse.com/books/312580/slow-learner-by-thomas-pynchon" target="_blank"><div id="slearner" className="gallery__img"></div></a>
          <a href="https://www.penguinrandomhouse.com/books/312581/vineland-by-thomas-pynchon" target="_blank"><div id="vland" className="gallery__img"></div></a>
          <a href="https://www.penguinrandomhouse.com/books/312582/mason-and-dixon-by-thomas-pynchon" target="_blank"><div id="mdixon" className="gallery__img"></div></a>
          <a href="https://www.penguinrandomhouse.com/books/312583/against-the-day-by-thomas-pynchon" target="_blank"><div id="atday" className="gallery__img"></div></a>
          <a href="https://www.penguinrandomhouse.com/books/312584/inherent-vice-by-thomas-pynchon" target="_blank"><div id="ivice" className="gallery__img"></div></a>
          <a href="https://www.penguinrandomhouse.com/books/306761/bleeding-edge-by-thomas-pynchon" target="_blank"><div id="bedge" className="gallery__img"></div></a>
        </div>
      </div>
    );
  }
}
 
export default Work;
