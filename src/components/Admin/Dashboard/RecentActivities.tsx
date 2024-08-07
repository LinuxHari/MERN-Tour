import { NOTIFICATIONS } from "../../../data";
import Button from "../../shared/Button/Button";

const RecentActivities = () => {

  const icons = {Review: 'icon-review', Favorite: 'icon-heart', Approved: 'icon-home'}

  return (
    <div className="col-xl-4 col-lg-12 col-md-6">
      <div className="px-30 py-25 rounded-12 bg-white shadow-2">
        <div className="d-flex items-center justify-between">
          <div className="text-18 fw-500">Recent Activities</div>
        </div>

        <div className="row y-gap-30 pt-30">
          {NOTIFICATIONS.map(({message, type}, index) => (
            <div className="col-12" key={index}>
              <div className="d-flex items-center">
                <div className="flex-center size-40 bg-accent-1-05 rounded-full">
                  <i className={`${icons[type as keyof typeof icons]} text-16`}></i>
                </div>
                <div className="lh-14 ml-10">{message}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="pt-40">
        <Button buttonType="secondary" className="col-12">View More</Button>
        </div>
      </div>
    </div>
  );
};

export default RecentActivities;
