import {OrganizedBookings, RenderProps} from "../../type";
import Tabs from "../../components/Shared/Tabs/Tabs";
import Table from "../../components/Admin/Bookings/Table";
import Pagination from "../../components/Shared/Pagination/Pagination";
import {status} from "../../config/userConfig";
import organizeBookingData from "../../utils/organizeBookingData";
import withAuth from "../../hocs/withAuth";
import NoResult from "../../components/Shared/NoResult/NoResult";
import TableSkeleton from "../../components/Skeletons/TableSkeleton";
import AdminSearchForm from "../../components/Shared/Forms/AdminSearchForm";
import useUserBookingsHandler from "../../hooks/Users/useUserBookingsHandler";

const Bookings = ({render}: RenderProps) => {
  const {setCurrentTab, isError, isLoading, bookings, currentTab, onSearch, page, setPage, tableHeaders} =
    useUserBookingsHandler();

  if (isError || (!isLoading && !bookings))
    return <NoResult title="Something went wrong" description="Maybe try again later." />;

  const bookingData = bookings ? organizeBookingData(bookings.bookings, currentTab) : [];

  return (
    <>
      {render("Bookings", "My Bookings")}
      <div className="rounded-12 bg-white shadow-2 px-40 pt-40 pb-30 md:px-20 md:pt-20 md:mb-20 mt-60">
        <Tabs className="-underline-2" onTabChange={(tab) => setCurrentTab(status[tab])}>
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
              bookingData.map((data: OrganizedBookings, index: number) => (
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
      </div>
    </>
  );
};

const AuthenticatedBookings = withAuth(Bookings);

export default AuthenticatedBookings;
