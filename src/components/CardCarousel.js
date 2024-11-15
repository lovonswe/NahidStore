import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ProductCategoryCard from './card/ProductCategoryCard';

const CardCarousel = ({ products }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <Slider {...settings}>
      {products.map(product => (
        // <div key={product.id}>
        //   {/* Your product card component */}
        //   <div className="product-card">
        //     <h2>{product.name}</h2>
        //     <p>{product.description}</p>
        //     {/* Add other product details */}
        //   </div>
        // </div>
        <ProductCategoryCard product={product} isSubCategory={true}/>
      ))}
    </Slider>
  );
};

export default CardCarousel;
