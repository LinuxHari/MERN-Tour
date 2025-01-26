import {useState} from "react";
import {OrganizedBookings, RenderProps, StatusType} from "../../type";
// import Pagination from "../../components/Shared/Pagination/Pagination";
import Tabs from "../../components/Shared/Tabs/Tabs";
import Table from "../../components/Admin/Bookings/Table";
import Pagination from "../../components/Shared/Pagination/Pagination";
import {useGetBookingsQuery} from "../../redux/api/userApi";
import {status} from "../../config/userConfig";
import organizeBookingData from "../../utils/organizeBookingData";

const Bookings = ({render}: RenderProps) => {
  const tableHeaders = [
    "ID",
    "Title",
    "Start date",
    "End date",
    "Details",
    "Price",
    "Status",
    "Action",
  ];

  const [page, setPage] = useState(1);
  const [currentTab, setCurrentTab] = useState<StatusType>("Confirmed");
  const {
    data: bookings,
    isLoading,
    isError,
  } = useGetBookingsQuery({status: currentTab.toLowerCase(), page});

  if (isLoading) return <>Loading...</>;

  if (isError || !bookings) return <></>;

  const bookingData = organizeBookingData(bookings.bookings, currentTab);

  return (
    <>
      {render("Bookings", "My Bookings")}
      <div className="rounded-12 bg-white shadow-2 px-40 pt-40 pb-30 md:px-20 md:pt-20 md:mb-20 mt-60">
        <Tabs
          className="-underline-2"
          onTabChange={(tab) => setCurrentTab(status[tab])}
        >
          <Tabs.TabList className="row x-gap-40 y-gap-10 lg:x-gap-20">
            {status.map((status, index) => (
              <div className="col-auto" key={index}>
                <Tabs.Tab
                  className="text-20 lh-12 fw-500 pb-15 lg:pb-0 js-tabs-button"
                  data-tab-target=".-tab-item-1"
                  index={index}
                >
                  {status}
                </Tabs.Tab>
              </div>
            ))}
          </Tabs.TabList>

          <Tabs.TabContents>
            {bookingData.map((data: OrganizedBookings, index: number) => (
              <Tabs.TabContent key={index} index={index}>
                {isLoading ? (
                  <>Loading...</>
                ) : !data.length ? (
                  <div className="d-flex align-items-center justify-content-center">
                    <p className="text-20 fw-500">No booking is {currentTab}</p>
                  </div>
                ) : (
                  <>
                    <Table headers={tableHeaders} data={data} />
                    <Pagination
                      page={page}
                      setPage={setPage}
                      totalCount={bookings.totalPages}
                    />
                  </>
                )}
              </Tabs.TabContent>
            ))}
          </Tabs.TabContents>
        </Tabs>
      </div>
    </>
  );
};

export default Bookings;
