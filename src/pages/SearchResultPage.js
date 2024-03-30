import React from "react";
import { useSidebarStore } from "../store/FlagStore";
import styled from "@emotion/styled";
import PlaceOrder from "../components/order/PlaceOrder";
import './OfferStyle.scss'
import { usesearchedProductStore } from "../store/ProductStore";
import ProductCard from '../components/card/ProductCard'

function SearchResultPage() {
  const { open } = useSidebarStore();
  const { searchedProducts } = usesearchedProductStore();

  return (
    <div>
      <Contents theme={theme} className="contents" open={open}>
        {
            searchedProducts && searchedProducts.map((product) => {
                return <ProductCard product={product}/>
            })
        }
        {
            !searchedProducts && <div style={{margin: 'auto'}}> No products found</div>
        }
      </Contents>
    </div>
  );
}

export default SearchResultPage;

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
  color: red;
  display: flex;
  flex-wrap: wrap;

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
