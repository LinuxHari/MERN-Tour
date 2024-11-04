import LoginForm from "../../components/Auth/LoginForm";
import useAuthHandler from "../../hooks/useAuthHandler";
import AuthLayout from "../../layouts/AuthLayout";

const Login = () => {
  const conf = {
    authType: "Log In",
    description: "We're glad to see you again!",
    urlLabel: "Don't have an account?",
    urlText: "Sign up",
    url: "/signup",
  } as const;

  const { onLogin, isLoginLoading } = useAuthHandler();

  return (
    <AuthLayout {...conf}>
        <LoginForm onLogin={onLogin} isLoading={isLoginLoading}/>
    </AuthLayout>
  );
};

export default Login;
