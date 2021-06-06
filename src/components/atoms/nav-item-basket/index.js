/* @flow */
import React, { useContext } from "react"

import styles from './style.css'

import { BasketContext } from '_context/basket/basketContext'

import classnames from 'classnames'

import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';

const NavItemBasket = (props: Props): React.Element<*> => {
  const { children, className } = props

  const { basket } = useContext(BasketContext)

  return (
    <a className={styles.item} href="#">
      <ShoppingBasketIcon></ShoppingBasketIcon>
      <span className={styles.counter}>{basket?.length}</span>
    </a>
  )
}

export default NavItemBasket
