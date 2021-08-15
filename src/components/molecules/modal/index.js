import styles from './style.css';

import classnames from 'classnames'


const Modal = ({ top, left, handleClose, show, children }) => {

    const classProps: string = classnames(
        styles.modal,
        show ? styles['display-block'] : styles['display-none']
    )

    return (
        <div className={classProps}>
            <section style={{top: top, left: left}} className={styles['modal-main']}>
                {children}
            </section>
        </div>
    );
};

export default Modal