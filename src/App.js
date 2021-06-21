// @Flow
import {Component, Fragment, useEffect} from 'react'

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

/* Provider */
import BasketProvider from '_context/basket/basketContext'
import AuthProvider from '_context/auth/authContext'

/* Nav components */
import Header from '_components/organisms/header'

/* Home components */
import Home from '_components/organisms/home'

import Checkout from '_components/organisms/checkout'

import view from '_components/templates/default/styles.css'

import Login from '_components/organisms/login'
import Register from '_components/organisms/register'

import './bootstrap'

const App = () => {

  return (
    <AuthProvider>
      <Router>
        <BasketProvider>
          <Switch>
            <Route path="/login">          
              <Login/>
            </Route>
            <Route path="/register">          
              <Register/>
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
    </AuthProvider>
  )
}

export default App