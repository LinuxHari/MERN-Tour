import {useTrendingToursQuery} from "../../../redux/api/baseApi";
import Cards from "../../Shared/Cards/Cards";
import CardSkeleton from "../../Skeletons/CardSkeleton";

const TopTrending = () => {
  const {data: tours, isLoading, isError} = useTrendingToursQuery();

  if (!tours || !tours.length || isError) return null;

  if (isLoading) return Array.from({length: 3}).map((_, i) => <CardSkeleton key={i} />);

  return (
    <section className="layout-pt-xl layout-pb-xl ">
      <div className="relative py-40 sm:py-20">
        <div className="sectionBg -w-1530 rounded-12 bg-light-1" />

        <div className="container">
          <div className="col-auto">
            <h2 className="text-30 md:text-24">Top Trending</h2>
          </div>
          <Cards tours={tours} />
        </div>
      </div>
    </section>
  );
};

export default TopTrending;
