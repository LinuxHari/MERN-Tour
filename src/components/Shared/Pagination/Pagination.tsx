const Pagination = () => {
  return (
    <>
      <div className="pagination justify-center">
        <button className="pagination__button button -accent-1 mr-15 -prev">
          <i className="icon-arrow-left text-15"></i>
        </button>

        <div className="pagination__count">
          <a href="#" style={{ color: "black" }}>
            1
          </a>
          <a href="#" className="is-active" style={{ color: "black" }}>
            2
          </a>
          <a href="#" style={{ color: "black" }}>
            3
          </a>
          <a href="#" style={{ color: "black" }}>
            4
          </a>
          <a href="#" style={{ color: "black" }}>
            5
          </a>
          <div>...</div>
          <a href="#" style={{ color: "black" }}>
            20
          </a>
        </div>

        <button className="pagination__button button -accent-1 ml-15 -next">
          <i className="icon-arrow-right text-15"></i>
        </button>
      </div>
      <div className="text-14 text-center mt-20">
        Showing results 1-30 of 1,415
      </div>
    </>
  );
};

export default Pagination;
