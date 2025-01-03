import {useGetUserInfoQuery} from "../redux/api/userApi";

const useUserHandler = () => {
  const {data, isError, isLoading} = useGetUserInfoQuery();

  return {user: data, isLoggedIn: !isError && data ? true : false, isLoading};
};

export default useUserHandler;
