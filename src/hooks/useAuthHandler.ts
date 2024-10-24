import { useLoginMutation, useSignupMutation } from "../redux/api/authApi";
import { LoginSchemaType, SignupSchemaType } from "../schema/AuthSchema";

const useAuthHandler = () => {
    const [login, { isLoading:isLoginLoading, isError: isLoginError }] = useLoginMutation()
    const [signup, { isLoading:isSignupLoading, isError: isSignupError }] = useSignupMutation()

    const onLogin = async(data: LoginSchemaType) => {
      await login(data)
    }

    const onSignup = async(data: SignupSchemaType) => {
      await signup(data)
    }
  
    return {onLogin, onSignup, isLoginLoading, isSignupLoading};
  };  

export default useAuthHandler;
