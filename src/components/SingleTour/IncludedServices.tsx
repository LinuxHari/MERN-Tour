import TourSectionLayout from "../../layouts/TourSectionLayout";

const IncludedServices = () => {
  return (
    <TourSectionLayout title="What's included">
      <div className="row x-gap-130 y-gap-20 pt-20">
        <div className="col-lg-6">
          <div className="y-gap-15">
            <div className="d-flex">
              <i className="icon-check flex-center text-10 size-24 rounded-full text-green-2 bg-green-1 mr-15"></i>
              Beverages, drinking water, morning tea and buffet lunch
            </div>
            <div className="d-flex">
              <i className="icon-check flex-center text-10 size-24 rounded-full text-green-2 bg-green-1 mr-15"></i>
              Local taxes
            </div>
            <div className="d-flex">
              <i className="icon-check flex-center text-10 size-24 rounded-full text-green-2 bg-green-1 mr-15"></i>
              Hotel pickup and drop-off by air-conditioned minivan
            </div>
            <div className="d-flex">
              <i className="icon-check flex-center text-10 size-24 rounded-full text-green-2 bg-green-1 mr-15"></i>
              InsuranceTransfer to a private pier
            </div>
            <div className="d-flex">
              <i className="icon-check flex-center text-10 size-24 rounded-full text-green-2 bg-green-1 mr-15"></i>
              Soft drinks
            </div>
            <div className="d-flex">
              <i className="icon-check flex-center text-10 size-24 rounded-full text-green-2 bg-green-1 mr-15"></i>
              Tour Guide
            </div>
          </div>
        </div>

        <div className="col-lg-6">
          <div className="y-gap-15">
            <div className="d-flex">
              <i className="icon-cross flex-center text-10 size-24 rounded-full text-red-3 bg-red-4 mr-15"></i>
              Towel
            </div>
            <div className="d-flex">
              <i className="icon-cross flex-center text-10 size-24 rounded-full text-red-3 bg-red-4 mr-15"></i>
              Tips
            </div>
            <div className="d-flex">
              <i className="icon-cross flex-center text-10 size-24 rounded-full text-red-3 bg-red-4 mr-15"></i>
              Alcoholic Beverages
            </div>
          </div>
        </div>
      </div>
    </TourSectionLayout>
  );
};

export default IncludedServices;
