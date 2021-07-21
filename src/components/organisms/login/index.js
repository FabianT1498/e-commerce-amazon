// @Flow
import React from "react"
import classnames from 'classnames'

import { Link } from "react-router-dom";

import Logo from '_components/atoms/logo'
import Title from '_components/atoms/title'
import NavLink from '_components/atoms/nav-link'

import LoginForm from '_components/molecules/login-form'

import styles from './style.css'

type Props = {
  children?: React.Node,
  className?: string,
}

const Login = (props: Props): React.Element<*> => {
  
  return (
    <div className={styles.login}>
      <div className={styles['logo-container']}>  
        <Logo src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"/>
      </div>
      <div className={styles['form-container']}>
        <div className={styles.section}>
          <Title>Sign In</Title>
        </div>
        <div className={styles.section}>
          <LoginForm/>
        </div>
        <div className={styles.section}>
          <p className={styles.condition}>
            By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use & Sale. Please
            see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
          </p>
        </div>
        <NavLink size="small" width="full" theme="button" to="/register">Create your Amazon Account</NavLink>
      </div>
    </div>
  );
}

Login.defaultProps = {
  className: undefined,
  children: undefined,
}

export default Login
