import { useFormContext } from "react-hook-form";
import Input from "../../Shared/Input/Input";
import { RenderProps } from "../../../type";

const PriceSection = ({ render }: RenderProps) => {
  const { register } = useFormContext();

  return (
    <>
      {render("Price")}
      <div>
        <Input label="Adult" type="number" {...register("adultPrice", { valueAsNumber: true })} />
      </div>
      <div className="my-4">
        <Input label="Teen" type="number" {...register("teenPrice", { valueAsNumber: true })} />
      </div>
      <div>
        <Input label="Child" type="number" {...register("childPrice", { valueAsNumber: true })} />
      </div>
      <div className="my-4">
        <Input label="Infant" type="number" {...register("infantPrice", { valueAsNumber: true })} />
      </div>
    </>
  );
};

export default PriceSection;
