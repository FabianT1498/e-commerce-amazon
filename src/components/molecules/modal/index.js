import classnames from 'classnames'

import styles from './style.css'

const Modal = ({ top, left, handleClose, show, children }) => {
  const classProps: string = classnames(
    styles.modal,
    show ? styles['display-block'] : styles['display-none']
  )

  return (
    <div className={classProps}>
      <section style={{ top, left }} className={styles['modal-main']}>
        {children}
      </section>
    </div>
  )
}

export default Modal
