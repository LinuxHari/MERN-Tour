import { LoginSchemaType, SignupSchemaType } from "../../schema/AuthSchema";
import { baseApi } from "./baseApi";

export const authApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation<String, LoginSchemaType>({
            query: (loginData) => ({url: "/login", method: "POST", body: loginData})
        }),
        signup: builder.mutation<String, SignupSchemaType>({
            query: (signupData) => ({url: "/signup", method: "POST", body: signupData})
        })
    })
})

export const { useLoginMutation, useSignupMutation } = authApi