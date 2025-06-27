import {FetchBaseQueryError} from "@reduxjs/toolkit/query";
import {useState} from "react";
import toast from "react-hot-toast";
import {useNavigate} from "react-router-dom";
import {useUpdateResetPasswordMutation, useVerifyResetTokenMutation} from "../../redux/api/userApi";
import {UpdatePasswordBody} from "../../redux/api/type";

const usePasswordResetHandler = () => {
  const [verifyResetToken, {isLoading: isVerifyingToken, isSuccess: isTokenVerified}] = useVerifyResetTokenMutation();
  const [updatePassword, {isLoading: isUpdatingPassword}] = useUpdateResetPasswordMutation();
  const [showVerifyModal, setShowVerifyModal] = useState(false);
  const navigate = useNavigate();

  const verifyToken = async (token: string) => {
    const {error} = await verifyResetToken(token);

    if (error) {
      const verificationError = error as FetchBaseQueryError;

      if (verificationError.status === 401) {
        toast.error("Email is not verified yet");

        return setShowVerifyModal(true);
      } else return toast.error("Invalid token");
    }
  };

  const updateUserPassword = async (data: UpdatePasswordBody) => {
    const toastId = toast.loading("Changing password");
    const {error} = await updatePassword(data);

    if (error) {
      const verificationError = error as FetchBaseQueryError;

      if (verificationError.status === 401) {
        toast.error("Email is not verified yet");

        return setShowVerifyModal(true);
      } else return toast.error("Failed to change password");
    }

    toast.success("Password is changed successfully", {id: toastId});
    navigate("/login");
  };

  const closeVerifyModal = () => setShowVerifyModal(false);

  return {
    verifyToken,
    isVerifyingToken,
    isTokenVerified,
    updateUserPassword,
    isUpdatingPassword,
    showVerifyModal,
    closeVerifyModal,
  };
};

export default usePasswordResetHandler;
