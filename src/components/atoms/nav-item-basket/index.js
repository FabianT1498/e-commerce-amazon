/* @flow */
import React, { useContext } from "react"

import { Link } from "react-router-dom";

import styles from './style.css'

import { BasketContext } from '_context/basket/basketContext'

import classnames from 'classnames'

import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';

const NavItemBasket = (props: Props): React.Element<*> => {
  const { to, children, className } = props

  const { basket } = useContext(BasketContext)

  return (
    <Link className={styles.item} to={to}>
      <ShoppingBasketIcon></ShoppingBasketIcon>
      <span className={styles.counter}>{basket?.length}</span>
    </Link>
  )
}

export default NavItemBasket
