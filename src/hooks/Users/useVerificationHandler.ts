import toast from "react-hot-toast";
import {useNavigate} from "react-router-dom";
import {FetchBaseQueryError} from "@reduxjs/toolkit/query";
import {
  useSendResetPassMailMutation,
  useSendVerficationEmailMutation,
  useVerifyEmailMutation,
} from "../../redux/api/userApi";

type MailData = {
  email: string;
};

const useVerificationHandler = () => {
  const [sendVefificationMail, {isLoading: isSendingMail}] = useSendVerficationEmailMutation();
  const [verifyUserMail, {isLoading: isVerifyingMail, isError: isVerificationError}] = useVerifyEmailMutation();
  const [sendResetPassMail, {isLoading: isSendingResetMail}] = useSendResetPassMailMutation();
  const navigate = useNavigate();

  const verifyMail = async (token: string) => {
    const toastId = toast.loading("Verifying email");
    const {error} = await verifyUserMail(token);

    if (error) {
      const verificationError = error as FetchBaseQueryError;

      if (verificationError.status === 409) toast.error("Email is verified already.", {id: toastId});
      else toast.error("Email verification is failed, try again later.", {id: toastId});

      return navigate("/");
    }

    toast.success("Email is verified successfully", {id: toastId});
    navigate("/login");
  };

  const sendMail = async (data: MailData) => {
    const toastId = toast.loading("Sending verification email");
    const {error} = await sendVefificationMail(data.email);

    if (error) {
      const mailError = error as FetchBaseQueryError;

      if (mailError.status) return toast.error("Email is verified already", {id: toastId});
      else return toast.error("Failed to send verification email", {id: toastId});
    }

    return toast.success("Email is sent successfully", {id: toastId});
  };

  const sendResetMail = async (data: MailData) => {
    const toastId = toast.loading("Sending password reset email");
    const {error} = await sendResetPassMail(data.email);

    if (error) return toast.error("Failed to password reset email", {id: toastId});

    return toast.success("Email is sent successfully", {id: toastId});
  };

  return {isSendingMail, sendMail, verifyMail, isVerifyingMail, isSendingResetMail, sendResetMail, isVerificationError};
};

export default useVerificationHandler;
