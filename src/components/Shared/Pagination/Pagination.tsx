type PaginationProps = {
  page: number
  setPage: (page: number) => void
  totalCount: number
}

const Pagination = ({page, setPage, totalCount}: PaginationProps) => {
  const perPage = 10
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
        Showing results {page * perPage + 1 } of {totalCount}
      </div>
    </>
  );
};

export default Pagination;
