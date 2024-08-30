import { useFormContext } from "react-hook-form";
import Input from "../../Shared/Input/Input";
import Textarea from "../../Shared/Teaxtarea/Textarea";
import GallerySection from "./GallerySection";
import TourHighlights from "./TourHighlights";
import { useCallback } from "react";

const ContentSection = () => {
  const {register} = useFormContext()

  const render = useCallback((title: string) => (<h4 className="text-18 fw-500 mb-20">{title}</h4>), [])

  return (
    <div className="contactForm row y-gap-30">
      <div className="col-12">
        <Input label="Tour Title" type="text" {...register("name")} required/>
      </div>
      <div className="col-12">
        <Input label="Category" type="text" {...register("category")} required/>
      </div>
      <div className="col-12">
        <Textarea label="Tour Description" rows={8} {...register("description")} required/>
      </div>
      <div className="col-12">
          <Input label="Tour Price" type="text" {...register("price")} required/>
      </div>
      <div className="col-12">
      <GallerySection render={render}/>        
      </div>
      <div className="col-12">
        <TourHighlights render={render}/>
      </div>
    </div>
  );
};

export default ContentSection;
