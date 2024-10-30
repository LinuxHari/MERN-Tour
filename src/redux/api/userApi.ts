import { UserSchemaType } from "../../schema/userSchema";
import { baseApi } from "./baseApi";

const userApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getUserInfo: builder.query<UserSchemaType, void>({
            query: () => ({url: "/user/info", credentials: "include"}),
            providesTags: (user) => user? [{type: "User", id: user.email}]: [] 
        }),
    })
})

export const { useGetUserInfoQuery } = userApi