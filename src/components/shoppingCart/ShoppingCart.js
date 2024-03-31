import React, { useEffect, useState } from "react";
import "./ShoppingCart.scss";
import { IconButton, Typography } from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import CartItem from "./CartItem";
import { useShoppingCartStore } from "../../store/FlagStore";
import { usecartItemCountStore, usetotalPriceOfProductsInCart } from "../../store/ProductStore";
import { useProductStore } from "../../store/ProductStore";
import { useNavigate } from "react-router-dom";

function ShoppingCart() {
  const [totalPriceOfAllItemsInCart, setTotalPriceOfAllItemsInCart] =
    useState(0);
  const { updateTotalPrice } = usetotalPriceOfProductsInCart();
  const { open, updateShoppingCartStatus } = useShoppingCartStore();
  const { itemsInCart } = usecartItemCountStore();
  const { products } = useProductStore();
  const navigate = useNavigate();
  const cartImage =
    "https://chaldn.com/asset/Egg.ChaldalWeb.Fabric/Egg.ChaldalWeb1/1.0.0-Deploy-Release-450/Default/components/header/ShoppingCart/images/emptyShoppingBag.png?q=low&webp=1&alpha=1";

  const closeShoppingCart = () => {
    updateShoppingCartStatus(false);
  };

  const placeOrder = () => {
    navigate('place-order');
  }

  useEffect(() => {
    setTotalPriceOfAllItemsInCart(
      products
        .filter((product) => (product.addedInCart > 0 ? true : false))
        .reduce((curr, cum) => {
          const totalPrice = cum.addedInCart * cum.unitPrice;
          const redeem = Math.ceil((totalPrice * cum.discount) / 100);
          const offerPrice = totalPrice - redeem;
          return curr + offerPrice;
        }, 0)
    );
  });
  useEffect(()=> {
    updateTotalPrice(totalPriceOfAllItemsInCart)
  }, [totalPriceOfAllItemsInCart]);
  return (
    <div
      className="shopping-cart"
      style={
        open
          ? { transform: "translateX(0%)" }
          : { transform: "translateX(100%)" }
      }
    >
      <div className="header">
        <div className="item-count">
          <IconButton>
            <ShoppingBagIcon fontSize="medium" />
            <Typography className="counter">{itemsInCart} items</Typography>
          </IconButton>
        </div>
        <div className="cart-close-button">
          <IconButton className="_close" onClick={closeShoppingCart}>
            <Typography>Close</Typography>
          </IconButton>
        </div>
      </div>
      <div
        className="delivery-charge-info"
        style={
          itemsInCart > 0
            ? { backgroundColor: "#104a0285" }
            : { backgroundColor: "#aaa" }
        }
      >
        {itemsInCart <= 0 ? (
          <div className="charge-message">
            {`Shop ৳400 more and save ৳10 fee`}
          </div>
        ) : (
          <div className="charge-message-no-discount">
            {`You have reduced delivery charge`}
          </div>
        )}
        <div className="info-item-container">
          <IconButton sx={{ color: "white" }}>
            <FontAwesomeIcon
              className="delivery-taka-icon"
              icon="fa-solid fa-bangladeshi-taka-sign"
            />
            <Typography>{itemsInCart > 0 ? `39` : `49`}</Typography>
            <InfoIcon fontSize="small" />
          </IconButton>
        </div>
      </div>
      <div
        className="item-container"
        style={itemsInCart <= 0 ? { justifyContent: "center" } : null}
      >
        {itemsInCart > 0 ? (
          products
            .filter((product) => {
              return product.addedInCart > 0 ? true : false;
            })
            .map((product, index) => {
              return (
                <CartItem
                  product={product}
                  setTotalPriceOfAllItemsInCart={setTotalPriceOfAllItemsInCart}
                />
              );
            })
        ) : (
          <>
            <div>
              <img src={cartImage} />
            </div>
            <div style={{ textAlign: "center" }}>
              Your shopping bag is empty. Start shopping
            </div>
          </>
        )}
        {/* <>
                    <div>
                        <img src={cartImage} />
                    </div>
                    <div>
                        Your shopping bag is empty. Start shopping
                    </div>
                </> */}
        {/* <CartItem /> */}
      </div>
      <div className="footer">
        {itemsInCart <= 0 ? (
          <div className="hotline">Hotline : 16710</div>
        ) : (
          <div className="place-order-container-wrapper">
            <div className="place-order-container">

              <div className="place-order"
                onClick={placeOrder}
              >Place Order</div>

              <div className="order-price">
                <FontAwesomeIcon
                  className="delivery-taka-icon"
                  icon="fa-solid fa-bangladeshi-taka-sign"
                />
                {totalPriceOfAllItemsInCart}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default ShoppingCart;
