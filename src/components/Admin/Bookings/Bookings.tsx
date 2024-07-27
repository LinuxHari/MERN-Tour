import { RenderProps } from "../../../type";
import Pagination from "../../shared/Pagination/Pagination";


const Bookings = ({render}: RenderProps) => {
  return (
    <>
     {render("Bookings", "My Bookings")}
      <div className="rounded-12 bg-white shadow-2 px-40 pt-40 pb-30 md:px-20 md:pt-20 md:mb-20 mt-60">
        <div className="tabs -underline-2 js-tabs">
          <div className="tabs__controls row x-gap-40 y-gap-10 lg:x-gap-20 js-tabs-controls">
            <div className="col-auto">
              <button
                className="tabs__button text-20 lh-12 fw-500 pb-15 lg:pb-0 js-tabs-button is-tab-el-active"
                data-tab-target=".-tab-item-1"
              >
                Approved
              </button>
            </div>

            <div className="col-auto">
              <button
                className="tabs__button text-20 lh-12 fw-500 pb-15 lg:pb-0 js-tabs-button "
                data-tab-target=".-tab-item-2"
              >
                Pending
              </button>
            </div>

            <div className="col-auto">
              <button
                className="tabs__button text-20 lh-12 fw-500 pb-15 lg:pb-0 js-tabs-button "
                data-tab-target=".-tab-item-3"
              >
                Cancelled
              </button>
            </div>
          </div>

          <div className="tabs__content js-tabs-content">
            <div className="tabs__pane -tab-item-1 is-tab-el-active">
              <div className="overflowAuto">
                <table className="tableTest mb-30">
                  <thead className="bg-light-1 rounded-12">
                    <tr>
                      <th>ID</th>
                      <th>Title</th>
                      <th>Start date</th>
                      <th>End date</th>
                      <th>Details</th>
                      <th>Price</th>
                      <th>Status</th>
                      <th>Action</th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr>
                      <td>#484</td>

                      <td className="min-w-300">
                        <div className="d-flex items-center">
                          <img src="img/dashboard/booking/1.jpg" alt="image" />
                          <div className="ml-20">
                            Phi Phi Islands Adventure Day Trip with Seaview
                            Lunch by V. Marine Tour
                          </div>
                        </div>
                      </td>

                      <td>11 April 2023</td>

                      <td>11 April 2023</td>

                      <td>2 People</td>

                      <td>$392.89</td>

                      <td>
                        <div className="circle text-purple-1">Approved</div>
                      </td>

                      <td>
                        <div className="d-flex items-center">
                          <button className="button -dark-1 size-35 bg-light-1 rounded-full flex-center">
                            <i className="icon-pencil text-14"></i>
                          </button>

                          <button className="button -dark-1 size-35 bg-light-1 rounded-full flex-center ml-10">
                            <i className="icon-delete text-14"></i>
                          </button>
                        </div>
                      </td>
                    </tr>

                    <tr>
                      <td>#484</td>

                      <td className="min-w-300">
                        <div className="d-flex items-center">
                          <img src="img/dashboard/booking/2.jpg" alt="image" />
                          <div className="ml-20">
                            Zipline 18 Platform and ATV Adventure Tour From
                            Phuket
                          </div>
                        </div>
                      </td>

                      <td>11 April 2023</td>

                      <td>11 April 2023</td>

                      <td>2 People</td>

                      <td>$392.89</td>

                      <td>
                        <div className="circle text-yellow-1">Pending</div>
                      </td>

                      <td>
                        <div className="d-flex items-center">
                          <button className="button -dark-1 size-35 bg-light-1 rounded-full flex-center">
                            <i className="icon-pencil text-14"></i>
                          </button>

                          <button className="button -dark-1 size-35 bg-light-1 rounded-full flex-center ml-10">
                            <i className="icon-delete text-14"></i>
                          </button>
                        </div>
                      </td>
                    </tr>

                    <tr>
                      <td>#484</td>

                      <td className="min-w-300">
                        <div className="d-flex items-center">
                          <img src="img/dashboard/booking/3.jpg" alt="image" />
                          <div className="ml-20">
                            Phang Nga Bay &amp; James Bond Island with Canoeing
                            By Big Boat
                          </div>
                        </div>
                      </td>

                      <td>11 April 2023</td>

                      <td>11 April 2023</td>

                      <td>2 People</td>

                      <td>$392.89</td>

                      <td>
                        <div className="circle text-red-2">Cancelled</div>
                      </td>

                      <td>
                        <div className="d-flex items-center">
                          <button className="button -dark-1 size-35 bg-light-1 rounded-full flex-center">
                            <i className="icon-pencil text-14"></i>
                          </button>

                          <button className="button -dark-1 size-35 bg-light-1 rounded-full flex-center ml-10">
                            <i className="icon-delete text-14"></i>
                          </button>
                        </div>
                      </td>
                    </tr>

                    <tr>
                      <td>#484</td>

                      <td className="min-w-300">
                        <div className="d-flex items-center">
                          <img src="img/dashboard/booking/4.jpg" alt="image" />
                          <div className="ml-20">
                            James Bond Island Tour from Phuket by Longtail Boat
                            with Lunch
                          </div>
                        </div>
                      </td>

                      <td>11 April 2023</td>

                      <td>11 April 2023</td>

                      <td>2 People</td>

                      <td>$392.89</td>

                      <td>
                        <div className="circle text-red-2">Cancelled</div>
                      </td>

                      <td>
                        <div className="d-flex items-center">
                          <button className="button -dark-1 size-35 bg-light-1 rounded-full flex-center">
                            <i className="icon-pencil text-14"></i>
                          </button>

                          <button className="button -dark-1 size-35 bg-light-1 rounded-full flex-center ml-10">
                            <i className="icon-delete text-14"></i>
                          </button>
                        </div>
                      </td>
                    </tr>

                    <tr>
                      <td>#484</td>

                      <td className="min-w-300">
                        <div className="d-flex items-center">
                          <img src="img/dashboard/booking/5.jpg" alt="image" />
                          <div className="ml-20">
                            Phuket City Tour: Karon View Point, Big Buddha &amp;
                            Wat Chalong
                          </div>
                        </div>
                      </td>

                      <td>11 April 2023</td>

                      <td>11 April 2023</td>

                      <td>2 People</td>

                      <td>$392.89</td>

                      <td>
                        <div className="circle text-red-2">Cancelled</div>
                      </td>

                      <td>
                        <div className="d-flex items-center">
                          <button className="button -dark-1 size-35 bg-light-1 rounded-full flex-center">
                            <i className="icon-pencil text-14"></i>
                          </button>

                          <button className="button -dark-1 size-35 bg-light-1 rounded-full flex-center ml-10">
                            <i className="icon-delete text-14"></i>
                          </button>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <Pagination/>
            </div>

            <div className="tabs__pane -tab-item-2 ">
              <div className="overflowAuto">
                <table className="tableTest mb-30">
                  <thead className="bg-light-1 rounded-12">
                    <tr>
                      <th>ID</th>
                      <th>Title</th>
                      <th>Start date</th>
                      <th>End date</th>
                      <th>Details</th>
                      <th>Price</th>
                      <th>Status</th>
                      <th>Action</th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr>
                      <td>#484</td>

                      <td className="min-w-300">
                        <div className="d-flex items-center">
                          <img src="img/dashboard/booking/1.jpg" alt="image" />
                          <div className="ml-20">
                            Phi Phi Islands Adventure Day Trip with Seaview
                            Lunch by V. Marine Tour
                          </div>
                        </div>
                      </td>

                      <td>11 April 2023</td>

                      <td>11 April 2023</td>

                      <td>2 People</td>

                      <td>$392.89</td>

                      <td>
                        <div className="circle text-purple-1">Approved</div>
                      </td>

                      <td>
                        <div className="d-flex items-center">
                          <button className="button -dark-1 size-35 bg-light-1 rounded-full flex-center">
                            <i className="icon-pencil text-14"></i>
                          </button>

                          <button className="button -dark-1 size-35 bg-light-1 rounded-full flex-center ml-10">
                            <i className="icon-delete text-14"></i>
                          </button>
                        </div>
                      </td>
                    </tr>

                    <tr>
                      <td>#484</td>

                      <td className="min-w-300">
                        <div className="d-flex items-center">
                          <img src="img/dashboard/booking/2.jpg" alt="image" />
                          <div className="ml-20">
                            Zipline 18 Platform and ATV Adventure Tour From
                            Phuket
                          </div>
                        </div>
                      </td>

                      <td>11 April 2023</td>

                      <td>11 April 2023</td>

                      <td>2 People</td>

                      <td>$392.89</td>

                      <td>
                        <div className="circle text-yellow-1">Pending</div>
                      </td>

                      <td>
                        <div className="d-flex items-center">
                          <button className="button -dark-1 size-35 bg-light-1 rounded-full flex-center">
                            <i className="icon-pencil text-14"></i>
                          </button>

                          <button className="button -dark-1 size-35 bg-light-1 rounded-full flex-center ml-10">
                            <i className="icon-delete text-14"></i>
                          </button>
                        </div>
                      </td>
                    </tr>

                    <tr>
                      <td>#484</td>

                      <td className="min-w-300">
                        <div className="d-flex items-center">
                          <img src="img/dashboard/booking/3.jpg" alt="image" />
                          <div className="ml-20">
                            Phang Nga Bay &amp; James Bond Island with Canoeing
                            By Big Boat
                          </div>
                        </div>
                      </td>

                      <td>11 April 2023</td>

                      <td>11 April 2023</td>

                      <td>2 People</td>

                      <td>$392.89</td>

                      <td>
                        <div className="circle text-red-2">Cancelled</div>
                      </td>

                      <td>
                        <div className="d-flex items-center">
                          <button className="button -dark-1 size-35 bg-light-1 rounded-full flex-center">
                            <i className="icon-pencil text-14"></i>
                          </button>

                          <button className="button -dark-1 size-35 bg-light-1 rounded-full flex-center ml-10">
                            <i className="icon-delete text-14"></i>
                          </button>
                        </div>
                      </td>
                    </tr>

                    <tr>
                      <td>#484</td>

                      <td className="min-w-300">
                        <div className="d-flex items-center">
                          <img src="img/dashboard/booking/4.jpg" alt="image" />
                          <div className="ml-20">
                            James Bond Island Tour from Phuket by Longtail Boat
                            with Lunch
                          </div>
                        </div>
                      </td>

                      <td>11 April 2023</td>

                      <td>11 April 2023</td>

                      <td>2 People</td>

                      <td>$392.89</td>

                      <td>
                        <div className="circle text-red-2">Cancelled</div>
                      </td>

                      <td>
                        <div className="d-flex items-center">
                          <button className="button -dark-1 size-35 bg-light-1 rounded-full flex-center">
                            <i className="icon-pencil text-14"></i>
                          </button>

                          <button className="button -dark-1 size-35 bg-light-1 rounded-full flex-center ml-10">
                            <i className="icon-delete text-14"></i>
                          </button>
                        </div>
                      </td>
                    </tr>

                    <tr>
                      <td>#484</td>

                      <td className="min-w-300">
                        <div className="d-flex items-center">
                          <img src="img/dashboard/booking/5.jpg" alt="image" />
                          <div className="ml-20">
                            Phuket City Tour: Karon View Point, Big Buddha &amp;
                            Wat Chalong
                          </div>
                        </div>
                      </td>

                      <td>11 April 2023</td>

                      <td>11 April 2023</td>

                      <td>2 People</td>

                      <td>$392.89</td>

                      <td>
                        <div className="circle text-red-2">Cancelled</div>
                      </td>

                      <td>
                        <div className="d-flex items-center">
                          <button className="button -dark-1 size-35 bg-light-1 rounded-full flex-center">
                            <i className="icon-pencil text-14"></i>
                          </button>

                          <button className="button -dark-1 size-35 bg-light-1 rounded-full flex-center ml-10">
                            <i className="icon-delete text-14"></i>
                          </button>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="pagination justify-center">
                <button className="pagination__button button -accent-1 mr-15 -prev">
                  <i className="icon-arrow-left text-15"></i>
                </button>

                <div className="pagination__count">
                  <a href="#">1</a>
                  <a href="#" className="is-active">
                    2
                  </a>
                  <a href="#">3</a>
                  <a href="#">4</a>
                  <a href="#">5</a>
                  <div>...</div>
                  <a href="#">20</a>
                </div>

                <button className="pagination__button button -accent-1 ml-15 -next">
                  <i className="icon-arrow-right text-15"></i>
                </button>
              </div>

              <div className="text-14 text-center mt-20">
                Showing results 1-30 of 1,415
              </div>
            </div>

            <div className="tabs__pane -tab-item-3 ">
              <div className="overflowAuto">
                <table className="tableTest mb-30">
                  <thead className="bg-light-1 rounded-12">
                    <tr>
                      <th>ID</th>
                      <th>Title</th>
                      <th>Start date</th>
                      <th>End date</th>
                      <th>Details</th>
                      <th>Price</th>
                      <th>Status</th>
                      <th>Action</th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr>
                      <td>#484</td>

                      <td className="min-w-300">
                        <div className="d-flex items-center">
                          <img src="img/dashboard/booking/1.jpg" alt="image" />
                          <div className="ml-20">
                            Phi Phi Islands Adventure Day Trip with Seaview
                            Lunch by V. Marine Tour
                          </div>
                        </div>
                      </td>

                      <td>11 April 2023</td>

                      <td>11 April 2023</td>

                      <td>2 People</td>

                      <td>$392.89</td>

                      <td>
                        <div className="circle text-purple-1">Approved</div>
                      </td>

                      <td>
                        <div className="d-flex items-center">
                          <button className="button -dark-1 size-35 bg-light-1 rounded-full flex-center">
                            <i className="icon-pencil text-14"></i>
                          </button>

                          <button className="button -dark-1 size-35 bg-light-1 rounded-full flex-center ml-10">
                            <i className="icon-delete text-14"></i>
                          </button>
                        </div>
                      </td>
                    </tr>

                    <tr>
                      <td>#484</td>

                      <td className="min-w-300">
                        <div className="d-flex items-center">
                          <img src="img/dashboard/booking/2.jpg" alt="image" />
                          <div className="ml-20">
                            Zipline 18 Platform and ATV Adventure Tour From
                            Phuket
                          </div>
                        </div>
                      </td>

                      <td>11 April 2023</td>

                      <td>11 April 2023</td>

                      <td>2 People</td>

                      <td>$392.89</td>

                      <td>
                        <div className="circle text-yellow-1">Pending</div>
                      </td>

                      <td>
                        <div className="d-flex items-center">
                          <button className="button -dark-1 size-35 bg-light-1 rounded-full flex-center">
                            <i className="icon-pencil text-14"></i>
                          </button>

                          <button className="button -dark-1 size-35 bg-light-1 rounded-full flex-center ml-10">
                            <i className="icon-delete text-14"></i>
                          </button>
                        </div>
                      </td>
                    </tr>

                    <tr>
                      <td>#484</td>

                      <td className="min-w-300">
                        <div className="d-flex items-center">
                          <img src="img/dashboard/booking/3.jpg" alt="image" />
                          <div className="ml-20">
                            Phang Nga Bay &amp; James Bond Island with Canoeing
                            By Big Boat
                          </div>
                        </div>
                      </td>

                      <td>11 April 2023</td>

                      <td>11 April 2023</td>

                      <td>2 People</td>

                      <td>$392.89</td>

                      <td>
                        <div className="circle text-red-2">Cancelled</div>
                      </td>

                      <td>
                        <div className="d-flex items-center">
                          <button className="button -dark-1 size-35 bg-light-1 rounded-full flex-center">
                            <i className="icon-pencil text-14"></i>
                          </button>

                          <button className="button -dark-1 size-35 bg-light-1 rounded-full flex-center ml-10">
                            <i className="icon-delete text-14"></i>
                          </button>
                        </div>
                      </td>
                    </tr>

                    <tr>
                      <td>#484</td>

                      <td className="min-w-300">
                        <div className="d-flex items-center">
                          <img src="img/dashboard/booking/4.jpg" alt="image" />
                          <div className="ml-20">
                            James Bond Island Tour from Phuket by Longtail Boat
                            with Lunch
                          </div>
                        </div>
                      </td>

                      <td>11 April 2023</td>

                      <td>11 April 2023</td>

                      <td>2 People</td>

                      <td>$392.89</td>

                      <td>
                        <div className="circle text-red-2">Cancelled</div>
                      </td>

                      <td>
                        <div className="d-flex items-center">
                          <button className="button -dark-1 size-35 bg-light-1 rounded-full flex-center">
                            <i className="icon-pencil text-14"></i>
                          </button>

                          <button className="button -dark-1 size-35 bg-light-1 rounded-full flex-center ml-10">
                            <i className="icon-delete text-14"></i>
                          </button>
                        </div>
                      </td>
                    </tr>

                    <tr>
                      <td>#484</td>

                      <td className="min-w-300">
                        <div className="d-flex items-center">
                          <img src="img/dashboard/booking/5.jpg" alt="image" />
                          <div className="ml-20">
                            Phuket City Tour: Karon View Point, Big Buddha &amp;
                            Wat Chalong
                          </div>
                        </div>
                      </td>

                      <td>11 April 2023</td>

                      <td>11 April 2023</td>

                      <td>2 People</td>

                      <td>$392.89</td>

                      <td>
                        <div className="circle text-red-2">Cancelled</div>
                      </td>

                      <td>
                        <div className="d-flex items-center">
                          <button className="button -dark-1 size-35 bg-light-1 rounded-full flex-center">
                            <i className="icon-pencil text-14"></i>
                          </button>

                          <button className="button -dark-1 size-35 bg-light-1 rounded-full flex-center ml-10">
                            <i className="icon-delete text-14"></i>
                          </button>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="pagination justify-center">
                <button className="pagination__button button -accent-1 mr-15 -prev">
                  <i className="icon-arrow-left text-15"></i>
                </button>

                <div className="pagination__count">
                  <a href="#">1</a>
                  <a href="#" className="is-active">
                    2
                  </a>
                  <a href="#">3</a>
                  <a href="#">4</a>
                  <a href="#">5</a>
                  <div>...</div>
                  <a href="#">20</a>
                </div>

                <button className="pagination__button button -accent-1 ml-15 -next">
                  <i className="icon-arrow-right text-15"></i>
                </button>
              </div>

              <div className="text-14 text-center mt-20">
                Showing results 1-30 of 1,415
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Bookings;
