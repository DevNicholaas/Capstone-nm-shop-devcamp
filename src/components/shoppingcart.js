import React, { Component } from "react";

import { Card, Elevation, Button } from '@blueprintjs/core'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
//import { ListViewComponent } from "@syncfusion/ej2-react-lists";

class ShoppingCart extends Component {
  constructor(props) {
    super(props);


    this.state = {
    products: [],
    };

    this.renderProducts = this.renderProducts.bind(this)
    this.handleRemoveProducts = this.handleRemoveProducts.bind(this)
      
  }


 /* componentDidUpdate(nextProps, nextState) {
    if (nextState.products.push(nextProps)) {
      return true;
    }


}*/

/*componentDidUpdate () {
  if (this.shouldComponentUpdate ==true){
  this.setState({
    products: products
  }); return console.log("Updated")
  }
}*/




renderProducts(){
    const products = this.props.products
    //this.state.products.map()
    console.log("render produ",products)
    //products you only need to count if we have duplicate data , autoincrement the value
    let productInCart = false;

    const counts = {};

    products.forEach(function (x) { counts[x.title] = (counts[x.title] || 0) + 1; });
    console.log(counts)
    let newProduct=Object.entries(counts).map(([key, value]) => {

   
    return <div>
    {console.log("item", key, value)}
    {key} x {value.toString()}
  
    <Button intent="remove" text='Delete' onClick={(e) => this.handleRemoveProducts(key, value)}/>
</div>
  });
  return newProduct
} 

handleRemoveProducts (key, value) {
  const products = this.props.products

  const counts = {};

  if (counts = 0) {
    console.log('empty counter')
  }

  products.forEach(function (x) { counts[x.title] = (counts[x.title] || 0) - 1; });
  console.log(counts)
  let newProduct=Object.entries(counts).map(([key, value]) => {


  return <div>
  {console.log("item", key, value)}
  {key} x {value.toString()}
</div>
});
return newProduct
 
}
componentWillUnmount () {
  console.log("unmounted", this.state.products)
}



  render() {
    console.log("current data",this.state.products)
    return (
      <Card interactive={true} elevation={Elevation.THREE}>
      <div className="shopping-cart">
        <FontAwesomeIcon
          icon={faShoppingCart}
          onClick={() => this.renderProducts()}
        />
        <h3>List</h3>
        <ul>{console.log("render state", this.state)}
        {this.renderProducts()}
        </ul>
      </div>
      </Card>
    );
  }
}

export default ShoppingCart;
