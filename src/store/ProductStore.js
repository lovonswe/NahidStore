import React from 'react';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { uid } from 'uid';
import { Favorite } from '@mui/icons-material';
import { productList } from '../components/sidebar/SidebarData';



let productStore = (set) => ({
    products: [...productList],
    updateProduct: (product) => set((state) => {
        const index = state.products.findIndex(p => p.id === product.id);
        if (index !== -1) {
            // If the product exists, replace it with the new one
            const updatedProducts = [...state.products];
            updatedProducts[index] = product;
            return { products: updatedProducts };
        } else {
            // If the product doesn't exist, add it to the products array
            return { products: [...state.products, product] };
        }
    }),
});

productStore = persist(productStore, { name: "products" });
export const useProductStore = create(productStore);

let cartItemCountStore = (set) => ({
    itemsInCart: 0,
    updateCount: (count) => set((state) => ({
        itemsInCart: Math.max(count, 0)
    })),
});

cartItemCountStore = persist(cartItemCountStore, { name: "items_in_cart" });
export const usecartItemCountStore = create(cartItemCountStore);


let searchedProductStore = (set) => ({
    searchedProducts: [...productList],
    updateSearchedProduct: (filteredProducts) => set((state) => ({
        searchedProducts: [...filteredProducts],
    })),
});

searchedProductStore = persist(searchedProductStore, { name: "searched_products" });
export const usesearchedProductStore = create(searchedProductStore);

