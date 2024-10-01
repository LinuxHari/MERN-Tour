import usePagination from "../../../hooks/usePagination";

type PaginationProps = {
  page: number
  setPage: (page: number) => void
  totalCount: number
}

const Pagination = ({page, setPage, totalCount}: PaginationProps) => {
  const {perPage, showRange, prev, next, pages, disableNext, disablePrev, numOfPages} = usePagination(page, setPage, totalCount)
  console.log(page, "current page", disablePrev);
  
  return (
    <>
      <div className="pagination justify-center">
        <button className="pagination__button button -accent-1 mr-15 -prev" onClick={prev} disabled={disablePrev}>
          <i className="icon-arrow-left text-15"></i>
        </button>

        <div className="pagination__count">
          {pages.map((pageNumber) => (
            <button style={{ color: "black" }} className={`${pageNumber === page? "is-active": ""}`} onClick={() => setPage(pageNumber)}>
            {pageNumber}
          </button>
          ))}
         {
          showRange && <>
           <div>...</div>
          <button style={{ color: "black" }} onClick={() => setPage(numOfPages)}>
            {numOfPages}
          </button>
          </>
         }
        </div>

        <button className="pagination__button button -accent-1 ml-15 -next" onClick={next} disabled={disableNext}>
          <i className="icon-arrow-right text-15"></i>
        </button>
      </div>
      <div className="text-14 text-center mt-20">
        Showing results {(page - 1) * perPage + 1 } - {page * perPage} of {totalCount}
      </div>
    </>
  );
};

export default Pagination;
