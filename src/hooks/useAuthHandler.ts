import { useLocation } from "react-router-dom";
import { LoginSchema, SignupSchema } from "../schema/AuthSchema";

enum Path {
  login = "login",
  signup = "signup",
}

type FieldType = { type: "text" | "email" | "password"; name: string }

const useAuthHandler = () => {
    const authConf = {
      login: {
        authType: "Log In",
        desc: "We're glad to see you again!",
        urlLabel: "Don't have an account?",
        urlText: "Sign up",
        url: "/signup",
        fields: [
          { type: "email", name: "email" },
          { type: "password", name: "password" },
        ] as Array<FieldType>,
      },
      signup: {
        authType: "Sign Up",
        desc: "Let's create your account!",
        urlLabel: "Already have an account?",
        urlText: "Log in",
        url: "/login",
        fields: [
          { type: "text", name: "firstName" },
          { type: "text", name: "lastName" },
          { type: "email", name: "email" },
          { type: "password", name: "password" },
          { type: "password", name: "confirmPassword" },
        ] as Array<FieldType>,
      },
    }
  
    const { pathname } = useLocation();
    const page = pathname.slice(1) as Path;
    const authSchema = Path.login === page? LoginSchema: SignupSchema
    const onSubmit = (data: typeof authSchema) => {

    }
  
    return { authConf: authConf[page], authSchema, onSubmit };
  };  

export default useAuthHandler;
