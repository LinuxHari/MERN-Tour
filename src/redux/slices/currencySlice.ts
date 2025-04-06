import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  currency: "USD",
  exchangeRate: 1,
  currencyCode: "$",
};

const currencySlice = createSlice({
  name: "currency",
  initialState,
  reducers: {
    setCurrency: (state, action) => {
      state.currency = action.payload;
    },
    setExchangeRate: (state, action) => {
      state.exchangeRate = action.payload.exchangeRate;
      state.currencyCode = action.payload.currencyCode;
    },
  },
});

export const {setCurrency, setExchangeRate} = currencySlice.actions;
export default currencySlice.reducer;
