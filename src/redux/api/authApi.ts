import { LoginSchemaType, SignupSchemaType } from "../../schema/authSchema";
import { baseApi } from "./baseApi";

export const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation<void, LoginSchemaType>({
      query: (loginData) => ({ url: "/user/login", method: "POST", body: loginData, credentials: "include" }),
      invalidatesTags: ["UNAUTHORIZED"],
    }),
    signup: builder.mutation<void, SignupSchemaType>({
      query: (signupData) => ({ url: "/user/signup", method: "POST", body: signupData }),
    }),
    logout: builder.mutation<void, string>({
      query: () => ({ url: "/user/logout", method: "POST", credentials: "include" }),
      invalidatesTags: (_, __, email) => [{ type: "User", id: email }]
    }),
  }),
});

export const { useLoginMutation, useSignupMutation, useLogoutMutation } = authApi;
