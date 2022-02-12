import React, { Component } from "react";
import Modal from "./modals";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";

class Header extends Component {
  constructor() {
    super();
    this.state = {
      modalIsOpen: false,
    };

    this.handleNewShopItemClick = this.handleNewShopItemClick.bind(this);
    this.handleModalClose = this.handleModalClose.bind(this);
    this.handleSuccessfulNewFormSubmission =
      this.handleSuccessfulNewFormSubmission.bind(this);
  }

  handleSuccessfulNewFormSubmission() {
    this.setState({
      modalIsOpen: false,
    });
  }

  handleModalClose() {
    this.setState({
      modalIsOpen: false,
    });
  }

  handleNewShopItemClick() {
    this.setState({
      modalIsOpen: true,
    });
  }

  render() {
    return (
      <div className="header">
        <div className="header__img">
          <img src="img/logo.jpg"></img>
        </div>

        <Modal
          handleSuccessfullNewFormSubmission={
            this.handleSuccessfullNewFormSubmission
          }
          handleModalClose={this.handleModalClose}
          modalIsOpen={this.state.modalIsOpen}
        />

        <div className="new-shop-item-link">
        <FontAwesomeIcon
          icon={faCartPlus}
           onClick={this.handleNewShopItemClick}/>
        </div>
      </div>
    );
  }
}

export default Header;
