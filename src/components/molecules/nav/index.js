/* @flow */
import React, { useContext } from 'react'
import classnames from 'classnames'
import { auth } from '_app/firebase'
import NavItem from '_components/atoms/nav-item'
import NavItemBasket from '_components/atoms/nav-item-basket'
import { AuthContext } from '_context/auth/authContext'

import styles from './style.css'

const Nav = (props: Props): React.Element<*> => {
  const { onMouseEnter, onMouseLeave } = props

  const { user } = useContext(AuthContext)

  const handleAuthentication = () => {
    if (user) {
      auth.signOut()
    }
  }

  return (
    <nav className={classnames(styles.nav)}>
      <NavItem
        to={!user && '/login'}
        linesText={[`Hello ${user ? user.email : 'Guest'}`, user ? 'Sign Out' : 'Sign In']}
        onClick={handleAuthentication}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      />
      <NavItem to="/orders" linesText={['Return', '& Orders']} />
      <NavItem to="/account" linesText={['Your', 'Prime']} />
      <NavItemBasket to="/checkout" />
    </nav>
  )
}

export default Nav
