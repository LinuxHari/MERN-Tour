import { Link } from "react-router-dom"
import Button from "../components/Shared/Button/Button"

const Signup = () => {
  return (
    
    <section className="mt-header layout-pt-lg layout-pb-lg">
      <div className="container">
        <div className="row justify-center">
          <div className="col-xl-6 col-lg-7 col-md-9">
            <div className="text-center mb-60 md:mb-30">
              <h1 className="text-30">Sign up</h1>
              <div className="text-18 fw-500 mt-20 md:mt-15">Let's create your account!</div>
              <div className="mt-5">
                Already have an account? <Link to="/login" className="text-accent-1">Log In!</Link>
              </div>
            </div>

            <div className="contactForm border-1 rounded-12 px-60 py-60 md:px-25 md:py-30">
              <div className="form-input mt-30">
                <input type="text" required/>
                <label className="lh-1 text-16 text-light-1">Name</label>
              </div>

              <div className="form-input mt-30">
                <input type="email" required/>
                <label className="lh-1 text-16 text-light-1">Email</label>
              </div>

              <div className="form-input mt-30">
                <input type="email" required/>
                <label className="lh-1 text-16 text-light-1">Password</label>
              </div>

              <div className="form-input mt-30">
                <input type="email" required/>
                <label className="lh-1 text-16 text-light-1">Confirm password</label>
              </div>

              <Button type="submit" buttonType="primary" className="my-4">
                Sign up
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Signup