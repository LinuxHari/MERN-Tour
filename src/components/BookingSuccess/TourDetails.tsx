import Button from "../Shared/Button/Button";

type TourDetailsProps = {
    
}

const TourDetails = ({}: TourDetailsProps) => {
  return (
    <div className="pl-50 md:pl-0">
      <div className="bg-white rounded-12 shadow-2 py-30 px-30 md:py-20 md:px-20">
        <h2 className="text-20 fw-500">Tour Details</h2>
        <div className="line mt-20 mb-20"></div>
        <div className="d-flex item-center justify-between y-gap-5 pt-30">
        <div className="text-18 fw-500">
          Westminster Walking Tour & Westminster Abbey Entry
        </div>
      </div>

      <div className="mt-25">
        <div className="d-flex items-center justify-between">
          <div className="fw-500">Date:</div>
          <div className="">06 April 2023</div>
        </div>

        <div className="d-flex items-center justify-between">
          <div className="fw-500">Duration:</div>
          <div className="">12 Days</div>
        </div>

        <div className="d-flex items-center justify-between">
          <div className="fw-500">Tickets:</div>
          <div className="">
            Adult x2 = $98 - Youth x3 = $383 - Children x6 = $394
          </div>
        </div>
        <div className="d-flex items-center justify-between">
          <div className="fw-500">Amount:</div>
        <div className="text-18 fw-500">$382</div>
        </div>
      </div>
        <Button buttonType="primary" className="mt-4 w-100" onClick={() => window.print()}>Print</Button>
      </div>
    </div>
  );
};

export default TourDetails;
