import { LoginSchemaType, SignupSchemaType } from "../../schema/authSchema";
import { baseApi } from "./baseApi";

export const authApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation<String, LoginSchemaType>({
            query: (loginData) => ({url: "/user/login", method: "POST", body: loginData}),
        }),
        signup: builder.mutation<String, SignupSchemaType>({
            query: (signupData) => ({url: "/user/signup", method: "POST", body: signupData})
        })
    })
})

export const { useLoginMutation, useSignupMutation } = authApi