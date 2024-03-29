import React from "react";
import { useSidebarStore } from "../store/FlagStore";
import styled from "@emotion/styled";
import PlaceOrder from "../components/order/PlaceOrder";
import './OfferStyle.scss'

function OrderPlacement() {
  const { open } = useSidebarStore();

  return (
    <div>
      <Contents theme={theme} className="contents" open={open}>
        <PlaceOrder />
      </Contents>
    </div>
  );
}

export default OrderPlacement;

const Contents = styled.div`
  position: absolute;
  /* top: 0px; */
  right:0px;
  z-index: 90;
  /* background-color: red; */
  width: ${props => (props.open ? "calc(100% - 250px)" : "calc(100%)")};
  height: 100vh;
  margin-top: 55px;
  transition: width 0.5s ease;

  /* transform: translateX(250px); */

  ${props => props.theme.breakpoints.mobile} {
    margin-top: 225px;
  }
`;

const theme = {
  breakpoints: {
    mobile: '@media (max-width: 768px)',
  }
}
const ProductShowCase = styled.div`
  margin: 10px;
  height: 100vh;
  display: flex;
  flex-wrap: wrap;

`;
