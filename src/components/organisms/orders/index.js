// @Flow
import React from "react"

import Title from '_components/atoms/title'
import Subtitle from '_components/atoms/subtitle'

import styles from './style.css'

type Props = {
  children?: React.Node,
  className?: string,
}

const Orders = (props: Props): React.Element<*> => {
  
  return (
    <div className={styles.orders}>
      <Title>Your orders</Title>
    </div>
  );
}

Orders.defaultProps = {
  className: undefined,
  children: undefined,
}

export default Orders
