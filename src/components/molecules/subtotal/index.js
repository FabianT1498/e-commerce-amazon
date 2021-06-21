/* @flow */
import React, { useContext } from "react"
import classnames from 'classnames'

import { BasketContext } from '_context/basket/basketContext'
import { getBasketTotal } from '_context/basket/reducer'

import CurrencyFormat from 'react-currency-format'

import styles from './style.css';

import Button from '_components/atoms/button'

type Props = {
  children?: React.Node,
  className?: string,
}

export const SubtotalTheme = {
  DEFAULT: 'default',
}

const Subtotal = (props: Props): React.Element<*> => {

  const { children, theme, className } = props;

  const classProps: string = classnames(
    styles.subtotal,
    styles[theme],
    className
  )

  const { basket } = useContext(BasketContext)

  return (
    <div className={classProps}>
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket?.length} items): <strong>{value}</strong>
            </p>
            <small className={styles.gift}>
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={'text'}
        thousandSeparator={true}
        prefix={'$'}
      />

      <Button size="small" theme="product">Proceed to checkout</Button>
    </div>
  )
}

Subtotal.defaultProps = {
  theme: SubtotalTheme.DEFAULT,
  className: '',
  children: '',
}

export default Subtotal