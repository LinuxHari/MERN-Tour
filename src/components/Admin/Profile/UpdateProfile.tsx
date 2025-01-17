import Button from "../../Shared/Button/Button";
import Input from "../../Shared/Input/Input";
import Textarea from "../../Shared/Teaxtarea/Textarea";
// import ImagePlaceholder from "../AddTour/ImagePlaceholder"

const UpdateProfile = () => {
  return (
    <form className="rounded-12 bg-white shadow-2 px-40 pt-40 pb-30">
      <h5 className="text-20 fw-500 mb-30">Profile Details</h5>

      <div className="contactForm row y-gap-30">
        <div className="col-md-6">
          <Input label="Name" type="text" />
        </div>

        <div className="col-md-6">
          <Input label="Last Name" type="text" />
        </div>

        <div className="col-md-6">
          <Input label="Phone" type="text" />
        </div>

        <div className="col-md-6">
          <Input label="Email" type="text" />
        </div>

        <div className="col-md-6">
          <Textarea label="Info" rows={8} />
        </div>

        <div className="col-12">
          <h4 className="text-18 fw-500 mb-20">Your photo</h4>

          <div className="row x-gap-20 y-gap">
            <div className="col-auto">{/* <ImagePlaceholder size={2}/> */}</div>
          </div>
        </div>
      </div>

      <div className="d-flex pt-30">
        <Button buttonType="primary">Save Changes</Button>
      </div>
    </form>
  );
};

export default UpdateProfile;
