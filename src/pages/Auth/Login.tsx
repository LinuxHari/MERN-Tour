import SimpleForm from "../../components/Auth/SimpleForm";
import useAuthHandler from "../../hooks/useAuthHandler";
import AuthLayout from "../../layouts/AuthLayout";
import { LoginSchema } from "../../schema/AuthSchema";

type LoginFormFields = {
  email: string;
  password: string;
};

type FieldType = { type: "email" | "password"; name: keyof LoginFormFields }[];

const Login = () => {
  const conf = {
    authType: "Log In",
    description: "We're glad to see you again!",
    urlLabel: "Don't have an account?",
    urlText: "Sign up",
    url: "/signup",
  } as const;

  const fields: FieldType = [
    { type: "email", name: "email" },
    { type: "password", name: "password" },
  ];

  const { onLogin, isLoginLoading } = useAuthHandler();

  return (
    <AuthLayout {...conf}>
      <SimpleForm
        fields={fields}
        schema={LoginSchema}
        buttonText={conf.authType}
        onSubmit={onLogin}
        isLoading={isLoginLoading}
      />
    </AuthLayout>
  );
};

export default Login;
