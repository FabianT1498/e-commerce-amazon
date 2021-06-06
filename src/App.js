// @Flow
import {Component, Fragment} from 'react'

import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

/* Provider */
import BasketProvider from '_context/basket/basketContext'

/* Nav components */
import Header from '_components/organisms/header'
import Nav from '_components/molecules/nav'
import SearchForm from '_components/molecules/search-form'
import Logo from '_components/atoms/logo'

/* Home components */
import Home from '_components/organisms/home'

import Checkout from '_components/organisms/checkout'

import view from '_components/templates/default/styles.css'

import './bootstrap'

const App = () => (

  <Router>
    <BasketProvider>
      <Header>
        <Link to="/">
          <Logo></Logo>
        </Link>
        <SearchForm></SearchForm>
        <Nav></Nav>
      </Header>
    
      <Switch>
        <Route path="/login">          
          <h1>Login page</h1>   
        </Route>
        <Route path="/checkout">          
          <Checkout/>    
        </Route>        
        <Route path="/">          
          <Home/>    
        </Route>      
      </Switch>    
    </BasketProvider>
  </Router>
  
)

export default App