import { UserSchemaType } from "../../schema/userSchema";
import { baseApi } from "./baseApi";

const userApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getUserInfo: builder.query<UserSchemaType, string>({
            query: () => "/user/info"
        })
    })
})

export const { useGetUserInfoQuery } = userApi