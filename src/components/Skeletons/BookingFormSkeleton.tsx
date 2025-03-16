const BookingFormSkeleton = () => {
  return (
    <div className="container py-4" style={{minHeight: "100vh"}}>
      <div className="row g-4">
        <div className="col-12 col-lg-8">
          <div className="card border-0 shadow-sm p-4">
            <div className="d-flex justify-content-between align-items-center mb-4">
              <div className="skeleton-element" style={{width: "250px", height: "32px"}} />
              <div className="skeleton-element" style={{width: "150px", height: "24px"}} />
            </div>

            <div className="space-y-4">
              <div className="mb-4">
                <div className="skeleton-element mb-2" style={{width: "80px", height: "16px"}} />
                <div className="skeleton-element" style={{width: "100%", height: "40px"}} />
              </div>

              <div className="mb-4">
                <div className="skeleton-element mb-2" style={{width: "60px", height: "16px"}} />
                <div className="skeleton-element" style={{width: "100%", height: "40px"}} />
              </div>

              <div className="mb-4">
                <div className="skeleton-element mb-2" style={{width: "70px", height: "16px"}} />
                <div className="skeleton-element" style={{width: "100%", height: "40px"}} />
              </div>

              <div className="mb-4">
                <div className="skeleton-element mb-2" style={{width: "60px", height: "16px"}} />
                <div className="skeleton-element" style={{width: "100%", height: "40px"}} />
              </div>

              <div className="mb-4">
                <div className="skeleton-element mb-2" style={{width: "120px", height: "16px"}} />
                <div className="d-flex gap-2">
                  <div className="skeleton-element" style={{width: "80px", height: "40px"}} />
                  <div className="skeleton-element" style={{width: "100%", height: "40px"}} />
                </div>
              </div>

              <div className="mt-5">
                <div className="skeleton-element mb-4" style={{width: "200px", height: "24px"}} />

                <div className="row g-3">
                  <div className="col-12">
                    <div className="skeleton-element mb-2" style={{width: "100px", height: "16px"}} />
                    <div className="skeleton-element" style={{width: "100%", height: "40px"}} />
                  </div>
                  <div className="col-6">
                    <div className="skeleton-element mb-2" style={{width: "120px", height: "16px"}} />
                    <div className="skeleton-element" style={{width: "100%", height: "40px"}} />
                  </div>
                  <div className="col-6">
                    <div className="skeleton-element mb-2" style={{width: "100px", height: "16px"}} />
                    <div className="skeleton-element" style={{width: "100%", height: "40px"}} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-12 col-lg-4">
          <div className="card border-0 shadow-sm">
            <div className="card-body">
              <div className="skeleton-element mb-4" style={{width: "180px", height: "24px"}} />

              <div className="skeleton-element mb-3" style={{width: "100%", height: "200px", borderRadius: "8px"}} />

              <div className="skeleton-element mb-4" style={{width: "80%", height: "24px"}} />

              <div className="space-y-3">
                {Array.from({length: 3}).map((_, index) => (
                  <div key={index} className="d-flex justify-content-between align-items-center mb-3">
                    <div className="skeleton-element" style={{width: "80px", height: "16px"}} />
                    <div className="skeleton-element" style={{width: "120px", height: "16px"}} />
                  </div>
                ))}

                <div className="d-flex justify-content-between align-items-center mt-4">
                  <div className="skeleton-element" style={{width: "60px", height: "20px"}} />
                  <div className="skeleton-element" style={{width: "80px", height: "24px"}} />
                </div>
              </div>

              <div className="skeleton-element mt-4" style={{width: "100%", height: "48px", borderRadius: "24px"}} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingFormSkeleton;
