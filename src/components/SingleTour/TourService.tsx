type Props = {
    icon: string
    title: string
    description: string
}

const TourService = ({icon, title, description}: Props) => {
  return (
    <div className="d-flex items-center">
      <div className="flex-center size-50 rounded-12 border-1">
        <i className={`text-20 ${icon}`}></i>
      </div>

      <div className="ml-10">
        <div className="lh-16">{title}</div>
        <div className="text-14 text-light-2 lh-16">{description}</div>
      </div>
    </div>
  );
};

export default TourService;
