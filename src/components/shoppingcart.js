import React, { Component } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { ListViewComponent } from "@syncfusion/ej2-react-lists";
import { data } from "jquery";

class ShoppingCart extends Component {
  constructor(props) {
    super(props);

    this.listviewInstance = null;

    this.state = {
      title: "",
      price: 0,
      total:0
    };

    products = this.props.title
  }
 

  listTemplate(products) {
    return (
      <div className="cart-list">
        {this.state.title}
        {this.state.price}
        {this.state.total}
        <button
          className="deletebtn"
          type="button"
          onClick={() => deleteItem.bind(this)}
        >
          delete
        </button>
      </div>
    );
  }


   

  deleteItem(args) {
    args.stopPropagation();
    let liItem = args.target.closest("li");
    this.listviewInstance.removeItem(liItem);
  }

  render() {
    return (
      <div className="shopping-cart">
        <FontAwesomeIcon
          icon={faShoppingCart}
          onClick={() => this.listTemplate()}
        />
        <ul>{/*this.state.map(products)*/}
        </ul>
        Click Me!
      </div>
    );
  }
}

export default ShoppingCart;
