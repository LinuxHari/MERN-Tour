import TourService from "./TourService";

const TourServices = () => {
  const tourDetails = [
    {
      icon: "icon-clock",
      title: "Duration",
      description: "3 days",
    },
    {
      icon: "icon-teamwork",
      title: "Group Size",
      description: "10 people",
    },
    {
      icon: "icon-birthday-cake",
      title: "Ages",
      description: "18-99 yrs",
    },
    {
      icon: "icon-translate",
      title: "Languages",
      description: "English, Japanese",
    },
  ];

  return (
    <div className="row y-gap-20 justify-between items-center layout-pb-md">
      {tourDetails.map((detail, index) => (
        <div key={index} className="col-lg-3 col-6">
          <TourService {...detail} />
        </div>
      ))}
    </div>
  );
};

export default TourServices;