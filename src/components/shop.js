import React, { Component } from "react";
import ShoppingCart from "./shoppingcart";
import Modal from "./modals";

import axios from "axios";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";

import "@blueprintjs/core/lib/css/blueprint.css";
import { Button, Spinner, SpinnerSize } from "@blueprintjs/core";

class Shop extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modalIsOpen: false,
      items: [],
      loading: false,
      error: false,
      products: [],
    };
    this.handleNewShopItemClick = this.handleNewShopItemClick.bind(this);
    this.handleModalClose = this.handleModalClose.bind(this);
    this.handleAddToCart = this.handleAddToCart.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleSuccessfulNewFormSubmission =
      this.handleSuccessfulNewFormSubmission.bind(this);
  }

  _isMounted = false;

  getItems() {

    fetch("https://nm-shop-db-devcamp.herokuapp.com/shops")
      .then((response) => response.json())
      .then((data) => {
        if (this._isMounted) {
          this.setState({
            items: data,
            loading: true,
          });
        }
      })
      .catch((error) => {
        console.log("Error getting items", error);

        this.setState({
          error: true,
          loading: false,
        });
      });
  }

  componentDidMount() {
    this._isMounted = true;
    this.getItems();
  }

  componentDidUpdate() {
    if (this.state.loading) {
      this.setState({
        loading: false,
      });
    }
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

  handleSuccessfulNewFormSubmission(item) {
    this.setState({
      loading: false,
      modalIsOpen: false,
      items: [item].concat(this.state.items),
    });
  }

  renderShopItems() {
    const itemsHtml = this.state.items.map((item) => (
      <div className="shop_items" key={item.id}>
        <img width="100px" height="100px" src={item.img}></img>
        <h2>{item.title}</h2>
        <p>
          {`$`}
          {item.price}
        </p>
        <Button
          intent="success"
          text="Add to cart"
          onClick={() => this.handleAddToCart(item)}
        />
        <Button
          intent="remove"
          text="Delete"
          onClick={() => this.handleDelete(item)}
        />
      </div>
    ));
    return itemsHtml;
  }
  handleDelete(item, e) {
    axios
      .delete(`https://nm-shop-db-devcamp.herokuapp.com/shop/${item.id}`)

      .then((response) => {
        console.log(response.data)
      })

      .catch((error) => {
        console.log("Delete err");
      });

      this.setState({items: this.state.items.filter(function(item) { 
        return item !== item 
    })})
  }

  handleAddToCart(item) {
    this.setState({
      products: [...this.state.products, item],
    });
  }

  render() {
    if (this.state.loading) {
      return (
        <Spinner intent={"primary"} size={SpinnerSize.STANDARD} value={0.7} />
      );
    } else if (this.state.error) {
      return <div className="error">Error occured</div>;
    } else {
      return (
        <div className="shop">
          <div className="shop_instruct">
            <h3>
              Instructions:
              <ul>
                1. Click on the green shopping cart to add an item to the shop.
              </ul>
              <ul>
                2. After selecting an item's title, price, and image click save.
              </ul>
              <ul>3. Then reload the page to see your item in the shop!</ul>
            </h3>
          </div>
          <div className="shop_items_wrapper">
          <div className="new-shop-item-link">
        <FontAwesomeIcon
          icon={faCartPlus}
           onClick={this.handleNewShopItemClick}/>
        </div>
            <Modal
              handleSuccessfulNewFormSubmission={
                this.handleSuccessfulNewFormSubmission
              }
              handleModalClose={this.handleModalClose}
              modalIsOpen={this.state.modalIsOpen}
            />
            <div className="shop_items">{this.renderShopItems()}</div>
          </div>
          <div className="shopping_cart">
            <ShoppingCart products={this.state.products} />
          </div>
        </div>
      );
    }
  }
}

export default Shop;
