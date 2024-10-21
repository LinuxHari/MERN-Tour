import { Link } from "react-router-dom";
import Button from "../components/Shared/Button/Button";

const Login = () => {
  return (
    <section className="mt-header layout-pt-lg layout-pb-lg">
      <div className="container">
        <div className="row justify-center">
          <div className="col-xl-6 col-lg-7 col-md-9">
            <div className="text-center mb-60 md:mb-30">
              <h1 className="text-30">Log In</h1>
              <div className="text-18 fw-500 mt-20 md:mt-15">We're glad to see you again!</div>
              <div className="mt-5">
                Don't have an account?{" "}
                <Link to="/signup" className="text-accent-1">
                  Sign Up!
                </Link>
              </div>
            </div>

            <div className="contactForm border-1 rounded-12 px-60 py-60 md:px-25 md:py-30">
              <div className="form-input">
                <input type="email" required />
                <label className="lh-1 text-16 text-light-1">Email Address</label>
              </div>

              <div className="form-input mt-30">
                <input type="email" required />
                <label className="lh-1 text-16 text-light-1">Password</label>
              </div>

                {/* <div className="col-auto">
                  <Link to="#">Lost your password?</Link>
                </div> */}
              </div>

              <Button type="submit" buttonType="primary" className="my-4">
                Log In
              </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
