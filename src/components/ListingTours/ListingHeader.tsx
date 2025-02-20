import useWindowSize from "../../hooks/useWindowSize";
import BreadCrumbs from "../Shared/BreadCrumbs/BreadCrumbs";

const ListingHeader = ({destination}: {destination: string}) => {
  const {isMobile} = useWindowSize();

  return (
    <section className={`${isMobile ? "pageHeader -type-3" : ""}`}>
      <div className="container">
        <div className="col-auto">
          <BreadCrumbs destination={destination} />
        </div>
        <div className="row pt-20">
          <div className="col-auto">
            <h1 className="pageHeader__title">
              Explore all things to do in {destination}
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ListingHeader;
