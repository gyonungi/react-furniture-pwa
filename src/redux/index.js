import { configureStore } from "@reduxjs/toolkit";
import catalog from "./catalogSlice";

export const store = configureStore({
    reducer: {catalog },
  });