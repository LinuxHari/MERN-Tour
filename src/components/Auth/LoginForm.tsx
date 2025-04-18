import SimpleForm from "../Shared/Forms/SimpleForm";
import {LoginSchema, LoginSchemaType} from "../../schema/authSchema";
import SendVerificationModal from "./SendVerificationModal";
import ForgotPasswordSection from "./ForgotPasswordSection";

type FieldType = {type: "email" | "password"; name: keyof LoginSchemaType}[];

type LoginFormProps = {
  onLogin: (data: LoginSchemaType) => void;
  isLoading: boolean;
  isVerificationError: boolean;
} & ({isModal: true; modalClassName: string} | {isModal?: false; modalClassName?: never});

const LoginForm = ({onLogin, isLoading, isModal, modalClassName, isVerificationError}: LoginFormProps) => {
  const fields: FieldType = [
    {type: "email", name: "email"},
    {type: "password", name: "password"},
  ];

  return (
    <>
      <SimpleForm
        fields={fields}
        schema={LoginSchema}
        buttonText={"Log In"}
        onSubmit={onLogin}
        isLoading={isLoading}
        {...(isModal && {className: modalClassName})}
        render={isModal ? undefined : () => <ForgotPasswordSection />}
      />
      <SendVerificationModal showModal={isVerificationError} />
    </>
  );
};

export default LoginForm;
