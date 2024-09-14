import { useFormContext } from "react-hook-form";
import Input from "../../Shared/Input/Input";
import { RenderProps } from "../../../type";
import { memo } from "react";

const AgeSection = ({ render }: RenderProps) => {
  const { register, watch } = useFormContext();

  const age = { adult: 18, children: 12, infant: 0 };

  const currentMinAge = parseInt(watch("minAge"))

  return (
    <>
      {render("Minimum age")}
      <div className="d-flex justify-content-between">
        <Input
          label={`Adult (${age.adult}+)`}
          value={age.adult}
          type="radio"
          {...register("minAge")}
           id="minAge-adult"
          checked={currentMinAge === age.adult}
        />
        <Input
          label={`Children (${age.children})+`}
          value={age.children}
          type="radio"
          {...register("minAge")}
           id="minAge-children"
          checked={currentMinAge === age.children}
        />
        <Input
          label={`Infant (${age.infant})+`}
          value={age.infant}
          type="radio"
          {...register("minAge")}
          id="minAge-infant"
          checked={currentMinAge === age.infant}
        />
      </div>
    </>
  );
};

export default memo(AgeSection);
