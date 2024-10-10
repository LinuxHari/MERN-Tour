import TourSectionLayout from "../../layouts/TourSectionLayout";

type TourOverviewProps = {
  description: string;
  highlights: string[];
}

const TourOverview = ({ description, highlights }: TourOverviewProps) => {
  return (
  <TourSectionLayout title="Tour Overview">
    <p className="mt-20">
      {description}
    </p>

    <h3 className="text-20 fw-500 mt-20">Tour Highlights</h3>
    <ul className="ulList mt-20">
      {
        highlights.map((highlight) => (
          <li key={highlight}>{highlight}</li>
        ))
      }
    </ul>
  </TourSectionLayout>
  )

    
};

export default TourOverview;
