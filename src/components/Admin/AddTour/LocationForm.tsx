import Button from "../../shared/Button/Button";
import Input from "../../shared/Input/Input";

const LocationForm = () => {
  return (
    <>
      <div className="contactForm row y-gap-30">
        <div className="col-12">
          <Input type="text" label="City" />
        </div>
        <div className="col-12">
          <Input type="text" label="State" required />
        </div>
        <div className="col-12">
          <Input type="text" label="Address" required />
        </div>
        <div className="col-12">
          <Input type="text" label="Zip Code" required />
        </div>
        <div className="col-lg-4">
          <Input type="text" label="Map Latitude" required />
        </div>
        <div className="col-lg-4">
          <Input type="text" label="Map Longitude" required />
        </div>
        <div className="col-lg-4">
          <Input type="text" label="Map Zoom" required />
        </div>
      </div>

      <div className="map relative mt-30">
        <div className="map__content rounded-12 js-map-single"></div>
      </div>

      <Button type="primary">
        Save Changes
        <i className="icon-arrow-top-right text-16 ml-10"></i>
      </Button>
    </>
  );
};

export default LocationForm;
