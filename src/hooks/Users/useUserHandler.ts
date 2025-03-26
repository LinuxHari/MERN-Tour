import toast from "react-hot-toast";
import {useGetUserInfoQuery, useUpdatePasswordMutation, useUpdateUserInfoMutation} from "../../redux/api/userApi";
import {PasswordSchemaType, UserSchemaType} from "../../schema/userSchema";

const useUserHandler = () => {
  const {data, isError, isLoading} = useGetUserInfoQuery();
  const [updateUserInfo, {isLoading: isUpdatingProfile}] = useUpdateUserInfoMutation();
  const [updatePassword, {isLoading: isUpdatingPassword}] = useUpdatePasswordMutation();

  const updateProfile = async (userInfo: UserSchemaType) => {
    const toastId = toast.loading("Updating profile");
    const {error} = await updateUserInfo(userInfo);

    if (error) return toast.error("Failed to update profile", {id: toastId});

    return toast.success("Profile updated successfully", {id: toastId});
  };

  const updateUserPassword = async (passwords: PasswordSchemaType) => {
    const toastId = toast.loading("Updating profile");
    const {error} = await updatePassword(passwords);

    if (error) return toast.error("Failed to update profile", {id: toastId});

    return toast.success("Profile updated successfully", {id: toastId});
  };

  return {
    user: data,
    isLoggedIn: !isError && data ? true : false,
    isLoading,
    isUpdatingProfile,
    isUpdatingPassword,
    updatePassword: updateUserPassword,
    updateProfile,
  };
};

export default useUserHandler;
