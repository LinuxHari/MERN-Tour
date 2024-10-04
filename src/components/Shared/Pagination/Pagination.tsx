import usePagination from "../../../hooks/usePagination";

type PaginationProps = {
  page: number
  setPage: (page: number) => void
  totalCount: number
}

const Pagination = ({page, setPage, totalCount}: PaginationProps) => {
  const {perPage, prev, next, pages, disableNext, disablePrev } = usePagination(page, setPage, totalCount)  
  return (
    <>
      <div className="pagination justify-center">
        <button className="pagination__button button -accent-1 -prev" onClick={prev} disabled={disablePrev}>
          <i className="icon-arrow-left text-15"></i>
        </button>

        <div className="pagination__count">
          {pages.map((pageNumber) => (
            pageNumber? <button style={{ color: "black" }} className={`${pageNumber === page? "is-active": ""}`} onClick={() => setPage(pageNumber)}>
            {pageNumber}
          </button>: <div>...</div>
          ))}

        </div>

        <button className="pagination__button button -accent-1 -next" onClick={next} disabled={disableNext}>
          <i className="icon-arrow-right text-15"></i>
        </button>
      </div>
      <div className="text-14 text-center mt-20">
        Showing results {totalCount > perPage? (page - 1) * perPage + 1 + "-" + (page * perPage): totalCount} of {totalCount}
      </div>
    </>
  );
};

export default Pagination;
