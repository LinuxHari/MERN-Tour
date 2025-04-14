import {useForm} from "react-hook-form";
import {useLayoutEffect} from "react";
import toast from "react-hot-toast";
import {zodResolver} from "@hookform/resolvers/zod";
import useUserHandler from "../../../hooks/Users/useUserHandler";
import Button from "../../Shared/Button/Button";
import Input from "../../Shared/Input/Input";
import {PasswordSchema, PasswordSchemaType} from "../../../schema/userSchema";
import {getFormErrorMessages} from "../../../utils/getFormErrorMessages";

const ChangePassword = () => {
  const {isUpdatingPassword, updatePassword} = useUserHandler();
  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm<PasswordSchemaType>({resolver: zodResolver(PasswordSchema)});

  useLayoutEffect(() => {
    const keys = Object.keys(errors);

    if (keys.length) {
      const {errorMessages} = getFormErrorMessages(errors);

      toast.error(errorMessages[0]);
    }
  }, [errors]);

  return (
    <div className="rounded-12 bg-white shadow-2 px-20 pt-40 pb-30 mt-30">
      <h5 className="text-20 fw-500 mb-30">Change Password</h5>

      <form className="contactForm y-gap-30" onSubmit={handleSubmit(updatePassword)} noValidate>
        <div className="row y-gap-30">
          <div className="col-md-6">
            <Input label="Old password" type="password" {...register("oldPassword")} autoComplete="off" />
          </div>
        </div>

        <div className="row">
          <div className="col-md-6">
            <Input label="New password" type="password" {...register("newPassword")} autoComplete="off" />
          </div>
        </div>

        <div className="row">
          <div className="col-md-6">
            <Input label="Confirm new password" type="password" {...register("confirmPassword")} autoComplete="off" />
          </div>
        </div>

        <div className="row">
          <div className="col-md-6 d-flex justify-content-end">
            <Button buttonType="primary" type="submit" disabled={isUpdatingPassword}>
              Save Changes
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ChangePassword;
