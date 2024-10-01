import { useCallback, useEffect, useState } from "react";
import useWindowSize from "./useWindowSize";

type PaginationFn = (page: number) => void;

const usePagination = (page: number, fn: PaginationFn, count: number) => {
  const [pages, setPages] = useState([1]);
  const [showRange, setShowRange] = useState(true);
  const perPage = 10;

  const { width } = useWindowSize();
  const numOfPages = Math.ceil(70 / perPage);
  const buttonsToShow = width < 768 ? 2 : 5;

  const disableNext = page === numOfPages;
  const disablePrev = page === 1;

  const next = useCallback(() => fn(page + 1), [page]);
  const prev = useCallback(() => fn(page - 1), [page]);

  useEffect(() => {
    if (page % buttonsToShow === 1 || page % buttonsToShow === 0) {
      const pages = Array.from({ length: buttonsToShow }).map((_, index) => page + index);
      if (numOfPages - page < buttonsToShow) setShowRange(false);
      setPages(pages);
    }
  }, [page]);

  console.log(showRange, "show range");

  return { perPage, next, prev, showRange, pages, disableNext, disablePrev, numOfPages };
};

export default usePagination;
