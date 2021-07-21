/* @flow */
import React, { useContext } from "react"
import classnames from 'classnames'

import styles from './style.css';

import { auth } from '_app/firebase'

import NavItem from '_components/atoms/nav-item';
import NavItemBasket from '_components/atoms/nav-item-basket';

import { AuthContext } from '_context/auth/authContext'

const Nav = (props: Props): React.Element<*> => {

  const { user } = useContext(AuthContext)

  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  }

  return (
    <nav className={classnames(styles.nav)}>
      <NavItem to={!user && '/login'} linesText={[`Hello ${user ? user.email : 'Guest'}`, user ? 'Sign Out':'Sign In']} onClick={handleAuthentication}></NavItem>   
      <NavItem to="/orders" linesText={['Return', '& Orders']}></NavItem>
      <NavItem to="/account" linesText={['Your', 'Prime']}></NavItem>
      <NavItemBasket to="/checkout"></NavItemBasket>      
    </nav>
  )
}

export default Nav