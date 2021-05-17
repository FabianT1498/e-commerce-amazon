/* @flow */
import * as React from 'react'
import classnames from 'classnames'

import styles from './style.css';

import NavItem from '_components/atoms/nav-item';
import NavItemBasket from '_components/atoms/nav-item-basket';

const Nav = (props: Props): React.Element<*> => {

  return (
    <nav className={classnames(styles.nav)}>
      <NavItem linesText={['Hello Guest', 'Sign In']}></NavItem>
      <NavItem linesText={['Return', '& Orders']}></NavItem>
      <NavItem linesText={['Your', 'Prime']}></NavItem>
      <NavItemBasket></NavItemBasket>
      {/* <a href="#">
        <div className="nav-line-1-container">
          <span id="nav-link-accountList-nav-line-1" className="nav-line-1 nav-progressive-content">Hello, Sign in</span>
        </div>
        <span className="nav-line-2 nav-long-width">Account &amp; Lists
          <span className="nav-icon nav-arrow null"></span>
        </span>
      </a>

                  
      <a href="/gp/css/order-history?ref_=nav_orders_first" className="nav-a nav-a-2   nav-progressive-attribute" id="nav-orders" tabindex="0">
        <span className="nav-line-1">Returns</span>
        <span className="nav-line-2">&amp; Orders</span>
      </a>
            
      <a href="/gp/cart/view.html?ref_=nav_cart" aria-label="0 items in cart" className="nav-a nav-a-2 nav-progressive-attribute" id="nav-cart">
        <div id="nav-cart-count-container">
          <span id="nav-cart-count" aria-hidden="true" className="nav-cart-count nav-cart-0 nav-progressive-attribute nav-progressive-content">0</span>
          <span className="nav-cart-icon nav-sprite"></span>
        </div>
        <div id="nav-cart-text-container" className=" nav-progressive-attribute">
          <span aria-hidden="true" className="nav-line-1">
            
          </span>
          <span aria-hidden="true" className="nav-line-2">
            Cart
            <span className="nav-icon nav-arrow"></span>
          </span>
        </div>
      </a> */}
    </nav>
  )
}

export default Nav