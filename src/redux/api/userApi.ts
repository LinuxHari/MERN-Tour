import { UserSchemaType } from "../../schema/userSchema";
import { UserInfoResponse } from "../../type";
import { baseApi } from "./baseApi";

const userApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getUserInfo: builder.query<UserInfoResponse, void>({
            query: () => ({url: "/user/info", credentials: "include"}),
            providesTags: (user) => user? [{type: "User", id: user.email}]: ["UNAUTHORIZED"] 
        }),
    })
})

export const { useGetUserInfoQuery } = userApi