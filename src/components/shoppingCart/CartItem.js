import React from 'react';
import { CancelOutlined, KeyboardArrowDown, KeyboardArrowUp } from '@mui/icons-material';
import { CardMedia, IconButton, Typography } from '@mui/material';
import styles from './CartItemStyle.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { red } from '@mui/material/colors';
function CartItem({product, setTotalPriceOfAllItemsInCart}) {
    const totalPrice = product.unitPrice * product.addedInCart;
    const redeem = Math.ceil(product.unitPrice * product.addedInCart * product.discount / 100);
    const offerPrice = totalPrice - redeem;
    const url2 =
        "https://chaldn.com/_mpimage/date-crown-lulu-dates-400-gm?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D129300&q=best&v=1&m=400&webp=1";
    return (
        <div className={styles.cartitemcontainer}>
            <div className={styles.addremovebutton}>
                <div className={styles.uparrow}>
                    <KeyboardArrowUp fontSize='small' />
                </div>
                <div className={styles.productincart}>
                    <Typography>
                        {
                            product.addedInCart
                        }
                    </Typography>
                </div>
                <div className={styles.downarrow}>
                    <KeyboardArrowDown fontSize='small' />
                </div>
            </div>
            <div className={styles.productdetails}>
                <div className={styles.imageDetaisWrapper}>
                    <div className={styles.imagecontainer}>
                        <CardMedia
                            component="img"
                            height="65px"
                            image={product.productImage}
                            alt="prodcut"
                            className="product-image"
                        />
                    </div>
                    <div className={styles.titlepricecontainer}>
                        <div className={styles.title}> {product.productName} </div>
                        <div className={styles.priceweight}>
                            <FontAwesomeIcon
                                className='delivery-taka-icon' icon="fa-solid fa-bangladeshi-taka-sign" />
                            <span >{`${product.unitPrice}/ ${product.weight}`}</span>
                        </div>
                    </div>
                </div>
                <div>
                    <div className={styles.priceweight}>
                        <FontAwesomeIcon
                            className='delivery-taka-icon' icon="fa-solid fa-bangladeshi-taka-sign" />
                        <span style={{color: "red"}}>{offerPrice}</span>
                    </div>
                    <div className={styles.priceweight}>
                        <FontAwesomeIcon
                            className='delivery-taka-icon' icon="fa-solid fa-bangladeshi-taka-sign" />
                        <span style={{textDecoration:"line-through"}}>{totalPrice}</span>
                    </div>
                </div>
            </div>
            <div className={styles.cancel}>
                <IconButton>
                    <CancelOutlined />
                </IconButton>
            </div>
        </div>
    )
}

export default CartItem