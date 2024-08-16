import Cards from "../Shared/Cards/Cards";

const TourSuggestions = () => {
  return (
    <section className="layout-pt-xl layout-pb-xl">
      <div className="container">
        <div className="row">
          <div className="col-auto">
            <h2 className="text-30">You might also like...</h2>
          </div>       
        </div>
        <Cards/>
      </div>
    </section>
  );
};

export default TourSuggestions;
