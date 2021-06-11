/* @flow */
import * as React from 'react'

import styles from './style.css'

import { Link } from "react-router-dom";

import classnames from 'classnames'

console.log(styles);

const NavItem = (props: Props): React.Element<*> => {
  const { linesText, to, children, className } = props

  return (
    <Link to={to} className={styles.item}>
      <div>
        {linesText[0]}
      </div>
      <div>
        <span className={styles['line-two']}>{linesText[1]}</span>
      </div>
    </Link>
  )
}

export default NavItem
