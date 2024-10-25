import { useState } from "react";
import { useLoginMutation, useSignupMutation } from "../redux/api/authApi";
import { LoginSchemaType, SignupSchemaType } from "../schema/AuthSchema";
import useAfterEffect from "./useAfterEffect";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { FetchBaseQueryError } from "@reduxjs/toolkit/query";

const useAuthHandler = () => {
  const [login, { isLoading: isLoginLoading, isError: isLoginError, isSuccess: isLoginSuccess, error: loginError }] = useLoginMutation();
  const [signup, { isLoading: isSignupLoading, isError: isSignupError, isSuccess: isSignupSuccess, error: signupError }] = useSignupMutation();
  const [toastId, setToastId] = useState<string | null>(null)
  const navigate = useNavigate()

  const onLogin = async (data: LoginSchemaType) => {
    const toastId = toast.loading('Signing up...');
    setToastId(toastId)
    await login(data);
  };

  const onSignup = async (data: SignupSchemaType) => {
    const toastId = toast.loading('Logging in...');
    setToastId(toastId)
    await signup(data);
  };

  useAfterEffect(() => {
    if(!isSignupLoading && !isLoginLoading && toastId){
      if(isSignupError || isLoginError || !isLoginSuccess || !isSignupSuccess){
        const assertedSignupError = signupError as FetchBaseQueryError
        const assertedLoginError = loginError as FetchBaseQueryError
        const status = assertedLoginError ? assertedLoginError.status: assertedSignupError.status
        const message = status === 409? "User with given email already exists": status === 500? "Something went wrong": "Invalid email or password"
        toast.error(message, { id: toastId });
      } else {
        const message = isSignupSuccess? "Account created": "Logged in"
        toast.success(`${message} successfully`, { id: toastId });
        setTimeout(() => {
          if(isSignupSuccess)
            navigate("/login")
          else
            navigate("/")
        }, 1000)
      }
     }
  }, [isLoginError, isSignupError, isLoginLoading, isSignupLoading])

  return { onLogin, onSignup, isLoginLoading, isSignupLoading };
};

export default useAuthHandler;
