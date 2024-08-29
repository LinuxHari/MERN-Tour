import { useFieldArray, useFormContext } from "react-hook-form";
import Input from "../../Shared/Input/Input";
import Button from "../../Shared/Button/Button";

const FAQSection = () => {
  const { register } = useFormContext();
  const { fields, append, remove } = useFieldArray({ name: "faq", rules: { minLength: 2 } });

  return (
    <>
      <div className="contactForm row y-gap-30">
        {fields.map((field, index) => (
          <div className="col-12" key={field.id}>
            <Input
              label={`Question ${index + 1}`}
              type="text"
              {...register(`faq.${index}.question`)}
            />
            <Input
              label={`Answer ${index + 1}`}
              type="text"
              {...register(`faq.${index}.answer`)}
            />
           {
            index > 1 && <Button buttonType="secondary" showIcon={false} onClick={() => remove(index)}>
            <i className="icon-delete" />
          </Button>
           }
          </div>
        ))}
        <Button
          buttonType="primary"
          className="-md -outline-dark-1 text-dark bg-light-1"
          showIcon={false}
          onClick={() => append({ question: "", answer: "" })}
        >
          <i className="icon-add-button text-16 mr-10" />
          Add FAQ
        </Button>
      </div>
    </>
  );
};


export default FAQSection;
