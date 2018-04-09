import React, { Component } from "react";
 
class Home extends Component {
  render() {
    return (
      <div className="home__bio">
        <h2>Thomas Pynchon</h2>
        <div className="home__img"></div>
        <div className="home__info">
        <p>Thomas Pynchon is an American author best known
           for his dense and complex novels. He was born May 8, 1937.
           He is a recluse and not much is known about his personal life.</p>

        <p>He served two years in the United States Navy
           and earned an English degree from Cornell University.
           His novel <i>Gravity's Rainbow</i> won the 1973 U.S. National Book Award for Fiction.</p>
          </div>
          <hr />
          <p>Lastest book</p>
          <a href="https://www.penguinrandomhouse.com/books/306761/bleeding-edge-by-thomas-pynchon/9780143125754/"
          target="_blank">
          <div className="home__book"></div>
          </a>
          <p>Bleeding Edge 2013</p>
      </div>
    );
  }
}
 
export default Home;