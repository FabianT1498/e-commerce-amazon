/* @flow */
import * as React from 'react'
import classnames from 'classnames'

import styles from './style.css'

export const LogoType = {
  HEADER: 'logo-header',
}

export const LogoSize = {
  SMALL: 'small',
  MEDIUM: 'medium',
  LARGE: 'large',
}

type Props = {
  type: string,
  size: string,
  className: string,
}

const Logo = (props: Props): React.Element<*> => {
  const { type, size, className } = props
  const classProps: string = classnames(
    styles[type],
    styles[size],
    className
  )

  return (
    <img
      className={classProps}
      src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
    />
  )
}

Logo.defaultProps = {
  type: LogoType.HEADER,
  size: LogoSize.SMALL,
  className: '',
}

export default Logo
