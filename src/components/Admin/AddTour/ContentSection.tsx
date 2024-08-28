import { useFormContext } from "react-hook-form";
import Input from "../../Shared/Input/Input";
import Textarea from "../../Shared/Teaxtarea/Textarea";
import GallerySection from "./GallerySection";
import TourHighlights from "./TourHighlights";

const ContentSection = () => {
  const {register} = useFormContext()
  return (
    <div className="contactForm row y-gap-30">
      <div className="col-12">
        <Input label="Tour Title" type="text" {...register("name")}/>
      </div>
      <div className="col-12">
        <Input label="Category" type="text" {...register("category")}/>
      </div>
      <div className="col-12">
        <Textarea label="Tour Description" rows={8} {...register("description")}/>
      </div>
      <div className="col-12">
          <Input label="Tour Price" type="text" {...register("price")} />
      </div>
      <div className="col-12">
      <GallerySection/>        
      </div>
      <div className="col-12">
        <TourHighlights/>
      </div>
    </div>
  );
};

export default ContentSection;
