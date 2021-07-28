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

import Payment from 'components/organisms/payment'

import view from '_components/templates/default/styles.css'

import Login from '_components/organisms/login'
import Register from '_components/organisms/register'

import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

import './bootstrap'

const stripePromise = loadStripe(`pk_test_51JFLoFKWPiO9XVVqlwqjLDE2TZTf1JFFXOBcuE9oBhsBEW0c
  fiZPtAT1TgoWpUX2w4A4ZT1FGGRsWZf0zICvqCRv000szXGlsH`);

const App = () => {

  return (
    <AuthProvider>
      <Router>
        <BasketProvider>
          <Switch>
            <Route path="/orders">   
              <Header/>        
              <Orders/>
            </Route>
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
            <Route path="/payment">   
              <Header/>
              <Elements stripe={stripePromise}>
                <Payment/>
              </Elements>      
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