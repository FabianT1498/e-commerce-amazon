// @Flow
import React, { useState } from 'react'
import classnames from 'classnames'

import { Link } from "react-router-dom";


import styles from './style.css'

import Nav from '_components/molecules/nav'
import SearchForm from '_components/molecules/search-form'
import Logo from '_components/atoms/logo'

import Modal from '_components/molecules/modal'

type Props = {
  children?: React.Node,
  className?: string,
}

const Header = (props: Props): React.Element<*> => {

  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <header className={classnames(styles.header, props.className)}>
        <div className={styles['logo-container']}>
          <Logo src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"/>
        </div>
        <SearchForm></SearchForm>
        <Nav 
          onMouseEnter={() => setShowModal(true)}
          onMouseLeave={() => setShowModal(false)}
        />
      </header>
      <div className={styles['nav-flyout-anchor']}>
        <Modal top={"-6.5px"} left={"300px"} show={showModal}>Hola mundo</Modal>
      </div>
    </>
  )
}

Header.defaultProps = {
  className: undefined,
  children: undefined,
}

export default Header
