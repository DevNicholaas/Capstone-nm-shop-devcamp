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

   
    
    /*let newProduct = counts.map(item => (
      console.log("item map", item), productInCart = false,
    
        <div className="shopping_list" key={item.id}>
            {item.title}, {item.price} 
          
            <Button intent="remove" text='Delete' onClick={(e) => this.handleRemoveProducts(e, item)}/>
        </div>)
    )*/
    return <div>
    {console.log("item", key, value)}
    {key} x {value.toString()}
  
    <Button intent="remove" text='Delete' onClick={(e) => this.handleRemoveProducts(e, item)}/>
</div>
  });
  return newProduct
} 

handleRemoveProducts (e, item) {

  const products = this.state.products
  //this.state.products.map()
  console.log("inside delete",products,"item", item)
  const newCartItems = products.map(a => a.id !== item.id)
  console.log(newCartItems)
  this.setState({
    products: newCartItems
  })
 
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
