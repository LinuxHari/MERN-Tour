import Input from "../Shared/Input/Input";
import PhoneInput, { CountryData } from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import keyToTitle from "../../utils/keyToTitle";

const TravellerInfoForm = () => {
  const formFields = [
    {
      type: "text",
      name: "fullName",
    },
    {
      type: "text",
      name: "email",
    },
    {
      type: "text",
      name: "state",
    },
  ] as const

  const handlePhoneChange = (value: string, countryData: CountryData) => {
    console.log(value, countryData);
  }

  return (
    <div className="bg-white rounded-12 shadow-2 py-30 px-30 md:py-20 md:px-20">
      <h2 className="text-30 md:text-24 fw-700">Let us know who you are</h2>
      <div className="d-flex flex-wrap gap-30 contactForm pt-30">
        {formFields.map(({type, name}) => (
          <div key={name} className="mb-4 col-12">
            <Input label={keyToTitle(name)} type={type} name={name} />
          </div>
        ))}
       <div className="col-12">
       <label className="lh-1 text-16 mb-2" id="phone">Phone number</label>
        <PhoneInput
          inputProps={{
            name: "phone",
          }}
          inputClass="shadow-none"
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
