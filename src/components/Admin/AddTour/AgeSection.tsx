import {useEffect} from "react";
import {useFormContext} from "react-hook-form";
import Input from "../../Shared/Input/Input";
import {RenderProps} from "../../../type";
import {defaultTourValue} from "../../../schema/tourSchema";
import getAgeRange from "../../../utils/getAgeRange";

const AgeSection = ({render}: RenderProps) => {
  const {register, watch, getValues, setValue} = useFormContext();
  const currentMinAge = parseInt(watch("minAge"));
  const price = getValues("price");
  const {ageRanges, getLabel} = getAgeRange();

  useEffect(() => {
    const updatedPrice = {...defaultTourValue.price, ...price};

    setValue("price", updatedPrice);
  }, [currentMinAge, price, setValue]);

  return (
    <>
      {render("Minimum age")}
      <div className="d-flex justify-content-between">
        {ageRanges.map(({category, minAge, maxAge}) => (
          <Input
            key={category}
            label={getLabel(category, minAge, maxAge)}
            value={minAge}
            type="radio"
            {...register("minAge")}
            id={`minAge-${category}`}
            checked={currentMinAge === minAge}
          />
        ))}
      </div>
    </>
  );
};

export default AgeSection;
