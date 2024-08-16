import Input from "../Shared/Input/Input";
import Textarea from "../Shared/Teaxtarea/Textarea";


const TravellerInfoForm = () => {
  return (
    <div className="bg-white rounded-12 shadow-2 py-30 px-30 md:py-20 md:px-20">
      <h2 className="text-30 md:text-24 fw-700">Let us know who you are</h2>

      <div className="row y-gap-30 contactForm pt-30">
        <div className="col-12">
          <Input label="Full Name" type="text" required />
        </div>

        <div className="col-md-6">
          <Input label="Email" type="text" required />
        </div>

        <div className="col-md-6">
          <Input label="Phone Number" type="text" required />
        </div>

        <div className="col-md-6">
          <Input label="Country" type="text" required />
        </div>

        <div className="col-md-6">
          <Input label="City" type="text" required />
        </div>

        <div className="col-12">
          <Input label="Address 1" type="text" required />
        </div>

        <div className="col-12">
          <Input label="Address 2" type="text" required />
        </div>

        <div className="col-lg-6">
          <Input label="State/Province/Region" type="text" required />
        </div>

        <div className="col-lg-6">
          <Input label="ZIP code/Postal code" type="text" required />
        </div>

        <div className="col-12">
          <Textarea label="Tour Content" rows={8} required />
        </div>
      </div>
    </div>
  );
};

export default TravellerInfoForm;
