import { create } from 'zustand';
import { persist } from 'zustand/middleware';

let categoryStore = (set) => ({
    categoryName: null,
    updateCategory: (status) => set((state) => ({
        categoryName: status,
    })),
});

categoryStore = persist(categoryStore, { name: "category" });
export const usecategoryStore = create(categoryStore);

let subCategoryStore = (set) => ({
    subCategoryName: null,
    updateSubCategory: (status) => set((state) => ({
        subCategoryName: status,
    })),
});

subCategoryStore = persist(subCategoryStore, { name: "sub_category" });
export const useSubCategoryStore = create(subCategoryStore);

let subSubCategoryStore = (set) => ({
    subSubCategoryName: null,
    updateSubSubCategory: (status) => set((state) => ({
        subSubCategoryName: status,
    })),
});

subSubCategoryStore = persist(subSubCategoryStore, { name: "sub_sub_category" });
export const useSubSubCategoryStore = create(subSubCategoryStore);