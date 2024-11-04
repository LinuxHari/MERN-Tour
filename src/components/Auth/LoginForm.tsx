import SimpleForm from "./SimpleForm";
import { LoginSchema, LoginSchemaType } from "../../schema/authSchema";

type FieldType = { type: "email" | "password"; name: keyof LoginSchemaType }[];

type LoginFormProps = {
  onLogin: (data: LoginSchemaType) => void;
  isLoading: boolean;
};

const LoginForm = ({ onLogin, isLoading }: LoginFormProps) => {
  const fields: FieldType = [
    { type: "email", name: "email" },
    { type: "password", name: "password" },
  ];
  return (
    <SimpleForm fields={fields} schema={LoginSchema} buttonText={"Log In"} onSubmit={onLogin} isLoading={isLoading} />
  );
};

export default LoginForm;
