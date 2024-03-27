import { CardMedia } from "@mui/material";
import React from "react";
import "../../style/ProductCategoryCardStyle.scss";

function ProductCategoryCard({ product, boxShadow }) {
  const categoryName = "Laundry Laundry Laundry Laundry";
  const url2 = "https://chaldn.com/_mpimage/date-crown-lulu-dates-400-gm?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D129300&q=best&v=1&m=400&webp=1";

  const categoryCardStyle = (shadow) => {
    return {
      boxShadow: shadow ? '0px 4px 8px rgba(0, 0, 0, 0.1)' : 'none',
    };
  };

  return (
    <>
      <div className="category-cart" style={categoryCardStyle(true)}>
        <div className="image-wrapper">
          <CardMedia
            component="img"
            height="210"
            image={url2}
            alt="prodcut"
            className="category-image"
          />
        </div>
        <div className="title">
          {categoryName}
        </div>
      </div>
    </>
  );
}

export default ProductCategoryCard;
