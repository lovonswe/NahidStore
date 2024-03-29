import React, { useState } from "react";
import styled from "@emotion/styled";
import "./OfferStyle.scss";
import { useSidebarStore } from "../store/FlagStore";
import AutoCarousel from "../components/AutoCarousel";
import {
  useSubCategoryStore,
  useSubSubCategoryStore,
  usecategoryStore,
} from "../store/PathStore";
import { categories } from "../components/sidebar/SidebarData";
import { useProductStore } from "../store/ProductStore";
import ProductCard from '../components/card/ProductCard';

function Offer() {
  const { open } = useSidebarStore();
  const { categoryName } = usecategoryStore();
  const { subCategoryName, updateSubCategory } = useSubCategoryStore();
  const { subSubCategoryName, updateSubSubCategory } = useSubSubCategoryStore();
  const { products } = useProductStore();
  const handleCategoryClick = (category) => {
    
  };

  return (
    <div>
      <Contents theme={theme} className="contents" open={open}>
        <AutoCarousel />
        <div className="hierarchy">
          {categoryName && (
            <span
              className="category"
              style={{
                fontWeight: subCategoryName ? "normal" : "bold",
                color: subCategoryName ? "#000" : "#777",
                cursor: subCategoryName ? "pointer" : "none",
              }}
              onClick={handleCategoryClick(categories[categoryName].name)}
            >
              {categories[categoryName].name}
            </span>
          )}
          {subCategoryName && (
            <>
              <span className="separator"> {"\u003E"} </span> &nbsp;
              <span
                className="subCategory"
                style={{
                  fontWeight: subSubCategoryName ? "normal" : "bold",
                  color: subSubCategoryName ? "#000" : "#777",
                  cursor: subCategoryName ? "pointer" : "none",
                }}
              >
                {subCategoryName}
              </span>
              &nbsp;
              <span></span>
            </>
          )}
          {subSubCategoryName && (
            <>
              <span className="separator"> {"\u003E"}</span>&nbsp;
              <span
                className="subSubCategory"
                style={{ fontWeight: "bold", color: "#777" }}
              >
                {subSubCategoryName}
              </span>
            </>
          )}
        </div>
        <ProductShowCase className="product-showcase">
            {
              subSubCategoryName && products.filter((product) => {
                return product.subsubCategory === subSubCategoryName ? true: false
              }).map((product)=>
                {
                  return <ProductCard product={product}/>
                }
              )
            }
        </ProductShowCase>
      </Contents>
    </div>
  );
}

export default Offer;

export const Contents = styled.div`
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

export const theme = {
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
