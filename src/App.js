// @Flow
import * as React from 'react'


import Header from '_components/organisms/header'
import Nav from '_components/molecules/nav'
import SearchForm from '_components/molecules/search-form'
import Logo from '_components/atoms/logo'

import view from '_components/templates/default/styles.css'

import './bootstrap'

const App = () => (

  /* Header */
  <Header>
    <Logo></Logo>
    <SearchForm></SearchForm>
    <Nav></Nav>
  </Header>
)

export default App