import React, { useState } from "react";
import styled from "@emotion/styled";
import { IconButton, Typography } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AddIcon from "@mui/icons-material/Add";
import WatchLaterIcon from "@mui/icons-material/WatchLater";
import AddressModal from "../modal/AddressModal";
import { useDeliveryAddressStore } from "../../store/AddressStore";
import DateTimePicker from "react-datetime-picker";
import 'react-datetime-picker/dist/DateTimePicker.css';
import 'react-calendar/dist/Calendar.css';
import 'react-clock/dist/Clock.css';
import '../../style/PlaceOrderStyle.scss'
import { usetotalPriceOfProductsInCart } from "../../store/ProductStore";
import { useNavigate } from "react-router-dom";



function PlaceOrder() {
  const [addressAdded, setAddressAdded] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [value, onChange] = useState(new Date());
  const { deliveryAddress } = useDeliveryAddressStore();
  const {totalPrice} = usetotalPriceOfProductsInCart();
  const deliveryCharge = 0;
  const amountToPay = totalPrice;
  const navigate = useNavigate();

  const openAddressModal = () => {
    setIsModalOpen((curr) => !curr)
  }

  const handleProceed = () => {
    alert(`Your order of taka ${totalPrice} has been placed successfully`)
    navigate('ramadan');
    
  }

  return (
    <div className="root-place-order">
      <div className="layer-one-address">
        <div className="address-slection-title">
          <IconButton>
            <LocationOnIcon />
            <Typography>
              {deliveryAddress ? `Delivery Address` : `Select a delivery address`}
            </Typography>
          </IconButton>
        </div>
        {deliveryAddress ? (
          <div className="address-container">
            <ul>
              <li>City : {deliveryAddress.city}</li>
              <li>
                Area : {deliveryAddress.area}
              </li>
              <li>
                Floor no : {deliveryAddress.floorNo}
              </li>
              <li> Flat no : {deliveryAddress.flatNo}</li>
              <li> Moblie no : {deliveryAddress.mobileNumber}</li>
            </ul>
          </div>
        ) : (
          <div className="new-address-button">
            <IconButton onClick={openAddressModal}>
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
              {deliveryAddress
                ? `Prefered Delivery Date`
                : `Prefered Delivery Date`}
            </Typography>
          </IconButton>
          <AddressModal />
        </div>
        {deliveryAddress ? (
          <div style={{textAlign: "center", padding: "5%"}}>
            <DateTimePicker onChange={onChange} value={value}/>
          </div>
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
          <PlaceOrderPart className="place-order" deliveryAddress={(deliveryAddress && value) ? true : false} onClick={(deliveryAddress && value)? handleProceed : null}>Proceed</PlaceOrderPart>
          <AmountToPay className="amount-to-pay" deliveryAddress={(deliveryAddress && value) ? true : false}>৳{totalPrice}</AmountToPay>
        </div>
      </div>
      <AddressModal isModalOpen={isModalOpen} setIsModalOpen={setAddressAdded} />
    </div>
  );
}
export default PlaceOrder;

const PlaceOrderPart = styled.div`
            background-color: ${props => !props.deliveryAddress ? 'rgb(201, 196, 196)' : '#ff686e'};
            padding: 20px;
            border-top-left-radius: 5px;
            border-bottom-left-radius: 5px;
`;

const AmountToPay = styled.div`
    background-color:${props => props.deliveryAddress ? '#e04f54' : 'gray'};
    padding: 20px;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
`
// ff686e
// #e04f54