/* @flow */
import React, { useContext } from 'react'
import classnames from 'classnames'

import { ModalContext } from '_context/modal/modalContext'

import styles from './style.css'

type Props = {
  top: string,
  left: string,
}

const Modal = (props: Props) => {
  const { top, left } = props
  const classProps: string = classnames(styles.modal)
  const { dispatch } = useContext(ModalContext)

  const handleOnMouseEnter = () => dispatch({ type: 'SET_IS_HOVER', isHovered: true })
  const handleOnMouseLeave = () => {
    dispatch({ type: 'SET_IS_HOVER', isHovered: false })
    dispatch({
      type: 'REMOVE_MODAL',
    })
  }

  return (
    <div className={classProps}>
      <section
        style={{ top, left }}
        className={styles['modal-main']}
        onMouseEnter={handleOnMouseEnter}
        onMouseLeave={handleOnMouseLeave}
      >
        Modal
      </section>
    </div>
  )
}

export default Modal
