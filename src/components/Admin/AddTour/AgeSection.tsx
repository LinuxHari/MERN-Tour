import { useFormContext } from "react-hook-form";
import Input from "../../Shared/Input/Input";
import { RenderProps } from "../../../type";
import { memo } from "react";

const AgeSection = ({ render }: RenderProps) => {
  const { register } = useFormContext();

  const age = { adult: 18, children: 12, infant: 0 };

  return (
    <>
      {render("Minimum age")}
      <div className="d-flex justify-content-between">
        <Input
          label={`Adult (${age.adult}+)`}
          value={age.adult}
          type="radio"
          {...register("minAge")}
           id="minAge"
          // checked={currentMinAge === age.adult}
        />
        <Input
          label={`Children (${age.children})+`}
          value={age.children}
          type="radio"
          {...register("minAge")}
           id="minAge"
          // checked={currentMinAge === age.children}
        />
        <Input
          label={`Infant (${age.infant})+`}
          value={age.infant}
          type="radio"
          {...register("minAge")}
          id="minAge"
          // checked={currentMinAge === age.infant}
        />
      </div>
    </>
  );
};

export default memo(AgeSection);
