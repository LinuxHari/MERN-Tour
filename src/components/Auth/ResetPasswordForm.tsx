import usePasswordResetHandler from "../../hooks/Users/usePasswordResetHandler";
import {ResetPasswordSchema} from "../../schema/authSchema";
import SimpleForm from "../Shared/Forms/SimpleForm";

const ResetPasswordForm = () => {
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
      onSubmit={updateUserPassword}
      isLoading={isUpdatingPassword}
    />
  );
};

export default ResetPasswordForm;
