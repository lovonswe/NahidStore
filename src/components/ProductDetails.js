import React from "react";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Divider,
  IconButton,
  Icon,
  Grid,
  Stack,
} from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import RemoveOutlinedIcon from "@mui/icons-material/RemoveOutlined";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";

import "../style/ProductDetailsStyle.scss";

function ProductDetails({ product }) {
  const url2 =
    "https://chaldn.com/_mpimage/date-crown-lulu-dates-400-gm?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D129300&q=best&v=1&m=400&webp=1";
  const cashOnDeliveryUrl =
    "https://chaldn.com/asset/Egg.ChaldalWeb.Fabric/Egg.ChaldalWeb1/1.0.0-Deploy-Release-450/Default/stores/chaldal/components/page/BrandComponent/images/cash-on-delivery.png?q=low&webp=1&alpha=1";
  const americanExpress = "https://chaldn.com/asset/Egg.ChaldalWeb.Fabric/Egg.ChaldalWeb1/1.0.0-Deploy-Release-450/Default/components/shared/NewFooter/images/Amex.png?q=low&webp=1&alpha=1";
  const masterCard = "https://chaldn.com/asset/Egg.ChaldalWeb.Fabric/Egg.ChaldalWeb1/1.0.0-Deploy-Release-450/Default/components/shared/NewFooter/images/mastercard.png?q=low&webp=1&alpha=1";
  const decreaseCartCount = () => {};
  const increaseCartCount = () => {};
  return (

      <div className="root">
        <div className="top">
          <div className="image-container">
            <CardMedia
              component="img"
              image={url2}
              alt="prodcut"
              className="product-image"
            />
          </div>
          <div className="info-container">
            <div className="title-unit">
              <div className="title">Date Crown Lulu Dates </div>
              <div className="unit">400 gm</div>
            </div>

            <div className="price-discount">
              <div className="price">
                <FontAwesomeIcon
                  className="taka-icon"
                  icon="fa-solid fa-bangladeshi-taka-sign"
                />
                <span className="unit-price">{"100"}</span>
              </div>
              <div className="discount">14 % OFF</div>
            </div>

            <div className="add-and-buy-container">
              <div className="card-foreground-footer">
                <RemoveOutlinedIcon
                  className="remove"
                  onClick={(e) => decreaseCartCount(e)}
                />
                <div className="cart-item-count-in-footer">{`26 in bag`}</div>
                <AddOutlinedIcon className="add" onClick={increaseCartCount} />
              </div>
              <div className="buy-now">Buy now</div>
            </div>

            <Divider />
            <div className="info">
              <ul className="info-list">
                <li>Hi This is Khejur</li>
                <li>Would you like to buy?</li>
                <li>Hi This is Khejur</li>
                <li>Would you like to buy?</li>
                <li>
                  Hi This is Khejur Hi This is Khejur Hi This is Khejur Hi This
                  is Khejur
                </li>
                <li>Would you like to buy?</li>
                <li>Hi This is Khejur</li>
                <li>Would you like to buy?</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="bottom">
          <Stack className="delivery-info" direction={"row"} justifyContent={"space-between"} >
            <Grid className="thirty-minutes-delivery">
              <IconButton>
              <img src={cashOnDeliveryUrl} style={{minHeight: '10px', maxHeight: '40px'}} />
                <Typography>Cash on delivery</Typography>
              </IconButton>
              <IconButton>
                <img src={cashOnDeliveryUrl} style={{minHeight: '10px', maxHeight: '40px'}}/>
                <Typography>Cash on delivery</Typography>
              </IconButton>
            </Grid>
            <Grid>
            <IconButton>
              <Typography>Pay with</Typography>
              </IconButton>
              <IconButton>
                <img src={masterCard} style={{minHeight: '10px', maxHeight: '40px'}}/>
              </IconButton>
              <IconButton>
                <img src={masterCard} style={{minHeight: '10px', maxHeight: '40px'}}/>
              </IconButton>
              <IconButton>
                <img src={masterCard} style={{minHeight: '10px', maxHeight: '40px'}}/>
              </IconButton>
              <IconButton>
                <img src={masterCard} style={{minHeight: '10px', maxHeight: '40px'}}/>
              </IconButton>
            </Grid>
          </Stack>
        </div>
      </div>

  );
}

export default ProductDetails;
