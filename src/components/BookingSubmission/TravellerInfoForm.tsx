import Input from "../Shared/Input/Input";
import PhoneInput, { CountryData } from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import keyToTitle from "../../utils/keyToTitle";
import { UseFormRegister, UseFormSetValue } from "react-hook-form";
import { BookingSchemaType } from "../../schema/bookingSchema";
import phone from "phone"
import Timeout from "./Timeout";

type TravellerInfoFormProps = {
  register: UseFormRegister<BookingSchemaType>;
  setValue: UseFormSetValue<BookingSchemaType>;
  expiresAt: number;
  onTimeout: () => void
}

const TravellerInfoForm = ({register, setValue, expiresAt, onTimeout}: TravellerInfoFormProps) => {
  const formFields = [{type: "text",name: "fullName"},{type: "text", name: "email"},{type: "text", name: "country"},{type: "text", name: "state"}] as const
  const handlePhoneChange = (value: string, countryData: CountryData) => {
    const number = value.toString().slice(countryData.dialCode.length)
    const { isValid } = phone(value, {country: countryData.countryCode})
    if(isValid){
      setValue("phone", parseInt(number))
      setValue("countryCode", parseInt(countryData.dialCode))
    }
  }

  return (
    <div className="bg-white rounded-12 shadow-2">
      <div className="d-flex flex-column flex-xl-row justify-content-between align-items-xl-center">
      <h2 className="text-30 md:text-24 fw-700">Let us know who you are</h2>
      <Timeout expiresAt={expiresAt} onTimeout={onTimeout} />
      </div>
      <div className="d-flex flex-wrap gap-30 contactForm pt-30">
        {formFields.map(({type, name}) => (
          <div key={name} className="mb-4 col-12">
            <Input label={keyToTitle(name)} type={type} {...register(name)}/>
          </div>
        ))}
       <div className="col-12">
       <label className="lh-1 text-16 mb-2" id="phone">Phone number</label>
        <PhoneInput
          inputProps={{
            name: "phone",
          }}
          inputClass="shadow-none overflow-hidden"
          country="us"
          placeholder="Enter phone number"
          onChange={handlePhoneChange}
          buttonStyle={{borderRadius: "12px 0px 0px 12px"}}
          inputStyle={{paddingLeft: "45px"}}
        />
      </div>
       </div>
    </div>
  );
};

export default TravellerInfoForm;
