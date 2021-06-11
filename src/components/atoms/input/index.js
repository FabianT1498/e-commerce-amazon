/* @flow */
import * as React from 'react'
import classnames from 'classnames'

import styles from './style.css'

export const InputType = {
  TEXT: 'text',
}

export const InputTheme = {
  DEFAULT: 'default',
  ROUNDED: 'rounded',
}

export const InputSize = {
  SMALL: 'small',
  MEDIUM: 'medium',
  LARGE: 'large',
}

type Props = {
  type: string,
  theme: string,
  size: string,
  children: React.Node,
  className: string,
}

const Input = (props: Props): React.Element<*> => {
  const { type, children, theme, size, name, className } = props
  const classProps: string = classnames(
    styles.input,
    styles[theme],
    styles[size],
    className
  )

  return (
    <input type={type} name={name} className={classProps}></input>
  )
}

Input.defaultProps = {
  type: InputType.TEXT,
  theme: InputTheme.DEFAULT,
  size: InputSize.MEDIUM,
  className: '',
}

export default Input
