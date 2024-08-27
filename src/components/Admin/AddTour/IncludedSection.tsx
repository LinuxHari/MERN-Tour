import { useFormContext } from "react-hook-form";
import Input from "../../Shared/Input/Input";

const IncludedSection = () => {
  const { register } = useFormContext(); // Access the form context for registration

  return (
    <div className="row y-gap-20 justify-between">
      <div className="col-md-8">
        <div className="row y-gap-20">
          <div className="col-12">
            <Input
              type="checkbox"
              label="Beverages, drinking water, morning tea and buffet lunch"
              {...register("included.beverages")}
            />
          </div>

          <div className="col-12">
            <Input
              type="checkbox"
              label="Local taxes"
              {...register("included.localTaxes")}
            />
          </div>

          <div className="col-12">
            <Input
              type="checkbox"
              label="Hotel pickup and drop-off by air-conditioned minivan"
              {...register("included.hotelPickup")}
            />
          </div>

          <div className="col-12">
            <Input
              type="checkbox"
              label="Insurance Transfer to a private pier"
              {...register("included.insuranceTransfer")}
            />
          </div>

          <div className="col-12">
            <Input
              type="checkbox"
              label="Soft drinks"
              {...register("included.softDrinks")}
            />
          </div>

          <div className="col-12">
            <Input
              type="checkbox"
              label="Tour Guide"
              {...register("included.tourGuide")}
            />
          </div>
        </div>
      </div>

      <div className="col-md-4">
        <div className="row y-gap-20">
          <div className="col-12">
            <Input
              type="checkbox"
              label="Towel"
              {...register("included.towel")}
            />
          </div>

          <div className="col-12">
            <Input
              type="checkbox"
              label="Tips"
              {...register("included.tips")}
            />
          </div>

          <div className="col-12">
            <Input
              type="checkbox"
              label="Alcoholic Beverages"
              {...register("included.alcoholicBeverages")}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default IncludedSection;
