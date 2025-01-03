import Button from "../components/Shared/Button/Button";

const NotFound = () => {
  return (
    <section className="nopage mt-header">
      <div className="container">
        <div className="row y-gap-30 justify-between items-center">
          <div className="col-xl-6 col-lg-6">
            <img src="img/404/1.svg" alt="" />
          </div>

          <div className="col-xl-5 col-lg-6">
            <div className="nopage__content pr-30 lg:pr-0">
              <h1>
                40<span className="text-accent-1">4</span>
              </h1>
              <h2 className="text-30 md:text-24 fw-700">Oops! It looks like you&apos;re lost.</h2>
              <p>
                The page you&apos;re looking for isn&apos;t available. Try to search again or use
                the go to.
              </p>

              <Button buttonType="link" to="/">
                Go Home
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
