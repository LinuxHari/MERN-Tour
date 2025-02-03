import React from "react";

const TourDetailSkeleton = () => {
  return (
    <div
      className="container py-4 pageHeader -type-3"
      style={{minHeight: "100vh"}}
    >
      <div className="d-flex gap-2 align-items-center mb-4">
        {Array.from({length: 3}).map((_, index) => (
          <React.Fragment key={index}>
            <div
              className="skeleton-element"
              style={{width: "60px", height: "16px"}}
            />
          </React.Fragment>
        ))}
      </div>

      <div className="mb-4">
        <div
          className="skeleton-element mb-4"
          style={{width: "400px", height: "42px"}}
        />
        <div className="d-flex justify-content-between align-items-center">
          <div className="d-flex align-items-center gap-2">
            <div
              className="skeleton-element"
              style={{width: "16px", height: "16px", borderRadius: "50%"}}
            />
            <div
              className="skeleton-element"
              style={{width: "200px", height: "20px"}}
            />
          </div>
          <div
            className="skeleton-element"
            style={{width: "80px", height: "32px", borderRadius: "16px"}}
          />
        </div>
      </div>

      <div className="row g-4 mb-4">
        {Array.from({length: 2}).map((_, index) => (
          <div key={index} className="col-12 col-md-6">
            <div
              className="skeleton-element w-100"
              style={{
                paddingBottom: "66.67%",
                borderRadius: "12px",
              }}
            />
          </div>
        ))}
      </div>

      <div
        className="skeleton-element mb-2"
        style={{width: "70%", height: "24px"}}
      />
      <div
        className="skeleton-element mb-3"
        style={{width: "90%", height: "16px"}}
      />

      <div
        className="skeleton-element"
        style={{width: "70%", height: "24px", marginTop: "60px"}}
      />
      <div
        className="skeleton-element"
        style={{width: "90%", height: "16px", marginTop: "60px"}}
      />
    </div>
  );
};

export default TourDetailSkeleton;
