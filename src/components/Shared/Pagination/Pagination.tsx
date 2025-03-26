import usePagination from "../../../hooks/Shared/usePagination";

type PaginationProps = {
  page: number;
  setPage: (page: number) => void;
  totalCount: number;
  perPage?: number;
};

const Pagination = ({page, setPage, totalCount, perPage = 10}: PaginationProps) => {
  const {prev, next, pages, disableNext, disablePrev} = usePagination(page, perPage, setPage, totalCount);

  if (!totalCount) return null;

  return (
    <>
      <div className="pagination justify-center">
        <button className="pagination__button button -accent-1 -prev" onClick={prev} disabled={disablePrev}>
          <i className="icon-arrow-left text-15" />
        </button>

        <div className="pagination__count">
          {pages.map((pageNumber, index) =>
            pageNumber ? (
              <button
                key={index}
                style={{color: "black"}}
                className={`${pageNumber === page ? "is-active" : ""}`}
                onClick={() => setPage(pageNumber)}
              >
                {pageNumber}
              </button>
            ) : (
              <div key={index}>...</div>
            ),
          )}
        </div>

        <button className="pagination__button button -accent-1 -next" onClick={next} disabled={disableNext}>
          <i className="icon-arrow-right text-15" />
        </button>
      </div>
      <div className="text-14 text-center mt-20">
        Showing results {totalCount > perPage ? (page - 1) * perPage + 1 + "-" + page * perPage : totalCount} of{" "}
        {totalCount}
      </div>
    </>
  );
};

export default Pagination;
