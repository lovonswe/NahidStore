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
import ProductCategoryCard from "../components/card/ProductCategoryCard";

function Offer() {
  const { open } = useSidebarStore();
  const { categoryName } = usecategoryStore();
  const { subCategoryName, updateSubCategory } = useSubCategoryStore();
  const { subSubCategoryName, updateSubSubCategory } = useSubSubCategoryStore();
  const { products } = useProductStore();
  const handleCategoryClick = (category) => {

  };

  const productsExistsForCategory = (product, categoryName) => {
    console.log("product : ", product);
    const isPopular = product.popular && categories[categoryName].name==='Popular';
    const isRamadan = product.ramadan && categories[categoryName].name==='Ramadan';
    const isCategory = product.category === categories;
    const isExist = isPopular || isRamadan || isCategory;
    console.log(isPopular, isRamadan, isCategory, isExist);
    //[categoryName].name
    // const isExist = ( || (product.category==='Popular' && product.popular) || (product.category=== 'Ramadan' && product.ramadan))
    // console.log("isExist : ", isExist);
    // console.log(product.category === categories[categoryName].name, product.category==='Popular' && product.popular, product.category=== 'Ramadan' && product.ramadan)
    return isExist;
  }

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

          {/* //category te clik korlei product show korbe karon er kuno sub category nai */}
          {
            categoryName && !subCategoryName && !subSubCategoryName && !categories[categoryName].subCategories && products.filter((product) => {
              console.log(product.category , " ", categories[categoryName].name )
              return productsExistsForCategory(product, categoryName) ? true : false;
            }).map((product) => {
              // console.log("entered");
             return <ProductCard product={product}/>
            })
          }

          {
             categoryName && !subCategoryName && !subSubCategoryName && categories[categoryName].subCategories?.map((subCategory)=> {
              const subCategoriesInStock = products?.filter((product) => {
                //console.log("product subcategory : ", product.subCategory);
                return product.subCategory === subCategory.name ? true : false;
              })
              return subCategoriesInStock.length ? <ProductCategoryCard product={subCategoriesInStock[0]} isSubCategory={true}/> : null;
            }) 
          }

          {
            categoryName && subCategoryName && !subSubCategoryName && categories[categoryName].subCategories?.map((subCategory) => {
              return subCategory.subCategories?.map((subSubCategory) => {

                const subSubCategoryInStock = products?.filter((product) => {
                  // console.log(subSubCategory , "  product:  ", product);
                  return subSubCategory.name === product.subsubCategory? true : false;
                });
                //console.log("subSubCategoryInStock ", subSubCategoryInStock);
                return subSubCategoryInStock.length ? <ProductCategoryCard product={subSubCategoryInStock[0]} isSubSubCategory={true}/> : null;

              })
            })
          }
          {
            subSubCategoryName && products?.filter((product) => {
              return product.subsubCategory === subSubCategoryName ? true : false
            }).map((product) => {
              return <ProductCard product={product} />
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
