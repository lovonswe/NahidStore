import React from 'react';
import styled from '@emotion/styled';
import { IconButton, Typography } from '@mui/material';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import { useShoppingCartStore } from '../../store/FlagStore';
import { usecartItemCountStore } from '../../store/ProductStore';

const CartMiniContainer = styled.div`
    z-index: 95;
    // border: 1px solid red;
    position: fixed;
    width: 65px;
    height: 75px;
    right: 0;
    top: calc(110px + 30%);
    box-shadow: .5px 0px 10px 1px rgba(0,0,0,.75);
    transition: .1s ease-in-out;
    opacity: 0.8;
    cursor: pointer;
`
function CartMini() {
    const {updateShoppingCartStatus} = useShoppingCartStore();
    const {itemsInCart} = usecartItemCountStore();
    const handleShopingCart = ()=> {
        updateShoppingCartStatus(true);
        console.log("cart mini clicked");
    }
    return (
        <CartMiniContainer className='cart-mini' onClick={handleShopingCart}>
            <div className='item-count' style={{backgroundColor: "#f5fceb", textAlign: "center"}}>
                <IconButton sx={{color: "red"}}>
                    <ShoppingBagIcon fontSize='medium' />
                </IconButton>
            </div>
            <div>
            <Typography className='counter' style={{fontSize: "15px", textAlign: "center"}}>
                        {
                            itemsInCart
                        } items
                    </Typography>
            </div>
        </CartMiniContainer>
    )
}

export default CartMini