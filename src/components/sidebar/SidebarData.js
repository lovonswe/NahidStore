import React from "react";
import { uid } from 'uid';
import egg from '../../assets/categoryIcons/egg1.png'
import favourites from '../../assets/categoryIcons/heart.png'
import ramadan from '../../assets/categoryIcons/lamp.png'
import flashSales from '../../assets/categoryIcons/flash.png'
import popular from '../../assets/categoryIcons/flames.png'
import food from '../../assets/categoryIcons/accessory.png'
import cleaningSupply from '../../assets/categoryIcons/cleaning.png'
import personalCare from '../../assets/categoryIcons/beauty.png'
import healthAndWellness from '../../assets/categoryIcons/sink.png'
import babyCare from '../../assets/categoryIcons/baby.png'
import homeAndKitchen from '../../assets/categoryIcons/kitchen.png'
import stationaryAndOffice from '../../assets/categoryIcons/stationary.png'
import petCare from '../../assets/categoryIcons/gesture.png'
import toysAndSport from '../../assets/categoryIcons/water-gun.png'
import beautyAndMakeup from '../../assets/categoryIcons/make-up.png'
import fashionAndLifeStyle from '../../assets/categoryIcons/gesture.png'
import vehicleEssential from '../../assets/categoryIcons/bus.png'
import premimumCare from '../../assets/categoryIcons/crown.png'
import recipes from '../../assets/categoryIcons/book.png'



