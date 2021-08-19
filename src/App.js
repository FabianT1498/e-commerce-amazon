// @Flow
import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'

import PrivateRoute from '_utilities/privateRoute'
/* Provider */
import BasketProvider from '_context/basket/basketContext'
import AuthProvider from '_context/auth/authContext'
import ModalProvider from '_context/modal/modalContext'
/* Nav components */
import Header from '_components/organisms/header'
/* Home components */
import Home from '_components/organisms/home'
import Checkout from '_components/organisms/checkout'
import Payment from 'components/organisms/payment'
import Orders from 'components/organisms/orders'
/* import view from '_components/templates/default/styles.css' */
import Login from '_components/organisms/login'
import Register from '_components/organisms/register'
import NavFlyout from '_components/organisms/nav-flyout'

import './bootstrap'

const stripePromise = loadStripe(`pk_test_51JFLoFKWPiO9XVVqlwqjLDE2TZTf1JFFXOBcuE9oBhsBEW0c
  fiZPtAT1TgoWpUX2w4A4ZT1FGGRsWZf0zICvqCRv000szXGlsH`)

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <BasketProvider>
          <Switch>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
            <Route path="/">
              <ModalProvider>
                <Header />
                <NavFlyout />
              </ModalProvider>
              <PrivateRoute path="/orders">
                <Orders />
              </PrivateRoute>
              <PrivateRoute path="/checkout">
                <Checkout />
              </PrivateRoute>
              <PrivateRoute path="/payment">
                <Elements stripe={stripePromise}>
                  <Payment />
                </Elements>
              </PrivateRoute>
              <Route exact path="/">
                <Home />
              </Route>
            </Route>
          </Switch>
        </BasketProvider>
      </Router>
    </AuthProvider>
  )
}

export default App
