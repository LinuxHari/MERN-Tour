import { useFormContext } from "react-hook-form";
import Input from "../../Shared/Input/Input";
import { RenderProps } from "../../../type";
import { MIN_AGE } from "../../../config/tourConfig";

const PriceSection = ({ render }: RenderProps) => {
  const { register, getValues } = useFormContext();
  const minAge = getValues("minAge");
  const priceFields = [
    { label: "Adult", name: "price.adult" },
    { label: "Teen", name: "price.teen" },
    { label: "Child", name: "price.child" },
    { label: "Infant", name: "price.infant" },
  ];

  return (
    <>
      {render("Price")}
      {priceFields.map((field, index) =>
        minAge <= MIN_AGE[field.label.toLowerCase() as keyof typeof MIN_AGE] ? (
          <div key={field.name} className={index % 2 === 1 ? "my-4" : ""}>
            <Input label={field.label} type="number" {...register(field.name, { valueAsNumber: true })} />
          </div>
        ) : null
      )}
    </>
  );
};

export default PriceSection;
