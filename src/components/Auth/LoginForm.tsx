import SimpleForm from "../Shared/Forms/SimpleForm";
import { LoginSchema, LoginSchemaType } from "../../schema/authSchema";

type FieldType = { type: "email" | "password"; name: keyof LoginSchemaType }[];

type LoginFormProps = {
  onLogin: (data: LoginSchemaType) => void;
  isLoading: boolean;
} & (
  | { isModal: true; modalClassName: string } 
  | { isModal?: false; modalClassName?: string }
)

const LoginForm = ({ onLogin, isLoading, isModal, modalClassName }: LoginFormProps) => {
  const fields: FieldType = [
    { type: "email", name: "email" },
    { type: "password", name: "password" },
  ];
  return (
    <SimpleForm fields={fields} schema={LoginSchema} buttonText={"Log In"} onSubmit={onLogin} isLoading={isLoading} {...(isModal && {className: modalClassName})}/>
  );
};

export default LoginForm;
