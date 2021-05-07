// @Flow
import * as React from 'react'
import classnames from 'classnames'

import styles from './style.css'

type Props = {
  children?: React.Node,
  className?: string,
}

const Header = (props: Props): React.Element<*> => (
  <div className={classnames(styles.header, props.className)}>
    {props.children}
  </div>
)

Header.defaultProps = {
  className: undefined,
  children: undefined,
}

export default Header
