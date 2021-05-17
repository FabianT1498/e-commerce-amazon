/* @flow */
import * as React from 'react'

import styles from './style.css'

import classnames from 'classnames'

import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';

const NavItemBasket = (props: Props): React.Element<*> => {
  const { children, className } = props

  return (
    <a className={styles.item} href="#">
      <ShoppingBasketIcon></ShoppingBasketIcon>
      <span className={styles.counter}>0</span>
    </a>
  )
}

export default NavItemBasket
