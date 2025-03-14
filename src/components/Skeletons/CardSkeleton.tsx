const CardSkeleton = () => {
  return (
    <div className="col-12 col-md-6 col-lg-4">
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
  );
};

export default CardSkeleton;
