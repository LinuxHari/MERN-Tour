import { useLocation } from "react-router-dom";

enum Path {
  login = "login",
  signup = "signup",
}

type FieldType = { type: "text" | "email" | "password"; label: string }

const useAuthHandler = () => {
    const authConf = {
      login: {
        authType: "Log In",
        desc: "We're glad to see you again!",
        urlLabel: "Don't have an account?",
        urlText: "Sign up",
        url: "/signup",
        fields: [
          { type: "text", label: "Name" },
          { type: "email", label: "Email" },
          { type: "password", label: "Password" },
          { type: "password", label: "Confirm password" },
        ] as Array<FieldType>,
      },
      signup: {
        authType: "Sign Up",
        desc: "Let's create your account!",
        urlLabel: "Already have an account?",
        urlText: "Log in",
        url: "/login",
        fields: [
          { type: "email", label: "Email" },
          { type: "password", label: "Password" },
        ] as Array<FieldType>,
      },
    } as const;
  
    const { pathname } = useLocation();
    const page = pathname.slice(1) as Path;
  
    return { authConf: authConf[page] };
  };  

export default useAuthHandler;
