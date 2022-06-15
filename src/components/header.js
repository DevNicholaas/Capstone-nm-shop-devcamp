import React, { Component } from "react";
class Header extends Component {
  constructor() {
    super();

  }

  render() {
    return (
      <div className="header">
        <div className="header__img">
          <img src="img/logo.jpg"></img>
        </div>
      </div>
      
    );
  }
}

export default Header;
