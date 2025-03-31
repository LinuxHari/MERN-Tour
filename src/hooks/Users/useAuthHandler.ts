import {useCallback, useState} from "react";
import toast from "react-hot-toast";
import {useNavigate} from "react-router-dom";
import {FetchBaseQueryError} from "@reduxjs/toolkit/query";
import {useLoginMutation, useLogoutMutation, useSignupMutation} from "../../redux/api/authApi";
import {LoginSchemaType, SignupSchemaType} from "../../schema/authSchema";
import useVerificationHandler from "./useVerificationHandler";

type LoginData = LoginSchemaType & {
  skipRedirect?: boolean;
};

// Custom hooks in this project may look like it does not follow interface segregation from SOLID principle but it is arguable and hooks here does not force components to use props returned

const useAuthHandler = () => {
  const [login, {isLoading: isLoginLoading}] = useLoginMutation();
  const [signup, {isLoading: isSignupLoading}] = useSignupMutation();
  const [logout] = useLogoutMutation();
  const {sendMail, isSendingMail} = useVerificationHandler();
  const [isVerificationError, setVerificationError] = useState(false);
  const navigate = useNavigate();

  const onLogin = useCallback(async (data: LoginData) => {
    const toastId = toast.loading("Signing up...");
    const {skipRedirect, ...loginData} = data;

    const {error} = await login(loginData);

    if (error) {
      const loginError = error as FetchBaseQueryError;

      if (loginError.status === 500) return toast.error("Something went wrong", {id: toastId});
      else if (loginError.status === 401) {
        setVerificationError(true);

        return toast.error("Email is not verified yet", {id: toastId});
      } else return toast.error("Invalid email or password", {id: toastId});
    }
    toast.success("Logged in successfully", {id: toastId});
    if (!skipRedirect)
      setTimeout(() => {
        navigate("/");
      }, 1000);
  }, []);

  const onSignup = useCallback(async (data: SignupSchemaType) => {
    const toastId = toast.loading("Logging in...");
    const {error} = await signup(data);

    if (error) {
      const signupError = error as FetchBaseQueryError;

      if (signupError.status === 409)
        return toast.error("User with given email already exists", {
          id: toastId,
        });
      else return toast.error("Something went wrong", {id: toastId});
    }
    toast.success(`A verification email is sent to ${data.email}`, {id: toastId});
    setTimeout(() => {
      navigate("/login");
    }, 1000);
  }, []);

  const onLogout = useCallback(async (email: LoginSchemaType["email"]) => {
    const toastId = toast.loading("Logging out...");
    const {error} = await logout(email);

    if (error) return toast.error("Failed to logout", {id: toastId});
    toast.success("Logged out successfully", {id: toastId});
    navigate("/");
  }, []);

  return {onLogin, onSignup, isLoginLoading, isSignupLoading, onLogout, sendMail, isSendingMail, isVerificationError};
};

export default useAuthHandler;
