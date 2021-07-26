// @Flow
import React, { useContext, useEffect, useState } from "react"
import classnames from 'classnames'
import { Link } from "react-router-dom";
import axios from "_app/axiosInstance";

import { BasketContext } from '_context/basket/basketContext'
import { AuthContext } from '_context/auth/authContext'

import PaymentForm from '_components/molecules/payment-form'
import CheckoutProduct from '_components/molecules/checkout-product'

import Title from '_components/atoms/title'
import Subtitle from '_components/atoms/subtitle'

import styles from './style.css'

type Props = {
  children?: React.Node,
  className?: string,
}

const Payment = (props: Props): React.Element<*> => {
  
  const { basket } = useContext(BasketContext)
  const { user } = useContext(AuthContext)

  const [clientSecret, setClientSecret] = useState(true);

  useEffect(() => {
    const getClientSecret = async () => {
      const response = await axios({
        method: 'post',
        url: `/payments/create?total=${getBasketTotal(basket) * 100}`
      });
      setClientSecret(response.data.clientSecret);
    }

    getClientSecret();
  }, [basket])

  return (
    <div className={styles.payment}>
      <div className={styles['payment-header']}>
        <Title>Checkout (<Link to="/checkout">{basket?.length} items</Link>)</Title>
      </div>
      <div className={styles['payment-body']}>
        <div className={styles.section}>
          <div>
            <Subtitle>Delivery Address</Subtitle>
          </div>
          <div>
            <p>{user?.email}</p>
            <p>123 React Lane</p>
            <p>Los Angeles, CA</p> 
          </div>
        </div>
        <div className={styles.section}>
          <div>
            <Subtitle>Review items and delivery</Subtitle>
          </div>
          <div className="items">
            { basket.map(item => (
                <CheckoutProduct
                  id={item.id}
                  price={item.price}
                  title={item.title}
                  rating={item.rating}
                  image={item.image}
                />
              ))
            }
          </div>
        </div>
        <div className={styles.section}>
          <div>
            <Subtitle>Payment Method</Subtitle>
          </div>
          <div>
            <div className={styles['form-container']}>
              <PaymentForm basket={basket} clientSecret={clientSecret}/>      
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

Payment.defaultProps = {
  className: undefined,
  children: undefined,
}

export default Payment
