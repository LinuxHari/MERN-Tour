import Button from "../../Shared/Button/Button";
import Image from "../../Shared/Image/Image";

const OfferBanner = () => {
  return (
    <section className="cta -type-2">
      <div className="cta__bg">
        <Image src="img/cta/bg.png" alt="" />

        <div className="cta__image">
          <Image src="img/cta/fg.png" alt="" />
          <Image src="img/cta/shape.svg" alt="" />
          <Image src="img/cta/shape2.svg" alt="" />
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-xxl-4 col-xl-5 col-lg-6 col-md-7">
            <div className="cta__content">
              <h2 className="text-40 md:text-30  lh-13">
                Grab up to <span className="text-accent-1">35% off </span>
                <br className="lg:d-none" />
                on your favorite <br className="lg:d-none" />
                Destination
              </h2>

              <p className="mt-10">Limited time offer, don&apos;t miss the opportunity</p>

              <div className="mt-30 md:mt-20">
                <Button buttonType="primary" type="button" onClick={() => window.scrollTo(0, 0)}>
                  Book Now
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OfferBanner;
