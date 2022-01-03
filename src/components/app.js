import React, { Component } from 'react';

import { fab } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons';
import { faGithubSquare } from "@fortawesome/free-solid-svg-icons";


import Header from './header.js';
import Shop from './shop.js';
import Footer from './footer.js';

export default class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Shop/>
        <Footer/>
      </div>
    );
  }
}
