import { useFormContext } from "react-hook-form";
import Input from "../../Shared/Input/Input";

const ItinerarySection = () => {

  const {register} = useFormContext()

  return (
    <>
      <div className="contactForm row y-gap-30">
        <div className="col-12">
          <Input type="text" label="City" {...register("city")} required/>
        </div>
        <div className="col-12">
          <Input type="text" label="State" {...register("state")} required />
        </div>
        <div className="col-12">
          <Input type="text" label="Address" {...register("address")} required />
        </div>
        <div className="col-12">
          <Input type="text" label="Zip Code" {...register("zipCode")} required />
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

export default ItinerarySection;
