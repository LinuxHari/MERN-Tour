import BreadCrumbs from "../Shared/BreadCrumbs/BreadCrumbs";

const ListingHeader = ({destination}: {destination: string}) => {
  return (
    <section data-anim="fade" className="pageHeader -type-3 is-in-view">
      <div className="container">
        <div className="col-auto">
          <BreadCrumbs destination={destination} />
        </div>
        <div className="row pt-30">
          <div className="col-auto">
            <h1 className="pageHeader__title">Explore all things to do in {destination}</h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ListingHeader;
