import toast from "react-hot-toast";
import isEqual from "lodash/isEqual";
import {useGetUserInfoQuery, useUpdatePasswordMutation, useUpdateUserInfoMutation} from "../../redux/api/userApi";
import {PasswordSchemaType, UserSchemaType} from "../../schema/userSchema";

const useUserHandler = () => {
  const {data: user, isError, isLoading} = useGetUserInfoQuery();
  const [updateUserInfo, {isLoading: isUpdatingProfile}] = useUpdateUserInfoMutation();
  const [updatePassword, {isLoading: isUpdatingPassword}] = useUpdatePasswordMutation();

  const defaultValues = {
    firstName: user?.firstName || "",
    lastName: user?.lastName || "",
    email: user?.email || "",
    city: user?.city || "",
    state: user?.state || "",
    country: user?.country || "",
    address: user?.address || "",
    phone: user?.phone,
    countryCode: user?.countryCode,
  };

  const updateProfile = async (userInfo: UserSchemaType) => {
    if (isEqual(defaultValues, userInfo)) return toast.error("No changes to update", {id: "profile-error"});

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
    user,
    isLoggedIn: !isError && user ? true : false,
    isLoading,
    isUpdatingProfile,
    isUpdatingPassword,
    defaultValues,
    updatePassword: updateUserPassword,
    updateProfile,
  };
};

export default useUserHandler;
