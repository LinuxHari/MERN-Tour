import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {useLayoutEffect} from "react";
import toast from "react-hot-toast";
import PhoneInput, {CountryData} from "react-phone-input-2";
import phone from "phone";
import "react-phone-input-2/lib/style.css";
import useUserHandler from "../../../hooks/useUserHandler";
import Button from "../../Shared/Button/Button";
import Input from "../../Shared/Input/Input";
import Textarea from "../../Shared/Teaxtarea/Textarea";
import {UserSchema, UserSchemaType} from "../../../schema/userSchema";
import {getFormErrorMessages} from "../../../utils/getFormErrorMessages";

// import ImagePlaceholder from "../AddTour/ImagePlaceholder"

const UpdateProfile = () => {
  const {user, updateProfile, isUpdatingProfile} = useUserHandler();
  const {
    register,
    handleSubmit,
    setValue,
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

  const defaultPhoneNumber = (() => {
    if (user?.country) {
      const phoneInfo = phone(user?.phone.toString(), {country: user.country});

      if (phoneInfo.isValid) {
        setValue("countryCode", parseInt(phoneInfo.countryCode));

        return phoneInfo.phoneNumber;
      }
    }
  })();

  const handlePhoneChange = (value: string, countryData: CountryData) => {
    const number = value.toString().slice(countryData.dialCode.length);
    const {isValid} = phone(value, {country: countryData.countryCode});

    if (isValid) {
      setValue("phone", parseInt(number));
      setValue("countryCode", parseInt(countryData.dialCode));
    }
  };

  useLayoutEffect(() => {
    const keys = Object.keys(errors);

    if (keys.length) {
      const {errorMessages} = getFormErrorMessages(errors);

      toast.error(errorMessages[0]);
    }
  }, [errors]);

  return (
    <form className="rounded-12 bg-white shadow-2 px-20 pt-40 pb-30" onSubmit={handleSubmit(updateProfile)} noValidate>
      <h5 className="text-20 fw-500 mb-30">Profile Details</h5>

      <div className="contactForm row y-gap-30">
        <div className="col-xl-6">
          <Input label="Name" type="text" {...register("firstName")} />
        </div>

        <div className="col-xl-6">
          <Input label="Last Name" type="text" {...register("lastName")} />
        </div>

        <div className="col-xl-6">
          <Input label="Email" type="text" {...register("email")} />
        </div>

        <div className="col-xl-6">
          <Input label="City" type="text" {...register("city")} />
        </div>

        <div className="col-xl-6">
          <Input label="State" type="text" {...register("state")} />
        </div>

        <div className="col-xl-6">
          <Input label="Country" type="text" {...register("country")} />
        </div>

        <div className="col-xl-6 py-0">
          <label className="lh-1 text-16 mx-3" htmlFor="phone">
            Phone number
          </label>
          <PhoneInput
            inputProps={{
              name: "phone",
            }}
            value={defaultPhoneNumber || ""}
            inputClass="shadow-none overflow-hidden w-100"
            country="us"
            placeholder="Enter phone number"
            onChange={handlePhoneChange}
            buttonStyle={{borderRadius: "12px 0px 0px 12px"}}
            inputStyle={{paddingLeft: "45px"}}
          />
        </div>

        <div className="col-xl-6">
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
        <Button buttonType="primary" type="submit" disabled={isUpdatingProfile}>
          Save Changes
        </Button>
      </div>
    </form>
  );
};

export default UpdateProfile;
