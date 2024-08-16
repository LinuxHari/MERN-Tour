import Button from "../../Shared/Button/Button";
import Input from "../../Shared/Input/Input";
import Textarea from "../../Shared/Teaxtarea/Textarea";
import ImagePlaceholder from "./ImagePlaceholder";

const ContentSection = () => {
  return (
    <div className="contactForm row y-gap-30">
      <div className="col-12">
        <Input label="Tour Title" type="text" />
      </div>
      <div className="col-12">
        <Input label="Category" type="text" />
      </div>
      <div className="col-12">
        <Input label="Keywords" type="text" />
      </div>
      <div className="col-12">
        <Textarea label="Tour Description" rows={8} />
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

      <div className="col-12">
        <Button buttonType="primary">Save Changes</Button>
      </div>
    </div>
  );
};

export default ContentSection;
