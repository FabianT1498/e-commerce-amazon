import React, { useContext } from "react"
import styles from './style.css';

import { BasketContext } from '_context/basket/basketContext'

import classnames from 'classnames'

import Subtitle from '_components/atoms/subtitle'
import Image from '_components/atoms/image'
import Button from '_components/atoms/button'


const Product = (props: Props): React.Element<*> => {

    const { id, title, image, rating, price} = props;

    const { dispatch } = useContext(BasketContext)

    const addToBasket = () => {

        // Dispatch some item into the data layer
        dispatch({ 
            type: "ADD_PRODUCT",
            item: {
                id,
                title,
                image,
                price,
                rating
            }
        })
    }

    return (
        <div className={classnames(props.className, styles.product)}>
            <div className={styles.section}>
                <Image 
                    src={image}
                    size="big"
                    type="product"
                />
            </div>
            <div className={styles.section}>
                <Subtitle>
                    <a className={styles.link} href="#">{title}</a> 
                </Subtitle>
            </div>
            <div className={styles.section}>
                <Button onClick={addToBasket} size="small" theme="product">Add to car</Button>
            </div>
        </div>
    );
}

export default Product;

