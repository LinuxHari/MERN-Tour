import {memo, useEffect} from "react";
import {useFormContext} from "react-hook-form";
import Input from "../../Shared/Input/Input";
import {RenderProps} from "../../../type";
import {MIN_AGE} from "../../../config/tourConfig";
import {defaultTourValue} from "../../../schema/tourSchema";

const AgeSection = ({render}: RenderProps) => {
  const {register, watch, getValues, setValue} = useFormContext();
  const currentMinAge = parseInt(watch("minAge"));
  const price = getValues("price");

  useEffect(() => {
    if (currentMinAge === MIN_AGE.adult) setValue("price", {...defaultTourValue.price, adult: price.adult});
    else if (currentMinAge === MIN_AGE.teen)
      setValue("price", {
        infant: defaultTourValue.price.infant,
        child: defaultTourValue.price.child,
        teen: price.teen,
        adult: price.adult,
      });
    else if (currentMinAge === MIN_AGE.child)
      setValue("price", {
        infant: defaultTourValue.price.infant,
        child: price.child,
        teen: price.teen,
        adult: price.adult,
      });
    else if (currentMinAge === MIN_AGE.infant)
      setValue("price", {
        infant: price.infant,
        child: price.child,
        teen: price.teen,
        adult: price.adult,
      });
  }, [currentMinAge]);

  return (
    <>
      {render("Minimum age")}
      <div className="d-flex justify-content-between">
        <Input
          label={`Adult (${MIN_AGE.adult - 1}+)`}
          value={MIN_AGE.adult}
          type="radio"
          {...register("minAge")}
          id="minAge-adult"
          checked={currentMinAge === MIN_AGE.adult}
        />
        <Input
          label={`Teen (${MIN_AGE.teen - 1})+`}
          value={MIN_AGE.teen}
          type="radio"
          {...register("minAge")}
          id="minAge-teen"
          checked={currentMinAge === MIN_AGE.teen}
        />
        <Input
          label={`Child (${MIN_AGE.child - 1})+`}
          value={MIN_AGE.child}
          type="radio"
          {...register("minAge")}
          id="minAge-child"
          checked={currentMinAge === MIN_AGE.child}
        />
        <Input
          checked={currentMinAge === MIN_AGE.infant}
          id="minAge-infant"
          label={`Infant (${MIN_AGE.infant} - ${MIN_AGE.child - 1})`}
          type="radio"
          value={MIN_AGE.infant}
          {...register("minAge")}
        />
      </div>
    </>
  );
};

const MemoizedAgeSection = memo(AgeSection);

export default MemoizedAgeSection;
