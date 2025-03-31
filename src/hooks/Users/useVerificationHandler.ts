import toast from "react-hot-toast";
import {useNavigate} from "react-router-dom";
import {useSendVerficationEmailMutation, useVerifyEmailMutation} from "../../redux/api/userApi";

type MailData = {
  email: string;
};

const useVerificationHandler = () => {
  const [sendVefificationMail, {isLoading: isSendingMail}] = useSendVerficationEmailMutation();
  const [verifyUserMail, {isLoading: isVerifyingMail}] = useVerifyEmailMutation();
  const navigate = useNavigate();

  const verifyMail = async (token: string) => {
    const toastId = toast.loading("Verifying email");
    const {error} = await verifyUserMail(token);

    if (error) {
      toast.error("Email verification is failed, try again later.", {id: toastId});

      return navigate("/");
    }

    toast.success("Email is verified successfully", {id: toastId});
    navigate("/login");
  };

  const sendMail = async (data: MailData) => {
    const toastId = toast.loading("Sending verification email");
    const {error} = await sendVefificationMail(data.email);

    if (error) return toast.error("Failed to send verification email", {id: toastId});

    return toast.success("Email is sent successfully", {id: toastId});
  };

  return {isSendingMail, sendMail, verifyMail, isVerifyingMail};
};

export default useVerificationHandler;
