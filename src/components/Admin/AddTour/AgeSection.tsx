import { useFormContext } from "react-hook-form";
import Input from "../../Shared/Input/Input";
import { RenderProps } from "../../../type";
import { memo } from "react";
import { MIN_AGE } from "../../../config/tourConfig";

const AgeSection = ({ render }: RenderProps) => {
  const { register, watch } = useFormContext();
  const currentMinAge = parseInt(watch("minAge"))

  return (
    <>
      {render("Minimum age")}
      <div className="d-flex justify-content-between">
        <Input
          label={`Adult (${MIN_AGE .adult - 1}+)`}
          value={MIN_AGE .adult}
          type="radio"
          {...register("minAge")}
           id="minAge-adult"
          checked={currentMinAge === MIN_AGE .adult}
        />
        <Input
          label={`Teen (${MIN_AGE .teen - 1})+`}
          value={MIN_AGE .teen}
          type="radio"
          {...register("minAge")}
           id="minAge-teen"
          checked={currentMinAge === MIN_AGE .teen}
        />
          <Input
          label={`Child (${MIN_AGE .child - 1})+`}
          value={MIN_AGE .child}
          type="radio"
          {...register("minAge")}
           id="minAge-child"
          checked={currentMinAge === MIN_AGE .child}
        />
        <Input
          label={`Infant (${MIN_AGE .infant})`}
          value={MIN_AGE .infant}
          type="radio"
          {...register("minAge")}
          id="minAge-infant"
          checked={currentMinAge === MIN_AGE .infant}
        />
      </div>
    </>
  );
};

export default memo(AgeSection);
