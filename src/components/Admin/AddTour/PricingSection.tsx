import { useFormContext } from "react-hook-form";
import Input from "../../Shared/Input/Input";

const PricingSection = () => {
  const {register} = useFormContext()
  return (
    <>
      <div className="contactForm row y-gap-30">
        <div className="col-12">
          <Input label="Tour Price" type="text" {...register("price")} />
        </div>
      </div>
    </>
  );
};

export default PricingSection;
