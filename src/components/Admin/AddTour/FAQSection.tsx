import {useFieldArray, useFormContext} from "react-hook-form";
import Input from "../../Shared/Input/Input";
import Button from "../../Shared/Button/Button";

const FAQSection = () => {
  const {register} = useFormContext();
  const {fields, append, remove} = useFieldArray({
    name: "faq",
    rules: {minLength: 2, maxLength: 10},
  });

  return (
    <>
      <div className="contactForm row y-gap-30">
        {fields.map((field, index) => (
          <div className="col-12" key={field.id}>
            <div className="d-flex justify-content-between">
              <h4 className="text-18 fw-500 mb-20">FAQ {index + 1}</h4>
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
            <Input
              label={`Question ${index + 1}`}
              type="text"
              {...register(`faq.${index}.question`)}
            />
            <Input
              wrapperClassName="mt-30"
              label="Answer"
              type="text"
              {...register(`faq.${index}.answer`)}
            />
          </div>
        ))}
        {fields.length < 10 && (
          <Button
            buttonType="primary"
            className="button mt-30 -md -outline-dark-1 text-dark bg-light-1 ml-15"
            showIcon={false}
            onClick={() => append({question: "", answer: ""})}
            style={{width: "fit-content"}}
          >
            <i className="icon-add-button text-16 mr-10" />
            Add FAQ
          </Button>
        )}
      </div>
    </>
  );
};

export default FAQSection;
