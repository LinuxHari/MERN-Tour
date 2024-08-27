import { useFormContext } from "react-hook-form";
import Input from "../../Shared/Input/Input";
import Textarea from "../../Shared/Teaxtarea/Textarea";
import ImagePlaceholder from "./ImagePlaceholder";

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
        <h4 className="text-18 fw-500 mb-20">Gallery</h4>

        <div className="row x-gap-20 y-gap">
          <div className="col-auto">
            <ImagePlaceholder size={1} />
          </div>
        </div>

        {/* <div className="text-14 mt-20">
          PNG or JPG no bigger than 800px wide and tall.
        </div> */}
      </div>
    </div>
  );
};

export default ContentSection;
