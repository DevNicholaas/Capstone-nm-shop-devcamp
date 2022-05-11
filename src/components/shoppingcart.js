import React, { Component } from "react";

import { Card, Elevation, Button } from '@blueprintjs/core'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

class ShoppingCart extends Component {
  constructor(props) {
    super(props);


    this.state = {
    products: [],
    };

    this.renderProducts = this.renderProducts.bind(this)
    this.handleRemoveProducts = this.handleRemoveProducts.bind(this)
      
  }






renderProducts(){
    const products = this.props.products
    const counts = {};

    products.forEach(function (x) { counts[x.title] = (counts[x.title] || 0) + 1; });
    let newProduct=Object.entries(counts).map(([key, value]) => {

   
    return <div key="{item}" >
  
    {key} x {value.toString()}
  
    <Button intent="remove" text='Delete' onClick={(e) => this.handleRemoveProducts(key, value)}/>
</div>
  });
  return newProduct
} 

handleRemoveProducts (key, value) {
  const products = this.props.products
  if (value > 1) {
    console.log("something")
    let newValue = value - 1
    this.setState({
      value: newValue
    })

  } 
  
  if (value = 1) {
    products.pop()
    this.setState({
      products: this.state.products.filter( product => {
        return products.id !== product.id
      })
    })
  }

}

componentWillUnmount () {
  console.log("unmounted", this.state.products)
}



  render() {
    return (
      <Card interactive={true} elevation={Elevation.THREE}>
      <div className="shopping-cart">
        <FontAwesomeIcon
          icon={faShoppingCart}
          onClick={() => this.renderProducts()}
        />
        <h3>List</h3>
        <ul>
        {this.renderProducts()}
        </ul>
      </div>
      </Card>
    );
  }
}

export default ShoppingCart;
