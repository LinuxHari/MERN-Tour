import Button from "../../shared/Button/Button";
import Input from "../../shared/Input/Input";
import Textarea from "../../shared/Teaxtarea/Textarea";
import ImagePlaceholder from "./ImagePlaceholder";

const ContentSection = () => {
  return (
    <div className="contactForm row y-gap-30">
      <Input label="Tour Title" type="text"/>
      <Input label="Category" type="text"/>
      <Input label="Keywords" type="text"/>
      <Textarea label="Tour Description" rows={8}/>
      <div className="col-12">
        <h4 className="text-18 fw-500 mb-20">Gallery</h4>

        <div className="row x-gap-20 y-gap">
          <div className="col-auto">
            <ImagePlaceholder size={1}/>
          </div>
        </div>

        {/* <div className="text-14 mt-20">
          PNG or JPG no bigger than 800px wide and tall.
        </div> */}
      </div>

      <div className="col-12">
        <Button buttonType="primary">
          Save Changes
        </Button>
      </div>
    </div>
  );
};

export default ContentSection;
