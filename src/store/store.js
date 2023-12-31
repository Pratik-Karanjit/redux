import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counterSlice";
import addressSlice from "../features/addressSlice";
import productSlice from "../features/productSlice";
import blogSlice from "../features/blogSlice";
import courseSlice from "../features/courseSlice";
import { productApi } from "../services/productServices";


export const store = configureStore({
  reducer: {
    info: counterReducer,
    address: addressSlice,
    product: productSlice,
    blog: blogSlice,
    course: courseSlice,
    [productApi.reducerPath]: productApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    getDefaultMiddleware().concat([
      productApi.middleware,
    ])
  }
});
