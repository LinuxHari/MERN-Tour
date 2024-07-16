import { NOTIFICATIONS } from "../../../data";

const RecentActivities = () => {
  return (
    <div className="col-xl-4 col-lg-12 col-md-6">
      <div className="px-30 py-25 rounded-12 bg-white shadow-2">
        <div className="d-flex items-center justify-between">
          <div className="text-18 fw-500">Recent Activities</div>
        </div>

        <div className="row y-gap-30 pt-30">
          {NOTIFICATIONS.map((notification, index) => (
            <div className="col-12" key={index}>
              <div className="d-flex items-center">
                <div className="flex-center size-40 bg-accent-1-05 rounded-full">
                  <i className={`${notification.icon} text-16`}></i>
                </div>
                <div className="lh-14 ml-10">{notification.message}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="pt-40">
          <button className="button -md -outline-accent-1 col-12 text-accent-1">
            View More
            <i className="icon-arrow-top-right text-16 ml-10"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default RecentActivities;
