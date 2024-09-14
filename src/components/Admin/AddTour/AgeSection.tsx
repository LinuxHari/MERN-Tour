import { useFormContext } from "react-hook-form";
import Input from "../../Shared/Input/Input";
import { RenderProps } from "../../../type";
import { memo } from "react";
import { minAge } from "../../../config/tourConfig";

const AgeSection = ({ render }: RenderProps) => {
  const { register, watch } = useFormContext();

  const currentMinAge = parseInt(watch("minAge"))

  return (
    <>
      {render("Minimum age")}
      <div className="d-flex justify-content-between">
        <Input
          label={`Adult (${minAge.adult - 1}+)`}
          value={minAge.adult}
          type="radio"
          {...register("minAge")}
           id="minAge-adult"
          checked={currentMinAge === minAge.adult}
        />
        <Input
          label={`Teen (${minAge.teen - 1})+`}
          value={minAge.teen}
          type="radio"
          {...register("minAge")}
           id="minAge-children"
          checked={currentMinAge === minAge.teen}
        />
        <Input
          label={`Infant (${minAge.infant})`}
          value={minAge.infant}
          type="radio"
          {...register("minAge")}
          id="minAge-infant"
          checked={currentMinAge === minAge.infant}
        />
      </div>
    </>
  );
};

export default memo(AgeSection);