export const productList = [
  {
    id: uid(),
    productName: "Chaldal Sippy Orange Drinks",
    category: "Food",
    subCategory: "Beverages",
    subsubCategory: "Syrups & Powder Drinks",
    subsubcategoryImage: "https://chaldn.com/_mpimage/syrups-powder-drinks?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D30220&q=best&v=1&m=400&webp=1",
    subCategoryImage: "https://chaldn.com/_mpimage/beverages?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D23727&q=low&v=1&m=400&webp=1",
    productImage: "https://chaldn.com/_mpimage/chaldal-sippy-orange-drinks-500-gm?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D154114&q=best&v=1&m=400&webp=1",
    addedInCart: 0,
    stock: 100,
    unitPrice: 500,
    discount: 40,
    weight: "500 gm",
    popular: true,
    offer: false,
    offerImage: null,
    favorite: false,
    ramadan: true,
    offerImage: "https://chaldn.com/_mpimage?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D154570&q=low&v=1&m=400&webp=1"
  },
  {
    id: uid(),
    productName: "Chaldal Sippy Mango Drinks",
    category: "Food",
    subCategory: "Beverages",
    subsubCategory: "Syrups & Powder Drinks",
    subsubcategoryImage: "https://chaldn.com/_mpimage/syrups-powder-drinks?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D30220&q=best&v=1&m=400&webp=1",
    subCategoryImage: "https://chaldn.com/_mpimage/beverages?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D23727&q=low&v=1&m=400&webp=1",
    productImage: "https://chaldn.com/_mpimage/chaldal-sippy-mango-drinks-500-gm?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D154116&q=best&v=1&m=400&webp=1",
    addedInCart: 0,
    stock: 100,
    unitPrice: 500,
    discount: 40,
    weight: "500 gm",
    popular: true,
    offer: false,
    offerImage: null,
    favorite: false,
    ramadan: true,
    offerImage: "https://chaldn.com/_mpimage?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D154570&q=low&v=1&m=400&webp=1"
  },
  {
    id: uid(),
    productName: "Dettol Soap Bathing Bar Original Germ Defence 75 gm (Free Tiffin Box)",
    category: "Cleaning Supplies",
    subCategory: "Dishwashing Supplies",
    subsubCategory: null,
    subsubcategoryImage: null,
    subCategoryImage: "https://chaldn.com/_mpimage/dishwashing-supplies?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D83456&q=best&v=1&m=400&webp=1",
    productImage: "https://chaldn.com/_mpimage/dettol-soap-bathing-bar-original-germ-defence-75-gm-free-tiffin-box-3-pcs?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D151122&q=best&v=1&m=400&webp=1",
    addedInCart: 0,
    stock: 100,
    unitPrice: 180,
    discount: 12,
    weight: "3 pcs",
    popular: true,
    offer: true,
    favorite: false,
    ramadan: false,
    offerImage: "https://chaldn.com/_mpimage?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D149095&q=low&v=1&m=400&webp=1"
  },
  {
    id: uid(),
    productName: "Crown Dabbas Dates",
    category: "Food",
    subCategory: "Fruits & Vegetables",
    subsubCategory: "Dates (Khejur)",
    subsubcategoryImage: "https://chaldn.com/_mpimage/dates-khejur?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D99117&q=best&v=1&m=400&webp=",
    subCategoryImage: "https://chaldn.com/_mpimage/fresh-vegetables?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D23773&q=low&v=1&m=400&webp=1",
    productImage: "https://chaldn.com/_mpimage/crown-dabbas-dates-1-kg?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D129412&q=best&v=1&m=400&webp=1",
    addedInCart: 0,
    stock: 100,
    unitPrice: 650,
    discount: 16,
    weight: "500 gm",
    popular: true,
    offer: false,
    favorite: false,
    ramadan: true,
    offerImage: null,
  },
  {
    id: uid(),
    productName: "Crown Dabbas Dates",
    category: "Food",
    subCategory: "Fruits & Vegetables",
    subsubCategory: "Fresh Fruits",
    subsubcategoryImage: "https://chaldn.com/_mpimage/syrups-powder-drinks?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D30220&q=best&v=1&m=400&webp=1",
    subCategoryImage: "https://chaldn.com/_mpimage/fresh-vegetables?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D23773&q=low&v=1&m=400&webp=1",
    productImage: "https://chaldn.com/_mpimage/chaldal-sippy-orange-drinks-500-gm-and-crown-dabbas-dates-1-kg-combo-offer?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D154429&q=best&v=1&m=400&webp=1",
    addedInCart: 0,
    stock: 100,
    unitPrice: 1150,
    discount: 33,
    weight: "500 gm",
    popular: true,
    offer: false,
    favorite: false,
    ramadan: true,
    offerImage: null,
  },
  {
    id: uid(),
    productName: "Crown Dabbas Dates",
    category: "Food",
    subCategory: "Fruits & Vegetables",
    subsubCategory: "Dates (Khejur)",
    subsubcategoryImage: "https://chaldn.com/_mpimage/syrups-powder-drinks?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D30220&q=best&v=1&m=400&webp=1",
    subCategoryImage: "https://chaldn.com/_mpimage/fresh-vegetables?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D23773&q=low&v=1&m=400&webp=1",
    productImage: "https://chaldn.com/_mpimage/crown-dabbas-dates-1-kg?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D129412&q=best&v=1&m=400&webp=1",
    addedInCart: 0,
    stock: 100,
    unitPrice: 650,
    discount: 16,
    weight: "500 gm",
    popular: true,
    offer: false,
    favorite: false,
    ramadan: true,
    offerImage: null,
  },
  {
    id: uid(),
    productName: "Date Crown Lulu Dates",
    category: "Food",
    subCategory: "Fruits & Vegetables",
    subsubCategory: "Dates (Khejur)",
    subsubcategoryImage: "https://chaldn.com/_mpimage/syrups-powder-drinks?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D30220&q=best&v=1&m=400&webp=1",
    subCategoryImage: "https://chaldn.com/_mpimage/fresh-vegetables?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D23773&q=low&v=1&m=400&webp=1",
    productImage: "https://chaldn.com/_mpimage/date-crown-lulu-dates-400-gm?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D129300&q=best&v=1&m=400&webp=1",
    addedInCart: 0,
    stock: 100,
    unitPrice: 350,
    discount: 10,
    weight: "400 gm",
    popular: true,
    offer: false,
    favorite: false,
    ramadan: true,
    offerImage: null,
  },


  {
    id: uid(),
    productName: "Roshun (Garlic Imported)",
    category: "Food",
    subCategory: "Fruits & Vegetables",
    subsubCategory: "Fresh Vegetables",
    subsubcategoryImage: "https://chaldn.com/_mpimage/fresh-vegetables?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D23773&q=low&v=1&m=400&webp=1",
    subCategoryImage: "https://chaldn.com/_mpimage/fresh-vegetables?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D23773&q=low&v=1&m=400&webp=1",
    productImage: "https://chaldn.com/_mpimage/roshun-garlic-imported-25-gm-500-gm-and-deshi-peyaj-local-onion-50-gm-1-kg-combo?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D150906&q=best&v=1&m=400&webp=1",
    addedInCart: 0,
    stock: 100,
    unitPrice: 39,
    discount: 10,
    weight: "1 kg",
    popular: true,
    offer: false,
    favorite: false,
    ramadan: true,
    offerImage: null,
  },
  {
    id: uid(),
    productName: "Potato Regular",
    category: "Food",
    subCategory: "Fruits & Vegetables",
    subsubCategory: "Fresh Vegetables",
    subsubcategoryImage: "https://chaldn.com/_mpimage/potato-regular-50-gm-1-kg?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D81244&q=best&v=1&m=400&webp=1",
    subCategoryImage: "https://chaldn.com/_mpimage/fresh-vegetables?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D23773&q=low&v=1&m=400&webp=1",
    productImage: "https://chaldn.com/_mpimage/potato-regular-50-gm-1-kg?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D81244&q=best&v=1&m=400&webp=1",
    addedInCart: 0,
    stock: 100,
    unitPrice: 39,
    discount: 10,
    weight: "1 kg",
    popular: true,
    offer: false,
    favorite: false,
    ramadan: true,
    offerImage: null,
  },
  {
    id: uid(),
    productName: "Red Tomato",
    category: "Food",
    subCategory: "Fruits & Vegetables",
    subsubCategory: "Fresh Vegetables",
    subsubcategoryImage: "https://chaldn.com/_mpimage/fresh-vegetables?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D23773&q=low&v=1&m=400&webp=1",
    subCategoryImage: "https://chaldn.com/_mpimage/fresh-vegetables?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D23773&q=low&v=1&m=400&webp=1",
    productImage: "https://chaldn.com/_mpimage/red-tomato-25-gm-500-gm?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D64361&q=best&v=1&m=400&webp=1",
    addedInCart: 0,
    stock: 100,
    unitPrice: 29,
    discount: 34,
    weight: "500 gm",
    popular: true,
    offer: false,
    favorite: false,
    ramadan: false,
    offerImage: null,
  },
  {
    id: uid(),
    productName: "Coriander Leaves (Dhonia Pata)",
    category: "Food",
    subCategory: "Fruits & Vegetables",
    subsubCategory: "Fresh Vegetables",
    subsubcategoryImage: "https://chaldn.com/_mpimage/fresh-vegetables?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D23773&q=low&v=1&m=400&webp=1",
    subCategoryImage: "https://chaldn.com/_mpimage/fresh-vegetables?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D23773&q=low&v=1&m=400&webp=1",
    productImage: "https://chaldn.com/_mpimage/coriander-leaves-dhonia-pata-10-gm-100-gm?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D28562&q=low&v=1&m=400&webp=1",
    addedInCart: 0,
    stock: 100,
    unitPrice: 15,
    discount: 34,
    weight: "100 gm",
    popular: true,
    offer: false,
    favorite: false,
    ramadan: true,
    offerImage: null,
  },
  {
    id: uid(),
    productName: "Lal Shak (Red Spinach)",
    category: "Food",
    subCategory: "Fruits & Vegetables",
    subsubCategory: "Fresh Vegetables",
    subsubcategoryImage: "https://chaldn.com/_mpimage/fresh-vegetables?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D23773&q=low&v=1&m=400&webp=1",
    subCategoryImage: "https://chaldn.com/_mpimage/fresh-vegetables?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D23773&q=low&v=1&m=400&webp=1",
    productImage: "https://chaldn.com/_mpimage/lal-shak-red-spinach-1-bundle?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D7226&q=low&v=1&m=400&webp=1",
    addedInCart: 0,
    stock: 100,
    unitPrice: 29,
    discount: 48,
    weight: "1 bundle",
    popular: true,
    offer: false,
    favorite: false,
    ramadan: false,
    offerImage: null,
  },
]
export const categories = [
  {
    name: "Favourites",
    subCategories: null,
    path: "favourites",
    icon: favourites,
  },
  {
    name: "Ramadan",
    subCategories: null,
    path: "ramadan",
    icon: ramadan
  },
  {
    name: "Flash Sales",
    subCategories: null,
    path: "flash-sales",
    icon: flashSales
  },
  {
    name: "Popular",
    subCategories: null,
    path: "popular",
    icon: popular
  },
  {
    name: "Food",
    subCategories: [
      {
        name: "Fruits & Vegetables",
        subCategories: [
          {
            name: "Fresh Vegetables",
            subCategories: null,
            path: "food/fruits-and-vegetables/fresh-vegetables",
          },
          {
            name: "Fresh Fruits",
            subCategories: null,
            path: "food/fruits-and-vegetables/fresh-fruits",
          },
          {
            name: "Dates (Khejur)",
            subCategories: null,
            path: "food/fruits-and-vegetables/dates",
          },
        ],
        path: "food/fruits-and-vegetables",
      },
      {
        name: "Meat & Fish",
        subCategories: [
          {
            name: "Chicken & Poultry",
            subCategories: null,
            path: "food/meat-and-fish/chicken-and-poultry",
          },
          {
            name: "Premium Perishables",
            subCategories: null,
            path: "food/meat-and-fish/premium-perishables",
          },
          {
            name: "Frozen Fish",
            subCategories: null,
            path: "food/meat-and-fish/frozen-fish",
          },
          {
            name: "Meat",
            subCategories: null,
            path: "food/meaf-and-fish/meat",
          },
          {
            name: "Tofu & Meat Alternatives",
            subCategories: null,
            path: "food/meaf-and-fish/tofu-and-meat-alternatives",
          },
          {
            name: "Dried Fish",
            subCategories: null,
            path: "food/meat-and-fish/dried-fish",
          },
        ],
        path: "food/meat-and-fish",
      },
      {
        name: "Cooking",
        subCategories: [
          {
            name: "Spices",
            subCategories: null,
            path: "food/cooking/spices",
          },
          {
            name: "Salt & Sugar",
            subCategories: null,
            path: "food/cooking/salt-and-sugar",
          },
          {
            name: "Rice",
            subCategories: null,
            path: "food/cooking/rice",
          },
          {
            name: "Dal or Lentil",
            subCategories: null,
            path: "food/cooking/dal-or-lentil",
          },
          {
            name: "Ready Mix",
            subCategories: null,
            path: "food/cooking/read-mix",
          },
          {
            name: "Shemai & Suji",
            subCategories: null,
            path: "food/cooking/shemai-and-suji",
          },
          {
            name: "Oil",
            subCategories: null,
            path: "food/cooking/oil"
          },
          {
            name: "Colors & Flavours",
            subCategories: null,
            path: "food/cooking/colors-and-flavours"
          },
          {
            name: "Ghee",
            subCategories: null,
            path: "food/cooking/ghee"
          },
          {
            name: "Premium Ingredients",
            subCategories: null,
            path: "food/cooking/premium-ingredients"
          },
          {
            name: "Sauces & Pickles",
            subCategories: [
              {
                name: "Tomato Sauces",
                subCategories: null,
                path: "food/sauces-and-pickles/tomato-sauces",
              },
              {
                name: "Pickles",
                subCategories: null,
                path: "food/sauces-and-pickles/pickles",
              },
              {
                name: "Cooking Sauces",
                subCategories: null,
                path: "food/sauces-and-pickles/cooking-sauces",
              },
              {
                name: "Other Table Sauces",
                subCategories: null,
                path: "food/sauces-and-pickles/other-table-sauces",
              }
            ],
            path: "food/cooking",
          },
          {
            name: "Cooking",
            subCategories: [
              {
                name: "Spices",
                subCategories: null,
                path: "food/cooking/spices",
              },
              {
                name: "Salt & Sugar",
                subCategories: null,
                path: "food/cooking/salt-and-sugar",
              },
              {
                name: "Rice",
                subCategories: null,
                path: "food/cooking/rice",
              },
              {
                name: "Dal or Lentil",
                subCategories: null,
                path: "food/cooking/dal-or-lentil",
              },
              {
                name: "Ready Mix",
                subCategories: null,
                path: "food/cooking/read-mix",
              },
              {
                name: "Shemai & Suji",
                subCategories: null,
                path: "food/cooking/shemai-and-suji",
              },
              {
                name: "Oil",
                subCategories: null,
                path: "food/cooking/oil"
              },
              {
                name: "Colors & Flavours",
                subCategories: null,
                path: "food/cooking/colors-and-flavours"
              },
              {
                name: "Ghee",
                subCategories: null,
                path: "food/cooking/ghee"
              },
              {
                name: "Premium Ingredients",
                subCategories: null,
                path: "food/cooking/premium-ingredients"
              },
              {
                name: "Sauces & Pickles",
                subCategories: [
                  {
                    name: "Tomato Sauces",
                    subCategories: null,
                    path: "food/sauces-and-pickles/tomato-sauces",
                  },
                  {
                    name: "Pickles",
                    subCategories: null,
                    path: "food/sauces-and-pickles/pickles",
                  },
                  {
                    name: "Cooking Sauces",
                    subCategories: null,
                    path: "food/sauces-and-pickles/cooking-sauces",
                  },
                  {
                    name: "Other Table Sauces",
                    subCategories: null,
                    path: "food/sauces-and-pickles/other-table-sauces",
                  }
                ],
                path: "food/sauces-and-pickles",
              },
              {
                name: "Dairy & Eggs",
                subCategories: [
                  {
                    name: "Eggs",
                    subCategories: null,
                    path: "food/dairy-and-eggs/eggs",
                  },
                  {
                    name: "Powder Milk",
                    subCategories: null,
                    path: "food/dairy-and-eggs/powder-milk",
                  },
                  {
                    name: "Liquid & UHT Milk",
                    subCategories: null,
                    path: "food/dairy-and-eggs/liquid-and-uht-milk",
                  },
                  {
                    name: "Yogurt & Sweets",
                    subCategories: null,
                    path: "food/dairy-and-eggs/yogurt-and-sweets",
                  },
                  {
                    name: "Cheese",
                    subCategories: null,
                    path: "food/dairy-and-eggs/yogurt-and-sweets"
                  },
                  {
                    name: "Condensed Milk & Cream",
                    subCategories: null,
                    path: "food/dairy-and-eggs/condensed-milk-and-cream"
                  },
                  {
                    name: "Butter & Sour Cream",
                    subCategories: null,
                    path: "food/dairy-and-eggs/butter-and-sour-cream"
                  }
                ],
                path: "food/dairy-and-eggs",
              }
            ],
            path: "food"
          },
        ],
        path: "food/cooking"
      }
    ],
    path: "food",
    icon: food
  },
  {
    name: "Cleaning Supply",
    subCategories: [
      {
        name: "Dishwashing Supplies",
        subCategories: null,
        path: "cleaning-supply/dishwashing-supplies"
      },
      {
        name: "Laundry",
        subCategories: null,
        path: "cleaning-supply/laundry"
      },
      {
        name: "Toilet Cleaners",
        subCategories: null,
        path: "cleaning-supply/toilet-cleaners"
      },
      {
        name: "Napkins & Paper Products",
        subCategories: null,
        path: "cleaning-supply/napkins-paper-products"
      },
      {
        name: "Pest Control",
        subCategories: null,
        path: "cleaning-supply/pest-control"
      },
      {
        name: "Floor & Glass Cleaners",
        subCategories: null,
        path: "cleaning-supply/floor-and-glass-cleaners"
      }
    ],
    path: "cleaning-supply",
    icon: cleaningSupply
  },
  {
    name: "Personal Care",
    subCategories: null,
    path: "personal-care",
    icon: personalCare
  },
  {
    name: "Health & Wellness",
    subCategories: null,
    path: "health-and-wellness",
    icon: healthAndWellness
  },
  {
    name: "Baby Care",
    subCategories: null,
    path: "baby-care",
    icon: babyCare
  },
  {
    name: "Home & Kitchen",
    subCategories: null,
    path: "home-and-kitchen",
    icon: homeAndKitchen
  },
  {
    name: "Staionery & Office",
    subCategories: null,
    path: "staionery-and-office",
    icon: stationaryAndOffice
  },
  {
    name: "Pet Care",
    subCategories: null,
    path: "pet-care",
    icon: petCare

  },
  {
    name: "Toys & Sports",
    subCategories: null,
    path: "toys-and-sports",
    icon: toysAndSport
  },
  {
    name: "Beauty & MakeUp",
    subCategories: null,
    path: "beauty-and-makeup",
    icon: beautyAndMakeup
  },
  {
    name: "Fashion & Lifestyle",
    subCategories: null,
    path: "fashion-and-lifestyle",
    icon: fashionAndLifeStyle
  },
  {
    name: "Vehicle Essentials",
    subCategories: null,
    path: "vehicle-essentials",
    icon: vehicleEssential
  },
  {
    name: "Premium Care",
    subCategories: null,
    path: "premium-care",
    icon: premimumCare
  },
  {
    name: "Recipes",
    subCategories: null,
    path: "recipes",
    icon: recipes
  }
];