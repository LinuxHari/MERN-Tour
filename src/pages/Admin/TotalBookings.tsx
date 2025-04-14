import Table from "../../components/Admin/Bookings/Table";
import CancelModal from "../../components/Admin/TotalBookings/CancelModal";
import AdminSearchForm from "../../components/Shared/Forms/AdminSearchForm";
import NoResult from "../../components/Shared/NoResult/NoResult";
import Pagination from "../../components/Shared/Pagination/Pagination";
import Tabs from "../../components/Shared/Tabs/Tabs";
import TableSkeleton from "../../components/Skeletons/TableSkeleton";
import {status} from "../../config/userConfig";
import useTotalBookingsHandler from "../../hooks/Admin/useTotalBookingsHandler";
import {OrganizedTotalBookings, RenderProps} from "../../type";
import organizeTotalBookingData from "../../utils/organizeTotalBookings";

const TotalBookings = ({render}: RenderProps) => {
  const {
    bookings,
    isError,
    isLoading,
    currentTab,
    setTab,
    onSearch,
    tableHeaders,
    page,
    setPage,
    showModal,
    closeModal,
    cancelBookedTour,
    handleCancel,
    cancelBookingId,
  } = useTotalBookingsHandler();

  if (isError || (!isLoading && !bookings))
    return <NoResult title="Something went wrong" description="Maybe try again later." />;

  const bookingData = bookings ? organizeTotalBookingData(bookings.bookings, currentTab, handleCancel) : [];

  return (
    <>
      {render("Bookings", "Total Bookings")}
      <div className="rounded-12 bg-white shadow-2 px-40 pt-40 pb-30 md:px-20 md:pt-20 md:mb-20 mt-60">
        <Tabs className="-underline-2" onTabChange={(tab) => setTab(status[tab])}>
          <Tabs.TabList className="d-flex flex-wrap x-gap-40 y-gap-40 lg:x-gap-20 items-center justify-content-between">
            <div className="row x-gap-40 y-gap-10 lg:x-gap-20">
              {status.map((bookingStatus, index) => (
                <div className="col-auto d-flex flex-wrap justify-content-between" key={index}>
                  <Tabs.Tab
                    className="text-20 lh-12 fw-500 pb-15 lg:pb-0 js-tabs-button"
                    data-tab-target=".-tab-item-1"
                    index={index}
                  >
                    {bookingStatus}
                  </Tabs.Tab>
                </div>
              ))}
            </div>
            <div className="col-auto">
              <AdminSearchForm placeholder="Booking ID" onSearch={onSearch} minLength={8} maxLength={8} />
            </div>
          </Tabs.TabList>

          <Tabs.TabContents>
            {isLoading ? (
              <TableSkeleton />
            ) : (
              bookingData.map((data: OrganizedTotalBookings, index: number) => (
                <Tabs.TabContent key={index} index={index}>
                  {!data.length ? (
                    <div className="d-flex align-items-center justify-content-center">
                      <p className="text-20 fw-500">No booking is {currentTab}</p>
                    </div>
                  ) : (
                    <>
                      <Table headers={tableHeaders} data={data} />
                      <Pagination page={page} setPage={setPage} totalCount={bookings?.totalPages || 0} />
                    </>
                  )}
                </Tabs.TabContent>
              ))
            )}
          </Tabs.TabContents>
        </Tabs>
        <CancelModal
          showModal={showModal}
          onClose={closeModal}
          onConfirm={cancelBookedTour}
          bookingId={cancelBookingId}
        />
      </div>
    </>
  );
};

export default TotalBookings;
