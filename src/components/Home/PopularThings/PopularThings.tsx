import {Link} from "react-router-dom";
import {POPULAR_THINGS} from "../../../data";
import Image from "../../Shared/Image/Image";

const PopularThings = () => {
  return (
    <section className="layout-pt-xl layout-pb-xl">
      <div className="container">
        <div className="col-auto">
          <h2 className="text-30 md:text-24">Popular things to do</h2>
        </div>
        <div className="grid -type-1 pt-40 sm:pt-20">
          {POPULAR_THINGS.map((feature, index) => (
            <Link
              key={index}
              to={feature.url}
              className="featureCard -type-1 -hover-1 overflow-hidden rounded-12 px-30 py-30"
            >
              <div className="featureCard__image">
                <Image src={feature.image} alt={feature.title} />
              </div>
              <div className="featureCard__content">
                <h4 className="text-white">{feature.title}</h4>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularThings;
