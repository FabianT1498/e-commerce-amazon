/* @flow */
import * as React from 'react'

import styles from './style.css'

import { Link } from "react-router-dom";

import classnames from 'classnames'

type Props = {
  to: string,
  linesText: string[],
  onClick: Function,
  className: string,
}

const NavItem = (props: Props): React.Element<*> => {
  const { linesText, to, onClick, children, className } = props

  return (
    <Link to={to} className={styles.item} onClick={onClick}>
      <div>
        {linesText[0]}
      </div>
      <div>
        <span className={styles['line-two']}>{linesText[1]}</span>
      </div>
    </Link>
  )
}

NavItem.defaultProps = {
  to: '/',
  linesText: [],
  onClick: () => {},
  className: '',
}

export default NavItem
