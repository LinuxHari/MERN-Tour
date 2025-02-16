import Button from "../components/Shared/Button/Button";

const NotFound = () => {
  return (
    <section className="nopage mt-header">
      <div className="container">
        <div className="row y-gap-30 justify-between items-center">
          <div className="col-xl-6 col-lg-6" style={{minHeight: "50vh"}}>
            <img
              src="https://firebasestorage.googleapis.com/v0/b/mern-tours-e23a8.appspot.com/o/assets%2F404.png?alt=media&token=abb7d2f7-0c53-4427-9a76-d9c5e490e32b"
              alt="Not found"
            />
          </div>

          <div className="col-xl-5 col-lg-6">
            <div className="nopage__content pr-30 lg:pr-0">
              <h1>
                40<span className="text-accent-1">4</span>
              </h1>
              <h2 className="text-20 fw-500">
                Oops! It looks like you&apos;re lost.
              </h2>
              <p>
                The page you&apos;re looking for isn&apos;t available. Try to
                search again or use the go to.
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
