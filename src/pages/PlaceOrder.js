import React, { useState } from "react";
import styled from "@emotion/styled";
import "../style/PlaceOrderStyle.scss";
import { IconButton, Typography } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AddIcon from "@mui/icons-material/Add";
import WatchLaterIcon from "@mui/icons-material/WatchLater";

function PlaceOrder() {
  const [addressAdded, setAddressAdded] = useState(false);
  const deliveryCharge = 0;
  const amountToPay = 1234;
  return (
    <div className="root">
      <div className="layer-one-address">
        <div className="address-slection-title">
          <IconButton>
            <LocationOnIcon />
            <Typography>
              {addressAdded ? `Delivery Address` : `Select a delivery address`}
            </Typography>
          </IconButton>
        </div>
        {addressAdded ? (
          <div className="address-container"></div>
        ) : (
          <div className="new-address-button">
            <IconButton>
              <AddIcon />
              <Typography>New Address</Typography>
            </IconButton>
          </div>
        )}
      </div>
      <div className="layer-two-delivery">
        <div className="time-slection-title">
          <IconButton>
            <WatchLaterIcon />
            <Typography>
              {addressAdded
                ? `Prefered Delivery Date`
                : `Prefered Delivery Date`}
            </Typography>
          </IconButton>
        </div>
        {addressAdded ? (
          <div></div>
        ) : (
          <div className="slot-msg">
            Slot selection will be available after selection and address
          </div>
        )}
      </div>
      <div className="layer-three-message">
        <div className="next-page-payment-options">
          Payment options available on the next page
        </div>
        <div>৳{deliveryCharge} Delivery charge included</div>
      </div>
      <div className="layer-four-proceed">
        <div className="place-order-button">
          <PlaceOrderPart className="place-order">Proceed</PlaceOrderPart>
          <AmountToPay className="amount-to-pay">৳{amountToPay}</AmountToPay>
        </div>
      </div>
    </div>
  );
}
export default PlaceOrder;

const PlaceOrderPart = styled.div`
            background-color: ${props => props.addressAdded ? 'rgb(201, 196, 196)' : '#ff686e'};
            padding: 20px;
            border-top-left-radius: 5px;
            border-bottom-left-radius: 5px;
`;

const AmountToPay = styled.div`
    background-color:${props => !props.addressAdded ? '#e04f54' : 'gray'};
    padding: 20px;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
`
// ff686e
// #e04f54