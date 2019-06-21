import React, { Component } from "react";
import M from "materialize-css/dist/js/materialize.min.js"
import { NavLink } from "react-router-dom"
import SignedInLinks from "./SignedInLinks"
import SignedOutLinks from './SignedOutLinks'
import Avatar from './Avatar'

class Sidebar extends Component {
    componentDidMount() {
      const elem = document.querySelector(".sidenav");
      M.Sidenav.init(elem, {
          edge: "left",
          inDuration: 250
      });
    }

  render() {
    const { uid, isDesktop } = this.props
    console.log(this.props )
    return (
      <div>
        <ul id="slide-out" className="sidenav">
          <Avatar />
          {!uid ?  <SignedOutLinks /> : <SignedInLinks isDesktop={isDesktop} />}

        </ul>
        <NavLink to='#' data-target="slide-out" className="sidenav-trigger">
          <i className="material-icons">menu</i>
        </NavLink>
      </div>
    );
  }
}

export default Sidebar
