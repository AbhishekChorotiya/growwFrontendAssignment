import { create } from "zustand";

export const useProductsStore = create((set) => ({
  products: [],
  subtotal: 0,
  tax: 0,
  refetch_bool: false,
}));

export const useMerchantDataStore = create((set) => ({
    theme: {},
    name:'',
    logo:'https://groww.in/groww-logo-270.png'
  }));

export const useUserDataStore = create((set) => ({
  contact: "",
  payment_method: "cards",
  card: {
    name: "",
    number: "",
    expiry: "",
    cvv: "",
  },
  upi: {
    merchant: "",
    id: "",
  },
}));
