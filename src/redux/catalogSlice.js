import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchCatalog = createAsyncThunk(
  "catalog/fetchCatalog",
  async () => {
    const { data } = await axios.get(`https://moscow.fargospc.ru/test/json/`);
    return data;
  }
);
const initialState = {
  items: [],
};

export const catalogSlice = createSlice({
  name: "catalog",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchCatalog.pending]: (state) => {
      state.items = [];
    },
    [fetchCatalog.fulfilled]: (state, action) => {
      state.items = action.payload;
    },
    [fetchCatalog.rejected]: (state) => {
      console.log(`ошибка запроса`);

      state.items = [];
    },
  },
});
export const { SetCatalogItems } = catalogSlice.actions;
export default catalogSlice.reducer;
