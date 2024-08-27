// import { useFormContext } from "react-hook-form";
import Input from "../../Shared/Input/Input";

const LocationSection = () => {

  // const {register} = useFormContext()

  return (
    <>
      <div className="contactForm row y-gap-30">
        <div className="col-12">
          <Input type="text" label="City" />
        </div>
        <div className="col-12">
          <Input type="text" label="State" required />
        </div>
        <div className="col-12">
          <Input type="text" label="Address" required />
        </div>
        <div className="col-12">
          <Input type="text" label="Zip Code" required />
        </div>
        {/* <div className="col-lg-4">
          <Input type="text" label="Map Latitude" required />
        </div>
        <div className="col-lg-4">
          <Input type="text" label="Map Longitude" required />
        </div>
        <div className="col-lg-4">
          <Input type="text" label="Map Zoom" required />
        </div> */}
      </div>
    </>
  );
};

export default LocationSection;
