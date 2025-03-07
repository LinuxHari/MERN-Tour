import TourService from "./TourService";

type TourServicesProps = {
  duration: number;
  minAge: number;
  capacity: number;
  languages: string[];
};

const TourServices = ({
  duration,
  minAge,
  capacity,
  languages,
}: TourServicesProps) => {
  const tourDetails = [
    {
      icon: "icon-clock",
      title: "Duration",
      description: `${duration} days`,
    },
    {
      icon: "icon-teamwork",
      title: "Group Size",
      description: `${capacity} people`,
    },
    {
      icon: "icon-birthday-cake",
      title: "Ages",
      description: `${minAge}-99 yrs`,
    },
    {
      icon: "icon-translate",
      title: "Languages",
      description: languages.join(", "),
    },
  ];

  return (
    <div className="row y-gap-20 justify-between items-start layout-pb-md">
      {tourDetails.map((detail, index) => (
        <div key={index} className="col-lg-3 col-6">
          <TourService {...detail} />
        </div>
      ))}
    </div>
  );
};

export default TourServices;
