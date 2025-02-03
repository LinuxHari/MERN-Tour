const CommonSkeleton = () => {
  return (
    <div className="skeleton-page container">
      <nav
        className="navbar navbar-expand-lg navbar-light bg-white py-4"
        style={{zIndex: 1}}
      >
        <div className="container px-4">
          <div
            className="skeleton-element"
            style={{width: "120px", height: "32px"}}
          />
          <div
            className="skeleton-element mx-4 d-none d-lg-block"
            style={{width: "300px", height: "40px"}}
          />
          <div className="d-flex align-items-center gap-3">
            <div
              className="skeleton-element d-none d-lg-block"
              style={{width: "100px", height: "24px"}}
            />
            <div
              className="skeleton-element d-none d-lg-block"
              style={{width: "100px", height: "24px"}}
            />
            <div
              className="skeleton-element"
              style={{width: "80px", height: "38px"}}
            />
          </div>
        </div>
      </nav>

      <main className="skeleton-main">
        <div className="skeleton-hero">
          <div className="container">
            <div className="row py-5">
              <div className="col-12 text-center">
                <div
                  className="skeleton-element mx-auto mb-4"
                  style={{width: "60%", maxWidth: "400px", height: "48px"}}
                />
                <div
                  className="skeleton-element mx-auto"
                  style={{width: "80%", maxWidth: "600px", height: "24px"}}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="container py-4">
          <div className="row g-4">
            {Array.from({length: 6}).map((_, i) => (
              <div className="col-12 col-md-6 col-lg-4" key={i}>
                <div className="card border-0 shadow-sm">
                  <div className="skeleton-element" style={{height: "200px"}} />
                  <div className="card-body">
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
                      style={{width: "40%", height: "32px"}}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default CommonSkeleton;
