const EarningStatistics = () => {
  return (
    <div className="col-xl-8 col-lg-12 col-md-6">
          <div className="rounded-12 bg-white shadow-2 h-full">
            <div className="pt-20 px-30">
              <div className="tabs -underline-2 js-tabs">
                <div className="d-flex items-center justify-between">
                  <div className="text-18 fw-500">Earning Statistics</div>

                  <div className="tabs__controls row x-gap-20 y-gap-10 lg:x-gap-20 js-tabs-controls">
                    <div className="col-auto">
                      <button
                        className="tabs__button fw-500 px-5 pb-5 lg:pb-0 js-tabs-button is-tab-el-active"
                        data-tab-target=".-tab-item-1"
                      >
                        Hours
                      </button>
                    </div>

                    <div className="col-auto">
                      <button
                        className="tabs__button fw-500 px-5 pb-5 lg:pb-0 js-tabs-button "
                        data-tab-target=".-tab-item-2"
                      >
                        Weekly
                      </button>
                    </div>

                    <div className="col-auto">
                      <button
                        className="tabs__button fw-500 px-5 pb-5 lg:pb-0 js-tabs-button "
                        data-tab-target=".-tab-item-3"
                      >
                        Monthly
                      </button>
                    </div>
                  </div>
                </div>

                <div className="tabs__content pt-30 js-tabs-content">
                  <div className="tabs__pane -tab-item-1 is-tab-el-active">
                    <canvas id="lineChart"></canvas>
                  </div>

                  <div className="tabs__pane -tab-item-2 ">
                    <canvas id="lineChart"></canvas>
                  </div>

                  <div className="tabs__pane -tab-item-3 ">
                    <canvas id="lineChart"></canvas>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
  )
}

export default EarningStatistics