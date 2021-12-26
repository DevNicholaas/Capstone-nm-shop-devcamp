import React, {Component} from 'react';
import ShoppingCart from './shoppingcart'
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons';



class Shop extends Component {

    constructor (props) {
        super (props)

        this.state = {
            items: [],
            loading: true,
            error:false,
            products:[],

        }
    }

    _isMounted = false;

    componentDidMount () {
        this._isMounted = true;

        fetch('https://nm-shop-db-devcamp.herokuapp.com/shops')
        .then(response => response.json())
        .then(data => {
            if (this._isMounted) {
            this.setState({
                items: data,
                loading: false
            })
            }
        })
        .catch(error => {
            console.log("Error getting items", error)

            this.setState({
                error: true,
                loading: false
            })
        })
    }


    renderShopItems () {
        const itemsHtml = this.state.items.map(item => (
            <div className='shop_items' key={item.id}>
                <img width='100px' height="100px" src={`data:img/jpeg;base64,${item.img}`}></img>
                <h2>{item.title}</h2>
                <h4>{item.description}</h4>
                <p>{`$`}{item.price}</p>
                <button type='button' value='Add' onClick={() => this.handleAddToCart(item)}>Add to cart</button>
            </div>
        ))
        return itemsHtml
    }

    handleAddToCart (item) {
        console.log("list ", this.state.products)
        this.setState({
            products:[...this.state.products, item]
            
        }
        )

     
   
    {/*let item = {
        title: `${item.title}`, price: {item.price}
    }*/}
    }

    componentWillUnmount () {
        this._isMounted = false;
        }

    render () {
        if (this.state.loading) {
            return <div className='loading'>
                Loading
            </div>
        }

        else if (this.state.error) {
            return <div className='error'>
                Error occured
            </div>
        }

        else {
        
        return (
            <div className='shop'>
                <a url='link.com'>
                    link
                    </a>
                <div className='shop_items_wrapper'>
                    <div className='shop_items'>
                        {this.renderShopItems()}
                        
                    </div>
                </div>
                <div className='shopping-cart'>
                     <ShoppingCart products={this.props.products}/>
                </div>
            </div>
            )
        }
    } 
}


export default Shop;