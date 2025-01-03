import SearchForm from "./SearchForm";

const Hero = () => {
  return (
    <section className="hero -type-1">
      <div className="hero__bg">
        <img src="img/hero/1/1.png" alt="" />
        <img src="img/hero/1/shape.svg" alt="" />
      </div>

      <div data-anim-wrap className="container">
        <div className="row justify-center">
          <div className="col-lg-12 col-xl-10">
            <div data-anim-child="slide-up" className="hero__content is-in-view">
              <h1 className="hero__title">Your world of joy</h1>

              <p className="hero__text">
                From local escapes to far-flung adventures, find what makes you happy anytime,
                anywhere
              </p>

              <div className="mt-60 md:mt-35">
                <SearchForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
