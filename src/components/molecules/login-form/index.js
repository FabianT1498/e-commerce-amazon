/* @flow */
import * as React from 'react'
import classnames from 'classnames'

import Input from '_components/atoms/input'
import Button from '_components/atoms/button'

import styles from './style.css';

type Props = {
  children?: React.Node,
  className?: string,
}

export const LoginFormTheme = {
  DEFAULT: 'default',
}

const LoginForm = (props: Props): React.Element<*> => {

  const { children, theme, className } = props;

  const classProps: string = classnames(
    styles.search,
    styles[theme],
    className
  )

  return (
    <form className={styles['form']} action="">
      <div className={styles.section}>
        <label for="email">Email</label>
        <Input theme="login" size="full" name="email"/>
      </div>

      <div className={styles.section}>
        <label for="password">Password</label>
        <Input theme="login" size="full" type="password" name="password"/>
      </div>

      <Button size="small" width="full" theme="product">
        Sign In
      </Button>
    </form>
  )
}

LoginForm.defaultProps = {
  theme: LoginFormTheme.DEFAULT,
  className: '',
  children: '',
}

export default LoginForm
