import React from "react";

const TourListingSkeleton = () => {
  return (
    <div
      className="container py-4 pageHeader -type-3"
      style={{minHeight: "100vh"}}
    >
      <div className="d-flex gap-2 align-items-center mb-2">
        {[1, 2, 3].map((item) => (
          <React.Fragment key={item}>
            <div
              className="skeleton-element"
              style={{width: "60px", height: "16px"}}
            />
          </React.Fragment>
        ))}
      </div>

      <div
        className="skeleton-element mb-4"
        style={{width: "60%", maxWidth: "500px", height: "40px"}}
      />

      <div className="row">
        <div className="col-12 col-md-3">
          <div className="card border-0 shadow-sm">
            <div className="card-body">
              <div
                className="skeleton-element mb-4"
                style={{width: "80%", height: "24px"}}
              />

              <div className="mb-4">
                <div
                  className="skeleton-element mb-3"
                  style={{width: "70%", height: "20px"}}
                />
                {[1, 2, 3].map((item) => (
                  <div
                    key={item}
                    className="d-flex align-items-center gap-2 mb-2"
                  >
                    <div
                      className="skeleton-element"
                      style={{width: "16px", height: "16px"}}
                    />
                    <div
                      className="skeleton-element"
                      style={{width: "60%", height: "16px"}}
                    />
                  </div>
                ))}
              </div>

              <div className="mb-4">
                <div
                  className="skeleton-element mb-3"
                  style={{width: "50%", height: "20px"}}
                />
                <div
                  className="skeleton-element mb-2"
                  style={{width: "100%", height: "4px"}}
                />
                <div className="d-flex justify-content-between">
                  <div
                    className="skeleton-element"
                    style={{width: "40%", height: "16px"}}
                  />
                  <div
                    className="skeleton-element"
                    style={{width: "40%", height: "16px"}}
                  />
                </div>
              </div>

              {["Specials", "Languages", "Rating"].map((filter) => (
                <div key={filter} className="mb-4">
                  <div
                    className="skeleton-element mb-3"
                    style={{width: "60%", height: "20px"}}
                  />
                  {[1, 2].map((item) => (
                    <div
                      key={item}
                      className="d-flex align-items-center gap-2 mb-2"
                    >
                      <div
                        className="skeleton-element"
                        style={{width: "16px", height: "16px"}}
                      />
                      <div
                        className="skeleton-element"
                        style={{width: "70%", height: "16px"}}
                      />
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="col-12 col-md-9">
          <div className="d-flex justify-content-between align-items-center mb-4">
            <div
              className="skeleton-element"
              style={{width: "100px", height: "20px"}}
            />
            <div
              className="skeleton-element"
              style={{width: "150px", height: "20px"}}
            />
          </div>

          {[1, 2].map((item) => (
            <div key={item} className="card border-0 shadow-sm mb-4">
              <div className="row g-0">
                <div className="col-md-4">
                  <div
                    className="skeleton-element h-100"
                    style={{minHeight: "220px"}}
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <div className="d-flex justify-content-between mb-2">
                      <div
                        className="skeleton-element"
                        style={{width: "120px", height: "20px"}}
                      />
                      <div
                        className="skeleton-element"
                        style={{width: "80px", height: "20px"}}
                      />
                    </div>
                    <div
                      className="skeleton-element mb-2"
                      style={{width: "80%", height: "28px"}}
                    />
                    <div
                      className="skeleton-element mb-3"
                      style={{width: "90%", height: "16px"}}
                    />
                    <div
                      className="skeleton-element mb-3"
                      style={{width: "70%", height: "16px"}}
                    />
                    <div className="d-flex justify-content-between align-items-end mt-4">
                      <div
                        className="skeleton-element"
                        style={{width: "100px", height: "16px"}}
                      />
                      <div>
                        <div
                          className="skeleton-element mb-2"
                          style={{width: "120px", height: "24px"}}
                        />
                        <div
                          className="skeleton-element"
                          style={{width: "100px", height: "36px"}}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TourListingSkeleton;
