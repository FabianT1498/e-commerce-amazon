// @Flow
import {Component, Fragment} from 'react'

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

/* Provider */
import BasketProvider from '_context/basket/basketContext'

/* Nav components */
import Header from '_components/organisms/header'

/* Home components */
import Home from '_components/organisms/home'

import Checkout from '_components/organisms/checkout'

import view from '_components/templates/default/styles.css'

import Login from '_components/organisms/login'

import './bootstrap'

const App = () => (

  <Router>
    <BasketProvider>
      <Switch>
        <Route path="/login">          
          <Login></Login>
        </Route>
        <Route path="/checkout">   
          <Header/>       
          <Checkout/>    
        </Route>        
        <Route path="/">
          <Header/>          
          <Home/>    
        </Route>      
      </Switch>    
    </BasketProvider>
  </Router>
  
)

export default App