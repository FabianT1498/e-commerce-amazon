/* @flow */
import * as React from 'react'

import styles from './style.css'

import classnames from 'classnames'

console.log(styles);

const NavItem = (props: Props): React.Element<*> => {
  const { linesText, children, className } = props

  return (
    <a className={styles.item} href="#">
      <div>
        {linesText[0]}
      </div>
      <div>
        <span className={styles['line-two']}>{linesText[1]}</span>
      </div>
    </a>
  )
}

export default NavItem
