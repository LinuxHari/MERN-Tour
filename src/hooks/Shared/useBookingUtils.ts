import {useCallback, useEffect, useState} from "react";
import {StatusType} from "../../type";

const useBookingUtils = () => {
  const [page, setPage] = useState(1);
  const [currentTab, setTab] = useState<StatusType>("Confirmed");
  const [bookingId, setBookingId] = useState("");

  const handlePage = useCallback((page: number) => setPage(page), []);

  const handleTab = useCallback((tab: StatusType) => setTab(tab), []);

  const handleBookingId = useCallback((bookingId: string) => setBookingId(bookingId), []);

  useEffect(() => {
    setPage(1);
  }, [currentTab]);

  return {page, currentTab, bookingId, setPage: handlePage, setTab: handleTab, setBookingId: handleBookingId};
};

export default useBookingUtils;
