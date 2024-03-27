import { CardMedia } from "@mui/material";
import React from "react";
import "../../style/ProductCategoryCardStyle.scss";

function ReciepeCard({ product }) {
  const categoryName = "Laundry Laundry Laundry Laundry";
  const url2 = "https://chaldn.com/_mpimage/date-crown-lulu-dates-400-gm?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D129300&q=best&v=1&m=400&webp=1";
  const url3 = "https://chaldn.com/_mpimage/nescafe-hot-latte-coffee?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D131795&q=low&v=1&m=300&webp=1";
  return (
    <>
        <div style={{border: "1px solid red" , position: "fixed", width: "100%"}}>
            hi
        </div>
     
        <div className="reciepe-image-wrapper">
          <CardMedia
            component="img"
            // height="200"
            // width="200px"
            image={url3}
            alt="prodcut"
            className="category-image"
          />
          <div className="reciepe-title">
            <span style={{fontSize: "22px"}}>Chicken Churi in mustard oil</span>
            <br/>
            Cook Time : 60 Mins
          </div>
        </div>
    </>
  );
}

export default ReciepeCard;
