const PricingForm = () => {
  return (
    <>
      <div className="contactForm row y-gap-30">
        <div className="col-12">
          <div className="form-input ">
            <input type="text" required />
            <label className="lh-1 text-16 text-light-1">Tour Price</label>
          </div>
        </div>
      </div>

      <div className="mt-30">
        <h3 className="text-18 fw-500 mb-20">Extra Price</h3>

        <div className="contactForm row y-gap-30 items-center">
          <div className="col-lg-4">
            <div className="form-input ">
              <input type="text" required />
              <label className="lh-1 text-16 text-light-1">
                Add Service per booking
              </label>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="form-input ">
              <input type="text" required />
              <label className="lh-1 text-16 text-light-1">Description</label>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="d-flex items-center">
              <div className="form-input ">
                <input type="text" required />
                <label className="lh-1 text-16 text-light-1">Price</label>
              </div>

              <button className="text-18 ml-20">
                <i className="icon-delete"></i>
              </button>
            </div>
          </div>
        </div>

        <div className="contactForm row y-gap-30 items-center pt-10">
          <div className="col-lg-4">
            <div className="form-input ">
              <input type="text" required />
              <label className="lh-1 text-16 text-light-1">
                Add Service per booking
              </label>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="form-input ">
              <input type="text" required />
              <label className="lh-1 text-16 text-light-1">Description</label>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="d-flex items-center">
              <div className="form-input ">
                <input type="text" required />
                <label className="lh-1 text-16 text-light-1">Price</label>
              </div>

              <button className="text-18 ml-20">
                <i className="icon-delete"></i>
              </button>
            </div>
          </div>
        </div>

        <div className="mt-30">
          <button className="button -md -outline-dark-1 bg-light-1">
            <i className="icon-add-button text-16 mr-10"></i>
            Add Item
          </button>
        </div>
      </div>

      <button className="button -md -dark-1 bg-accent-1 text-white mt-30">
        Save Changes
        <i className="icon-arrow-top-right text-16 ml-10"></i>
      </button>
    </>
  );
};

export default PricingForm;
