import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Home from "./Home";
import Work from "./Work";
import Info from "./Info";
 
class Main extends Component {
  render() {
    return (
        <HashRouter>
            <div>
            <h1 className="title">Thomas Pynchon</h1>
            <ul className="header">
                <div>
                <li><NavLink exact to="/">Home</NavLink></li>
                </div>
                <div>
                <li><NavLink to="/work">Work</NavLink></li>
                </div>
                <div>
                <li><NavLink to="/info">Info</NavLink></li>
                </div>
            </ul>
            <div className="content">
                <Route exact path="/" component={Home}/>
                <Route path="/work" component={Work}/>
                <Route path="/info" component={Info}/>
            </div>
            </div>
        </HashRouter>
    );
  }
}
 
export default Main;