import toast from "react-hot-toast";
import {
  useGetUserInfoQuery,
  useUpdateUserInfoMutation,
} from "../redux/api/userApi";
import {UserSchemaType} from "../schema/userSchema";

const useUserHandler = () => {
  const {data, isError, isLoading: isUpdatingProfile} = useGetUserInfoQuery();
  const [updateUserInfo, {isLoading}] = useUpdateUserInfoMutation();

  const updateProfile = async (userInfo: UserSchemaType) => {
    const toastId = toast.loading("Updating profile");
    const {error} = await updateUserInfo(userInfo);

    if (error) return toast.error("Failed to update profile", {id: toastId});

    return toast.success("Profile updated successfully", {id: toastId});
  };

  return {
    user: data,
    isLoggedIn: !isError && data ? true : false,
    isLoading,
    isUpdatingProfile,
    updateProfile,
  };
};

export default useUserHandler;
