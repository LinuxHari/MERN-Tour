import usePasswordResetHandler from "../../hooks/Users/usePasswordResetHandler";
import {ResetPasswordSchema} from "../../schema/authSchema";
import SimpleForm from "../Shared/Forms/SimpleForm";

type ResetPasswordFormProps = {
  accessToken: string;
};

const ResetPasswordForm = ({accessToken}: ResetPasswordFormProps) => {
  const fields = [
    {type: "password", name: "newPassword"},
    {type: "password", name: "confirmPassword"},
  ] as const;

  const {updateUserPassword, isUpdatingPassword} = usePasswordResetHandler();

  return (
    <SimpleForm
      fields={[...fields]}
      schema={ResetPasswordSchema}
      buttonText="Reset Password"
      onSubmit={(data) => updateUserPassword({...data, accessToken})}
      isLoading={isUpdatingPassword}
    />
  );
};

export default ResetPasswordForm;
