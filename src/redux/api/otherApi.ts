import {baseApi} from "./baseApi";
import {ExchangeRateResponse} from "./type";

const otherApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getExchangeRate: builder.query<ExchangeRateResponse, string>({
      query: (currency) => ({
        url: `/exchange-rates/${currency}`,
      }),
    }),
  }),
});

export const {useLazyGetExchangeRateQuery, useGetExchangeRateQuery} = otherApi;
