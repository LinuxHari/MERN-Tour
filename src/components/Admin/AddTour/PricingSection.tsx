import Input from "../../shared/Input/Input";
import Button from "../../shared/Button/Button";

const PricingSection = () => {
  return (
    <>
      <div className="contactForm row y-gap-30">
        <div className="col-12">
          <Input label="Tour Price" type="text" />
        </div>
      </div>

      <div className="mt-30">
        <h3 className="text-18 fw-500 mb-20">Extra Price</h3>

        <div className="contactForm row y-gap-30 items-center">
          <div className="col-lg-4">
            <Input label="Add Service per booking" type="text" />
          </div>
          <div className="col-lg-4">
            <Input label="Description" type="text" />
          </div>
          <div className="col-lg-4">
            <div className="d-flex items-center">
              <Input label="Price" type="text" />
              <button className="text-18 ml-20">
                <i className="icon-delete"></i>
              </button>
            </div>
          </div>
        </div>

        <div className="contactForm row y-gap-30 items-center pt-10">
          <div className="col-lg-4">
            <Input label="Add Service per booking" type="text" />
          </div>
          <div className="col-lg-4">
            <Input label="Description" type="text" />
          </div>
          <div className="col-lg-4">
            <div className="d-flex items-center">
              <Input label="Price" type="text" />
              <button className="text-18 ml-20">
                <i className="icon-delete"></i>
              </button>
            </div>
          </div>
        </div>

        <div className="mt-30">
          <Button buttonType="primary" className="col-lg-2 -outline-dark-1 bg-light-1 text-dark" showIcon={false}>
            <i className="icon-add-button text-16 mr-10"></i>
            Add Item
          </Button>
        </div>
      </div>

      <Button buttonType="primary" className="mt-30">
        Save Changes
      </Button>
    </>
  );
};

export default PricingSection;
