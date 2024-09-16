import { useFormContext } from "react-hook-form";
import { RenderProps } from "../../../type";
import Input from "../../Shared/Input/Input";

const FreeCancellation = ({ render }: RenderProps) => {
  const { register } = useFormContext();

  return (
    <>
      {render("Free cancellation")}

      <div className="container px-0">
        <div className="row">
          <Input
            wrapperClassName="col"
            id="freeCancellationYes"
            label="Yes"
            type="radio"
            value="yes"
            {...register("freeCancellation")}
          />
          <Input
            wrapperClassName="col"
            id="freeCancellationNo"
            label="No"
            type="radio"
            value="no"
            {...register("freeCancellation")}
          />
        </div>
      </div>
    </>
  );
};

export default FreeCancellation;
