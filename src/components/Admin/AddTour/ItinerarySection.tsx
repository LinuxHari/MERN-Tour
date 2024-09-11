import { useFieldArray, useFormContext } from "react-hook-form";
import Input from "../../Shared/Input/Input";
import React from "react";
import Button from "../../Shared/Button/Button";

const ItinerarySection = () => {
  const { register } = useFormContext();
  const { fields, append, remove } = useFieldArray({ name: "itinerary", rules: { minLength: 2, maxLength: 10 } });

  return (
    <>
      <div className="contactForm row y-gap-30">
        {fields.map((_, index) => (
          <React.Fragment key={index}>
            <div className="d-flex justify-content-between col-lg-12">
              <h4 className="text-18 fw-500 mb-20">Day {index + 1}</h4>
              {index > 1 && (
                <Button
                  buttonType="icon"
                  className="px-3 py-4 -outline-accent-1 text-accent-1"
                  showIcon={false}
                  onClick={() => remove(index)}
                  style={{ width: "fit-content" }}
                >
                  <i className="icon-delete text-20" />
                </Button>
              )}
            </div>
            <div className="col-lg-6">
              <Input type="text" label="Activity" {...register(`itinerary.${index}.activity`)} />
            </div>
            <div className="col-lg-6">
              <Input type="text" label="Description" {...register(`itinerary.${index}.details`)} />
            </div>

            <div className="col-lg-6">
              <Input
                type="number"
                label="Map Latitude"
                {...register(`itinerary.${index}.lat`, { valueAsNumber: true })}
              />
            </div>
            <div className="col-lg-6">
              <Input
                type="number"
                label="Map Longitude"
                {...register(`itinerary.${index}.lon`, { valueAsNumber: true })}
              />
            </div>
          </React.Fragment>
        ))}
        {fields.length < 10 && (
          <Button
            buttonType="primary"
            className="button -md -outline-dark-1 text-dark bg-light-1 ml-15 mt-30"
            showIcon={false}
            onClick={() => append({ question: "", answer: "" })}
            style={{ width: "fit-content" }}
          >
            <i className="icon-add-button text-16 mr-10" />
            Add Itinerary
          </Button>
        )}

        {/* <div className="col-lg-4">
          <Input type="text" label="Map Zoom" required />
        </div> */}
      </div>
    </>
  );
};

export default ItinerarySection;
