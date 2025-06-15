import {BaseQueryFn, FetchArgs, fetchBaseQuery, FetchBaseQueryError} from "@reduxjs/toolkit/query";
import env from "../config/envConfig";

const baseQuery = fetchBaseQuery({
  baseUrl: `${env.API_BASE_URL}`,
});

const baseQueryWithReauth: BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError> = async (
  args,
  api,
  extraOptions,
) => {
  let result = await baseQuery(args, api, extraOptions);

  if (result.error && result.error.status === 401) {
    await baseQuery({url: "/refresh-token", method: "GET", credentials: "include"}, api, extraOptions);

    result = await baseQuery(args, api, extraOptions);
  }

  return result;
};

export default baseQueryWithReauth;
