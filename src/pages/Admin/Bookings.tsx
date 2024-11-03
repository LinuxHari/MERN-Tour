import { Bookings as BookingsType, RenderProps } from "../../type";
// import Pagination from "../../components/Shared/Pagination/Pagination";
import Tabs from "../../components/Shared/Tabs/Tabs";
import Table from "../../components/Admin/Bookings/Table";

const Bookings = ({ render }: RenderProps) => {

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

  const Status = ["Confirmed", "Pending", "Cancelled"];

  const confirmedData: BookingsType[] = [
    {
      id: 484,
      tour: {
        imgUrl: "img/dashboard/booking/1.jpg",
        title:
          "Phi Phi Islands Adventure Day Trip with Seaview Lunch by V. Marine Tour",
      },
      startDate: "11 April 2023",
      endDate: "11 April 2023",
      details: "2 People",
      price: "$392.89",
      status: "Confirmed",
    },
    {
      id: 485,
      tour: {
        imgUrl: "img/dashboard/booking/2.jpg",
        title: "Bangkok City Tour with Temple Visits",
      },
      startDate: "12 April 2023",
      endDate: "12 April 2023",
      details: "3 People",
      price: "$150.00",
      status: "Confirmed",
    },
    {
      id: 486,
      tour: {
        imgUrl: "img/dashboard/booking/3.jpg",
        title: "Chiang Mai Elephant Sanctuary Day Trip",
      },
      startDate: "13 April 2023",
      endDate: "13 April 2023",
      details: "1 Person",
      price: "$200.00",
      status: "Confirmed",
    },
    {
      id: 487,
      tour: {
        imgUrl: "img/dashboard/booking/4.jpg",
        title: "Ayutthaya Historical Park Tour",
      },
      startDate: "14 April 2023",
      endDate: "14 April 2023",
      details: "4 People",
      price: "$250.00",
      status: "Confirmed",
    },
    {
      id: 488,
      tour: {
        imgUrl: "img/dashboard/booking/5.jpg",
        title: "Krabi Island Hopping Tour",
      },
      startDate: "15 April 2023",
      endDate: "15 April 2023",
      details: "2 People",
      price: "$300.00",
      status: "Confirmed",
    },
    {
      id: 489,
      tour: {
        imgUrl: "img/dashboard/booking/6.jpg",
        title: "Pattaya Coral Island Tour",
      },
      startDate: "16 April 2023",
      endDate: "16 April 2023",
      details: "5 People",
      price: "$350.00",
      status: "Confirmed",
    },
  ];

  const cancelledData: BookingsType[] = [
    {
      id: 490,
      tour: {
        imgUrl: "img/dashboard/booking/7.jpg",
        title: "Phuket Fantasea Show with Dinner",
      },
      startDate: "17 April 2023",
      endDate: "17 April 2023",
      details: "3 People",
      price: "$400.00",
      status: "Cancelled",
    },
    {
      id: 491,
      tour: {
        imgUrl: "img/dashboard/booking/8.jpg",
        title: "Koh Samui Angthong National Marine Park Tour",
      },
      startDate: "18 April 2023",
      endDate: "18 April 2023",
      details: "2 People",
      price: "$450.00",
      status: "Cancelled",
    },
  ];

  const pendingData: BookingsType[] = [
    {
      id: 492,
      tour: {
        imgUrl: "img/dashboard/booking/9.jpg",
        title: "Hua Hin Floating Market and Winery Tour",
      },
      startDate: "19 April 2023",
      endDate: "19 April 2023",
      details: "1 Person",
      price: "$100.00",
      status: "Pending",
    },
    {
      id: 493,
      tour: {
        imgUrl: "img/dashboard/booking/10.jpg",
        title: "Kanchanaburi River Kwai Tour",
      },
      startDate: "20 April 2023",
      endDate: "20 April 2023",
      details: "4 People",
      price: "$200.00",
      status: "Pending",
    },
    {
      id: 494,
      tour: {
        imgUrl: "img/dashboard/booking/11.jpg",
        title: "Sukhothai Historical Park Tour",
      },
      startDate: "21 April 2023",
      endDate: "21 April 2023",
      details: "2 People",
      price: "$180.00",
      status: "Pending",
    },
    {
      id: 495,
      tour: {
        imgUrl: "img/dashboard/booking/12.jpg",
        title: "Chiang Rai Golden Triangle Tour",
      },
      startDate: "22 April 2023",
      endDate: "22 April 2023",
      details: "3 People",
      price: "$220.00",
      status: "Pending",
    },
  ];

  const bookingData = [confirmedData, cancelledData, pendingData];

  return (
    <>
      {render("Bookings", "My Bookings")}
      <div className="rounded-12 bg-white shadow-2 px-40 pt-40 pb-30 md:px-20 md:pt-20 md:mb-20 mt-60">
        <Tabs className="-underline-2">
          <Tabs.TabList className="row x-gap-40 y-gap-10 lg:x-gap-20">
            {Status.map((status, index) => (
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
            {bookingData.map(
              (data: BookingsType[], index: number) => (
                <Tabs.TabContent key={index} index={index}>
                  <Table headers={tableHeaders} showEdit={true} data={data} />
                  {/* <Pagination /> */}
                </Tabs.TabContent>
              )
            )}
          </Tabs.TabContents>
        </Tabs>
      </div>
    </>
  );
};

export default Bookings;
