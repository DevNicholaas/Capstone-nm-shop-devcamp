import React, { Component } from "react";

import { Card, Elevation, Button } from '@blueprintjs/core'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { ListViewComponent } from "@syncfusion/ej2-react-lists";

class ShoppingCart extends Component {
  constructor(props) {
    super(props);


    this.state = {
    products: []
    };
      
  }



renderProducts(){
    const products = this.props
    console.log("->",products.products)
    let shoppingList = products.products.map(item => (
        <div className="shopping_list" key={item.id}>
            {item.title}, {item.price}
            <Button intent="remove" text='Delete' onClick={(e) => this.handleRemoveProducts(e, item)}/>
        </div>)
    )
    return shoppingList;

}

handleRemoveProducts (e, item) {
  this.setState(state => {
  let products = this.props
  const newCartItems = products.products.filter(a => a.id !== item.id)
  return {newCartItems: newCartItems}, console.log(newCartItems)}) 
}



  render() {
    return (
      <Card interactive={true} elevation={Elevation.THREE}>
      <div className="shopping-cart">
        <FontAwesomeIcon
          icon={faShoppingCart}
          onClick={() => this.renderProducts()}
        />
        <h3>Cart</h3>
        <ul>
        {this.renderProducts()}
        </ul>
      </div>
      </Card>
    );
  }
}

export default ShoppingCart;
