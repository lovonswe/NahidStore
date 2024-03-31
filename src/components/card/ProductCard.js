import React, { useEffect, useState } from "react";
import "../../style/ProductCardStyle.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
  Button,
} from "@mui/material";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import RemoveCircleOutlineOutlinedIcon from "@mui/icons-material/RemoveCircleOutlineOutlined";
import RemoveOutlinedIcon from "@mui/icons-material/RemoveOutlined";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import IconButton from "@mui/material/IconButton";
import { useProductStore } from "../../store/ProductStore";
import TransitionsModal from "../modal/TransitionsModel";
import { usecartItemCountStore } from "../../store/ProductStore";


const cardContainer = {
  height: "300px",
  width: "200px",
  boxShadow: "3px 3px 16px 7px rgba(128, 122, 124, 0.35)",
};

function ProductCard({ product }) {
  const [cartCount, setCartCount] = useState(product.addedInCart);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { products, updateProduct } = useProductStore();
  const { itemsInCart, updateCount } = usecartItemCountStore();

  const increaseCartCount = (e) => {
    setCartCount((curr) => {
      const newProduct = { ...product, addedInCart: curr + 1 };
      updateProduct(newProduct);
      if (curr === 0) {
        updateCount(itemsInCart + 1);
      }
      return curr + 1;
    });
  };
  const decreaseCartCount = (event) => {
    event.stopPropagation();
    setCartCount((curr) => {

      const newProduct = { ...product, addedInCart: curr - 1 };
      updateProduct(newProduct);
      if (curr === 1) {
        updateCount(itemsInCart - 1);
      }
      return curr - 1;
    });

    
    // setCartCount((curr) => curr - 1);
    // const clickedElement = e.target;
    // if (clickedElement.classList.contains('remove')) {
    //   setCartCount((curr) => {

    //     const newProduct = { ...product, addedInCart: curr - 1 };
    //     updateProduct(newProduct);
    //     if(curr === 1){
    //       updateCount(itemsInCart-1);
    //     }
    //     return curr - 1;
    //   });
    // }
    // else {
    //   setCartCount((curr) => {
    //     const newProduct = { ...product, addedInCart: curr - 2 };
    //     updateProduct(newProduct);
    //     if(curr === 1){
    //       updateCount(itemsInCart-1);
    //     }
    //     return curr - 2;
    //   });
    // }


    //product.addedInCart = cartCount;
    // const newProduct = await { ...product, addedInCart: cartCount };
    // updateProduct(newProduct);
  };

  const handleModal = () => {
    setIsModalOpen((curr) => !curr)
  }

  useEffect(() => {
    products.map((currProduct) => {
      if (currProduct.id === product.id) { 
        setCartCount(currProduct.addedInCart); 
      }
    })
  }, [products])
  return (
    <>
      <div className="card-container">
        <div className="card-background">
          <div className="product-image-wrapper">
            <CardMedia
              component="img"
              height="154"
              image={product.productImage}
              alt="prodcut"
              className="product-image"
            />
          </div>
          <div className="product-title-wrapper"></div>
          <div className="product-title">{product.productName}</div>
          <div className="measurement-wrapper">
            <div className="measurement">{product.weight}</div>
          </div>
          <div className="price-container-wrapper">
            <div className="price-container">
              <FontAwesomeIcon
                className="dollar-icon"
                icon="fa-solid fa-bangladeshi-taka-sign"
              />
              <span className="amount">{product.unitPrice}</span>
            </div>
          </div>
          <div className="card-footer"></div>
        </div>

        <div className="card-foreground">
          <div className="details-and-add-to-cart-wrapper">
            <div className="add-to-cart" onClick={increaseCartCount}>
              {cartCount > 0 ? (
                <>
                  <div className="total-price">
                    <div className="price-container">
                      <FontAwesomeIcon
                        className="dollar-icon-1"
                        icon="fa-solid fa-bangladeshi-taka-sign"
                      />
                      <span className="amount" style={{ color: "white" }}>
                        {product.unitPrice * cartCount}
                      </span>
                    </div>
                  </div>
                  <div className="adder-remover">
                    <RemoveCircleOutlineOutlinedIcon
                      className="icon-hover"
                      sx={{ fontSize: "40px" }}
                      onClick={decreaseCartCount}
                    />
                    <div className="cart-item-count">{cartCount}</div>
                    <AddCircleOutlineOutlinedIcon
                      className="icon-hover"
                      sx={{ fontSize: "40px" }}
                    />
                  </div>
                  {/* <div className="add-message">Add to cart</div> */}
                  <div className="in-bag">In bag</div>
                </>
              ) : (
                <div className="cart-item-count">Add to cart</div>
              )}
            </div>
            <div className="details-container-wrapper" onClick={handleModal}>
              <div className="details-container">
                <span className="amount">Details</span>
                <FontAwesomeIcon
                  className="details-icon"
                  icon="fa-solid fa-angle-right"
                />
              </div>
            </div>
          </div>
          {cartCount > 0 ? (
            <div className="card-foreground-footer">
              <RemoveOutlinedIcon className="remove" onClick={(e) => decreaseCartCount(e)} />
              <div className="cart-item-count-in-footer">{`${cartCount} in bag`}</div>
              <AddOutlinedIcon className="add" onClick={increaseCartCount} />
            </div>
          ) : (
            <div className="card-footer">
              <IconButton onClick={increaseCartCount}>
                <AddShoppingCartIcon color="success" />
                <Typography color={"#ff4d4d"} fontWeight={700} marginLeft={1}> Add to bag</Typography>
              </IconButton>
            </div>
          )}
        </div>
      </div>
      <TransitionsModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
    </>
  );
}

export default ProductCard;
