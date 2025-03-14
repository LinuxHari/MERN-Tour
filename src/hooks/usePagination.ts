import {useCallback, useLayoutEffect, useState} from "react";
import useWindowSize from "./useWindowSize";

type PaginationFn = (page: number) => void;

const usePagination = (
  page: number,
  perPage: number,
  fn: PaginationFn,
  count: number,
) => {
  const [pages, setPages] = useState([1, null]);

  const {width} = useWindowSize();
  const numOfPages = Math.ceil(count / perPage);
  const buttonsToShow = width < 768 ? 4 : 5;

  const disableNext = page === numOfPages;
  const disablePrev = page === 1;

  const next = useCallback(() => {
    fn(page + 1);
  }, [page]);
  const prev = useCallback(() => {
    fn(page - 1);
  }, [page]);

  useLayoutEffect(() => {
    if (numOfPages < buttonsToShow) {
      const pages = Array.from({length: numOfPages}).map(
        (_, index) => index + 1,
      );

      setPages(pages);
    } else if (page < buttonsToShow) {
      const pages = [
        ...Array.from({length: buttonsToShow}).map((_, index) => index + 1),
        null,
        numOfPages,
      ];

      setPages(pages);
    } else if (numOfPages - (page - 2) <= buttonsToShow) {
      const pages = [
        1,
        null,
        ...Array.from({length: buttonsToShow}).map(
          (_, index) => numOfPages - buttonsToShow + index + 1,
        ),
      ];

      setPages(pages);
    } else {
      const pages = [
        1,
        null,
        ...Array.from({length: buttonsToShow - 2}).map(
          (_, index) => page - 1 + index,
        ),
        null,
        numOfPages,
      ];

      setPages(pages);
    }
  }, [page, width]);

  return {perPage, next, prev, pages, disableNext, disablePrev, numOfPages};
};

export default usePagination;
