import React from 'react';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

let deliveryAddressStore = (set) => ({
    deliveryAddress: null,
    addDeliveryAddress: (address) => set((state) => ({
       deliveryAddress: address
    })),
});

deliveryAddressStore = persist(deliveryAddressStore, { name: "product_delivery_address" });
export const useDeliveryAddressStore = create(deliveryAddressStore);




