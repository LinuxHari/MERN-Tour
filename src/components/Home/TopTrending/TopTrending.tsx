import Cards from "../../Shared/Cards/Cards";

const TopTrending = () => {
  return (
    <section className="layout-pt-xl layout-pb-xl ">
      <div className="relative py-40 sm:py-20">
        <div className="sectionBg -w-1530 rounded-12 bg-light-1"></div>

        <div className="container">
          <div className="col-auto">
            <h2 className="text-30 md:text-24">Top Trending</h2>
          </div>
          <Cards />
        </div>
      </div>
    </section>
  );
};

export default TopTrending;
