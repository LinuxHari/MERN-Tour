import {useTrendingToursQuery} from "../../redux/api/baseApi";
import Cards from "../Shared/Cards/Cards";
import CardSkeleton from "../Skeletons/CardSkeleton";

type TourSuggestionsProps = {
  tourId?: string;
};

const TourSuggestions = ({tourId}: TourSuggestionsProps) => {
  const {data: tours, isLoading, isError} = useTrendingToursQuery();

  if (!tours || !tours.length || isError) return null;

  if (isLoading) return Array.from({length: 3}).map((_, i) => <CardSkeleton key={i} />);

  const allTours = tourId ? tours.filter((tour) => tour.tourId !== tourId) : tours;

  return (
    <section className="layout-pb-xl">
      <div className="container">
        <div className="row">
          <div className="col-auto">
            <h2 className="text-30">You might also like...</h2>
          </div>
        </div>
        <Cards tours={allTours} />
      </div>
    </section>
  );
};

export default TourSuggestions;
