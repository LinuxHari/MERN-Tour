import { useFormContext } from "react-hook-form";
import Input from "../../Shared/Input/Input";
import Textarea from "../../Shared/Teaxtarea/Textarea";
import TourHighlights from "./TourHighlights";
import { useCallback } from "react";
import Categories from "./Categories";
import AgeSection from "./AgeSection";
import FreeCancellation from "./FreeCancellation";

const ContentSection = () => {
  const { register } = useFormContext();

  const render = useCallback((title: string) => <h4 className="text-18 fw-500 mb-20">{title}</h4>, []);

  return (
    <div className="contactForm row y-gap-30">
      <div className="col-12">
        <Input label="Tour Title" type="text" {...register("name")} />
      </div>
      <div className="col-12">
        <Categories />
      </div>
      <div className="col-12">
        <Textarea label="Tour Description" rows={8} {...register("description")} />
      </div>
      <div className="col-12">
        <Input type="text" label="City" {...register("city")} />
      </div>
      <div className="col-12">
        <Input type="text" label="State" {...register("state")} />
      </div>
      <div className="col-12">
        <Input type="text" label="Country" {...register("country")} />
      </div>
      {/* <div className="col-12">
        <Input type="text" label="Address" {...register("address")} />
      </div> */}
      <div className="col-12">
        <Input type="text" label="Zip Code" {...register("zipCode")} />
      </div>
      <div className="col-12">
        <Input label="Tour Price" type="number" {...register("price", { valueAsNumber: true })} />
      </div>
      <div className="col-12">
        <Input label="Tour Capacity" type="number" {...register("capacity", { valueAsNumber: true })} />
      </div>
      <div className="col-12">
        <AgeSection render={render} />
      </div>
      <div className="col-12">
        <FreeCancellation render={render} />
      </div>
      <div className="col-12">
        <TourHighlights render={render} />
      </div>
    </div>
  );
};

export default ContentSection;
