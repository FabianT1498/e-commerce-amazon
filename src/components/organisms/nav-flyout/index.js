/* @flow */
import React, { useContext } from 'react'
import classnames from 'classnames'

import { ModalContext } from '_context/modal/modalContext'

import styles from './style.css'

const NavFlyout = (): React.Element<*> => {
  const { modal } = useContext(ModalContext)

  const { component: Component, props } = modal

  return (
    <div className={classnames(styles['nav-flyout'])}>
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      {Component ? <Component {...props} /> : null}
    </div>
  )
}

export default NavFlyout
