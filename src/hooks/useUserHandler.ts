import { useGetUserInfoQuery } from "../redux/api/userApi"

const useUserHandler = () => {
    const { data, isError } = useGetUserInfoQuery()
    return { data, isLoggedIn: !isError && data? true: false}
}

export default useUserHandler