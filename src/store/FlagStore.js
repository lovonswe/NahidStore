import { create } from 'zustand';
import { persist } from 'zustand/middleware';

let sidebarStore = (set) => ({
    open: true,
    updateSidebarStatus: (status) => set((state) => ({
        open: status,
    })),
});

sidebarStore = persist(sidebarStore, { name: "sidebarstatus" });
export const useSidebarStore = create(sidebarStore);

let shoppingCartStore = (set) => ({
    open: false,
    updateShoppingCartStatus: (status) => set((state) => ({
        open: status,
    })),
});

shoppingCartStore = persist(shoppingCartStore, { name: "shoppingCartstatus" });
export const useShoppingCartStore = create(shoppingCartStore);