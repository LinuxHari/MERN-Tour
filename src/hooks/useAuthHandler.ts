import { useState } from "react";
import { useLoginMutation, useLogoutMutation, useSignupMutation } from "../redux/api/authApi";
import { LoginSchemaType, SignupSchemaType } from "../schema/authSchema";
import useAfterEffect from "./useAfterEffect";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { FetchBaseQueryError } from "@reduxjs/toolkit/query";

type LoginData = LoginSchemaType & {
  skipRedirect?: boolean
}

const useAuthHandler = () => {
  const [login, { isLoading: isLoginLoading, isError: isLoginError, error: loginError }] = useLoginMutation();
  const [signup, { isLoading: isSignupLoading, isError: isSignupError, isSuccess: isSignupSuccess, error: signupError }] = useSignupMutation();
  const [logout, { isLoading: isLogoutLoading, isError: isLogoutError, isSuccess: isLogoutSuccess }] = useLogoutMutation();
  const [toastId, setToastId] = useState<string | null>(null)
  const [skipRedirect, setSkipRedirect] = useState(false)
  const navigate = useNavigate()

  const handleToast = (message: string) => {
    const toastId = toast.loading(message);
    setToastId(toastId)
  }

  const onLogin = async (data: LoginData) => {
    handleToast('Signing up...');
    const { skipRedirect, ...loginData } = data
    if(skipRedirect)
      setSkipRedirect(skipRedirect)
    await login(loginData);
  };

  const onSignup = async (data: SignupSchemaType) => {
    handleToast('Logging in...');
    await signup(data);
  };

  const onLogout = async (email: LoginSchemaType["email"]) => {
    handleToast('Logging out...');
    await logout(email);
  };

  useAfterEffect(() => {
    if(!isSignupLoading && !isLoginLoading && !isLogoutLoading && toastId){
      if(isSignupError || isLoginError || isLogoutError){
        const assertedSignupError = signupError as FetchBaseQueryError
        const assertedLoginError = loginError as FetchBaseQueryError
        const status = assertedLoginError ? assertedLoginError.status: assertedSignupError? assertedSignupError.status: null
        const message = (() => {
          if (isLogoutError) return "Failed logging out";
          if (status === 409) return "User with given email already exists";
          if (status === 500) return "Something went wrong";
          return "Invalid email or password";
        })();        
        toast.error(message, { id: toastId });
      } else {
        const message = isSignupSuccess? "Account created": isLogoutSuccess? "Logged out": "Logged in"
        toast.success(`${message} successfully`, { id: toastId });
        if(skipRedirect){
          setTimeout(() => {
            if(isSignupSuccess)
              navigate("/login")
            else
              navigate("/")
          }, 1000)
        }
      }
     }
  }, [isLoginError, isSignupError, isLogoutError, isLoginLoading, isSignupLoading, isLogoutLoading])

  return { onLogin, onSignup, isLoginLoading, isSignupLoading, onLogout };
};

export default useAuthHandler;
