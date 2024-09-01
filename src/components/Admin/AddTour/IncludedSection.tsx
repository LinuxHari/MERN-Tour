import { useFormContext } from "react-hook-form";
import Input from "../../Shared/Input/Input";

const IncludedSection = () => {
  const { register } = useFormContext();

  const includedItems = {
    beverages: "Beverages, drinking water, morning tea and buffet lunch",
    localTaxes: "Local taxes",
    hotelPickup: "Hotel pickup and drop-off",
    insuranceTransfer: "Insurance Transfer",
    softDrinks: "Soft drinks",
    tourGuide: "Tour guide",
    towel: "Towel",
    tips: "Tips",
    alcoholicBeverages: "Alcoholic Beverages",
  };

  return (
    <div className="row y-gap-20 justify-between">
      <div className="col-md-8">
        <div className="row y-gap-20">
          <div className="col-12">
            <Input type="checkbox" label={includedItems.beverages} {...register("included.beverages")} />
          </div>

          <div className="col-12">
            <Input type="checkbox" label={includedItems.localTaxes} {...register("included.localTaxes")} />
          </div>

          <div className="col-12">
            <Input type="checkbox" label={includedItems.hotelPickup} {...register("included.hotelPickup")} />
          </div>

          <div className="col-12">
            <Input
              type="checkbox"
              label={includedItems.insuranceTransfer}
              {...register("included.insuranceTransfer")}
            />
          </div>

          <div className="col-12">
            <Input type="checkbox" label={includedItems.softDrinks} {...register("included.softDrinks")} />
          </div>

          <div className="col-12">
            <Input type="checkbox" label={includedItems.tourGuide} {...register("included.tourGuide")} />
          </div>
        </div>
      </div>

      <div className="col-md-4">
        <div className="row y-gap-20">
          <div className="col-12">
            <Input type="checkbox" label={includedItems.towel} {...register("included.towel")} />
          </div>

          <div className="col-12">
            <Input type="checkbox" label={includedItems.tips} {...register("included.tips")} />
          </div>

          <div className="col-12">
            <Input
              type="checkbox"
              label={includedItems.alcoholicBeverages}
              {...register("included.alcoholicBeverages")}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default IncludedSection;
