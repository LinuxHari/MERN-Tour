import { useFormContext } from "react-hook-form";
import Input from "../../Shared/Input/Input";
import { RenderProps } from "../../../type";
import { memo, useEffect } from "react";

const AgeSection = ({ render }: RenderProps) => {
  const { register, watch, setValue } = useFormContext();

  const currentMinAge = watch("minAge");

  const age = { adult: 18, children: 12, infant: 0 };

  useEffect(() => {
    if (typeof currentMinAge === 'string') {
      setValue("minAge", parseInt(currentMinAge));
    }
  }, [currentMinAge]);

  return (
    <>
      {render("Minimum age")}
      <div className="d-flex justify-content-between">
        <Input
          label="Adult"
          value={age.adult}
          type="radio"
          {...register("minAge")}
          checked={currentMinAge === age.adult}
        />
        <Input
          label="Children"
          value={age.children}
          type="radio"
          {...register("minAge")}
          checked={currentMinAge === age.children}
        />
        <Input
          label="Infant"
          value={age.infant}
          type="radio"
          {...register("minAge")}
          checked={currentMinAge === age.infant}
        />
      </div>
    </>
  );
};

export default memo(AgeSection);
