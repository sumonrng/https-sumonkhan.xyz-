import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Components/Navbar';
import ProductList from './Components/ProductList';
import Details from './Components/Details';
import Cart from './Components/Cart';
import Default from './Components/Default';
import Model from './Components/Model';

class App extends Component {
  render() {
    return (
            <>
              <Navbar/>
              <Switch>
                <Route exact path="/" component={ProductList}/>
                <Route path="/Details" component={Details}/>
                <Route path="/Cart" component={Cart}/>  
                <Route component={Default}/>             
              </Switch>
              <Model/>
            </>
    );
  }
}

export default App;
