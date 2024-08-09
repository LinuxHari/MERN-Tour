import Button from "../../shared/Button/Button";
import Input from "../../shared/Input/Input";

const IncludedSection = () => {
  return (
    <>
      <div className="row y-gap-20 justify-between">
        <div className="col-md-8">
          <div className="row y-gap-20">
            <div className="col-12">
              <Input type="checkbox" label="Beverages, drinking water, morning tea and buffet lunch"/>
            </div>

            <div className="col-12">
              <Input type="checkbox" label="Local taxes"/>
            </div>

            <div className="col-12">
            <Input type="checkbox" label="Hotel pickup and drop-off by air-conditioned minivan"/>
            </div>

            <div className="col-12">
            <Input type="checkbox" label="InsuranceTransfer to a private pier"/>
            </div>

            <div className="col-12">
            <Input type="checkbox" label="Soft drinks"/>
            </div>

            <div className="col-12">
            <Input type="checkbox" label="Tour Guide"/>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="row y-gap-20">
            <div className="col-12">
            <Input type="checkbox" label="Towel"/>
            </div>

            <div className="col-12">
            <Input type="checkbox" label="Tips"/>
            </div>

            <div className="col-12">
            <Input type="checkbox" label="Alcoholic Beverages"/>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-40">
      <Button buttonType="primary">
      Save Changes
      </Button>
      </div>
    </>
  );
};

export default IncludedSection;
