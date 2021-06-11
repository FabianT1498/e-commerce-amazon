// @Flow
import * as React from 'react'
import classnames from 'classnames'

import { Link } from "react-router-dom";


import styles from './style.css'

import Nav from '_components/molecules/nav'
import SearchForm from '_components/molecules/search-form'
import Logo from '_components/atoms/logo'

type Props = {
  children?: React.Node,
  className?: string,
}

const Header = (props: Props): React.Element<*> => (
  <header className={classnames(styles.header, props.className)}>
    <Link to="/">
      <Logo src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"></Logo>
    </Link>
    <SearchForm></SearchForm>
    <Nav></Nav>
  </header>
)

Header.defaultProps = {
  className: undefined,
  children: undefined,
}

export default Header
