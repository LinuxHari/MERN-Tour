import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {useLayoutEffect} from "react";
import toast from "react-hot-toast";
import useUserHandler from "../../../hooks/useUserHandler";
import Button from "../../Shared/Button/Button";
import Input from "../../Shared/Input/Input";
import Textarea from "../../Shared/Teaxtarea/Textarea";
import {UserSchema, UserSchemaType} from "../../../schema/userSchema";
import {getFormErrorMessages} from "../../../utils/getFormErrorMessages";
// import ImagePlaceholder from "../AddTour/ImagePlaceholder"

const UpdateProfile = () => {
  const {user} = useUserHandler();
  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm<UserSchemaType>({
    defaultValues: {
      firstName: user?.firstName || "",
      lastName: user?.lastName || "",
      email: user?.email || "",
      city: user?.city || "",
      state: user?.state || "",
      country: user?.country || "",
      address: user?.address || "",
    },
    resolver: zodResolver(UserSchema),
  });

  useLayoutEffect(() => {
    const keys = Object.keys(errors);

    if (keys.length) {
      const {errorMessages} = getFormErrorMessages(errors);

      toast.error(errorMessages[0]);
    }
  }, [errors]);

  return (
    <form
      className="rounded-12 bg-white shadow-2 px-40 pt-40 pb-30"
      onSubmit={handleSubmit(() => {})}
      noValidate
    >
      <h5 className="text-20 fw-500 mb-30">Profile Details</h5>

      <div className="contactForm row y-gap-30">
        <div className="col-md-6">
          <Input label="Name" type="text" {...register("firstName")} />
        </div>

        <div className="col-md-6">
          <Input label="Last Name" type="text" {...register("lastName")} />
        </div>

        <div className="col-md-6">
          <Input label="Phone" type="text" {...register("phone")} />
        </div>

        <div className="col-md-6">
          <Input label="Email" type="text" {...register("email")} />
        </div>

        <div className="col-md-6">
          <Input label="City" type="text" {...register("city")} />
        </div>

        <div className="col-md-6">
          <Input label="State" type="text" {...register("state")} />
        </div>

        <div className="col-md-6">
          <Input label="Country" type="text" {...register("country")} />
        </div>

        <div className="col-md-6">
          <Textarea label="Address" rows={8} {...register("address")} />
        </div>

        {/* <div className="col-12">
          <h4 className="text-18 fw-500 mb-20">Your photo</h4>

          <div className="row x-gap-20 y-gap">
            <div className="col-auto"><ImagePlaceholder size={2}/></div>
          </div>
        </div> */}
      </div>

      <div className="d-flex pt-30">
        <Button buttonType="primary">Save Changes</Button>
      </div>
    </form>
  );
};

export default UpdateProfile;
