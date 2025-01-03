import {useFieldArray, useFormContext} from "react-hook-form";
import Input from "../../Shared/Input/Input";
import Button from "../../Shared/Button/Button";
import {RenderProps} from "../../../type";

const TourHighlights = ({render}: RenderProps) => {
  const {register} = useFormContext();
  const {fields, append, remove} = useFieldArray({
    name: "highlights",
    rules: {minLength: 2, maxLength: 10},
  });

  return (
    <>
      {render("Highlights")}
      {fields.map((field, index: number) => (
        <div key={field.id} className="d-flex gap-3 align-items-center mt-30 w-100">
          <div className="flex-grow-1">
            <Input
              type="text"
              label={`Hightlight ${index + 1}`}
              {...register(`highlights.${index}.value`)}
            />
          </div>
          {index > 1 && (
            <Button
              buttonType="icon"
              className="p-4 -outline-accent-1 text-accent-1"
              showIcon={false}
              onClick={() => remove(index)}
            >
              <i className="icon-delete text-20" />
            </Button>
          )}
        </div>
      ))}
      {fields.length < 10 && (
        <Button
          buttonType="primary"
          className="-md -outline-dark-1 text-dark bg-light-1 mt-30"
          showIcon={false}
          onClick={() => append({value: ""})}
        >
          <i className="icon-add-button text-16 mr-10" />
          Add highlight
        </Button>
      )}
    </>
  );
};

export default TourHighlights;
