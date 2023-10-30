import { configureStore } from "@reduxjs/toolkit";
// import authReducer from "./features/auth/auth.slice";
import { useDispatch, useSelector } from "react-redux";
import createInvoiceReducer from "./features/create-invoice/create-invoice.slice";

const store = configureStore({
  reducer: {
    // auth: authReducer,
    createInvoice: createInvoiceReducer
  },
});

export const useAppDispatch = useDispatch;
export const useAppSelector = useSelector;
export const RootState = store.getState();

export default store;