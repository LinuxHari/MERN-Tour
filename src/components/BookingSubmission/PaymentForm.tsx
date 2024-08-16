const PaymentForm = () => {
  return (
    <div className="bg-white rounded-12 shadow-2 py-30 px-30 md:py-20 md:px-20 mt-30">
      <h2 className="text-30 md:text-24 fw-700 mb-30">
        How do you want to pay?
      </h2>

      <div className="tabs -pills-3 js-tabs">
        <div className="tabs__controls row x-gap-10 y-gap-10 js-tabs-controls">
          <div className="col-auto">
            <button
              className="tabs__button fw-500 rounded-200 js-tabs-button is-tab-el-active"
              data-tab-target=".-tab-item-1"
            >
              Credit/Debit Card
            </button>
          </div>

          <div className="col-auto">
            <button
              className="tabs__button fw-500 rounded-200 js-tabs-button "
              data-tab-target=".-tab-item-2"
            >
              Digital Payment
            </button>
          </div>
        </div>

        <div className="tabs__content pt-30 js-tabs-content">
          <div className="tabs__pane -tab-item-1 is-tab-el-active">
            <div className="contactForm">
              <div className="form-input ">
                <input type="text" required />
                <label className="lh-1 text-16 text-light-1">
                  Select payment method *
                </label>
              </div>
            </div>

            <div className="row y-gap-30 pt-30">
              <div className="col-lg-6">
                <div className="row y-gap-30 contactForm">
                  <div className="col-12">
                    <div className="form-input ">
                      <input type="text" required />
                      <label className="lh-1 text-16 text-light-1">
                        Card holder name *
                      </label>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-input ">
                      <input type="text" required />
                      <label className="lh-1 text-16 text-light-1">
                        Credit/debit card number *
                      </label>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-input ">
                      <input type="text" required />
                      <label className="lh-1 text-16 text-light-1">
                        Expiry date *
                      </label>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-input ">
                      <input type="text" required />
                      <label className="lh-1 text-16 text-light-1">
                        CVC/CVV *
                      </label>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-6">
                <img src="img/tourSingle/booking/card.png" alt="image" />
              </div>
            </div>
          </div>

          <div className="tabs__pane -tab-item-2">
            <div className="contactForm">
              <div className="form-input ">
                <input type="text" required />
                <label className="lh-1 text-16 text-light-1">
                  Select payment method *
                </label>
              </div>
            </div>

            <ul className="ulList mt-20">
              <li>
                You have chosen to pay by PayPal. You will be forwarded to the
                PayPal website to proceed with this transaction.
              </li>
              <li>The total amount you will be charged is: $2,338.01</li>
            </ul>

            <div className="line mt-30 mb-30"></div>

            <div className="row y-gap-15 justify-between items-center">
              <div className="col">
                <div className="d-flex">
                  <div className="form-checkbox mt-5">
                    <input type="checkbox" name="name" />

                    <div className="form-checkbox__mark">
                      <div className="form-checkbox__icon">
                        <svg
                          width="10"
                          height="8"
                          viewBox="0 0 10 8"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M9.29082 0.971021C9.01235 0.692189 8.56018 0.692365 8.28134 0.971021L3.73802 5.51452L1.71871 3.49523C1.43988 3.21639 0.987896 3.21639 0.709063 3.49523C0.430231 3.77406 0.430231 4.22604 0.709063 4.50487L3.23309 7.0289C3.37242 7.16823 3.55512 7.23807 3.73783 7.23807C3.92054 7.23807 4.10341 7.16841 4.24274 7.0289L9.29082 1.98065C9.56965 1.70201 9.56965 1.24984 9.29082 0.971021Z"
                            fill="white"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="text-14 ml-10">
                    Get access to members-only deals, just like the millions of
                    other email subscribers
                  </div>
                </div>
              </div>

              <div className="col-auto">
                <button className="button -md -dark-1 bg-accent-1 text-white">
                  Complete My Order
                  <i className="icon-arrow-top-right text-16 ml-10"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentForm;
