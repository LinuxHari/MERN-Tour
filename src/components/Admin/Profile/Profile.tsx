import { RenderProps } from "../../../type";

const Profile = ({render}: RenderProps) => {
  return (
      <>
        {render("Profile", "Manage Profile")}
        <div className="rounded-12 bg-white shadow-2 px-40 pt-40 pb-30">
        <h5 className="text-20 fw-500 mb-30">Profile Details</h5>

        <div className="contactForm row y-gap-30">
          <div className="col-md-6">
            <div className="form-input ">
              <input type="text" required />
              <label className="lh-1 text-16 text-light-1">Name</label>
            </div>
          </div>

          <div className="col-md-6">
            <div className="form-input ">
              <input type="text" required />
              <label className="lh-1 text-16 text-light-1">Last Name</label>
            </div>
          </div>

          <div className="col-md-6">
            <div className="form-input ">
              <input type="text" required />
              <label className="lh-1 text-16 text-light-1">Phone</label>
            </div>
          </div>

          <div className="col-md-6">
            <div className="form-input ">
              <input type="text" required />
              <label className="lh-1 text-16 text-light-1">Email</label>
            </div>
          </div>

          <div className="col-md-6">
            <div className="form-input ">
              <textarea required rows={8}></textarea>
              <label className="lh-1 text-16 text-light-1">Info</label>
            </div>
          </div>

          <div className="col-12">
            <h4 className="text-18 fw-500 mb-20">Your photo</h4>

            <div className="row x-gap-20 y-gap">
              <div className="col-auto">
                <div className="size-200 rounded-12 border-dash-1 bg-accent-1-05 flex-center flex-column">
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M11.6663 12.9167C10.5157 12.9167 9.58301 13.8494 9.58301 15C9.58301 16.1506 10.5157 17.0834 11.6663 17.0834C12.8169 17.0834 13.7497 16.1506 13.7497 15C13.7497 13.8494 12.8169 12.9167 11.6663 12.9167ZM7.08301 15C7.08301 12.4687 9.13504 10.4167 11.6663 10.4167C14.1976 10.4167 16.2497 12.4687 16.2497 15C16.2497 17.5314 14.1976 19.5834 11.6663 19.5834C9.13504 19.5834 7.08301 17.5314 7.08301 15Z"
                      fill="#EB662B"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M16.9093 26.0079C14.8264 28.3404 12.654 31.5307 10.3572 35.613C10.0187 36.2147 9.25653 36.428 8.65487 36.0895C8.0532 35.7509 7.83988 34.9889 8.17838 34.3872C10.5233 30.2194 12.7967 26.8597 15.0446 24.3427C17.2867 21.8319 19.5642 20.0907 21.9317 19.2709C24.3447 18.4352 26.754 18.5917 29.1295 19.699C31.4633 20.7869 33.7245 22.7714 35.9702 25.5269C36.4062 26.062 36.326 26.8495 35.7908 27.2855C35.2557 27.7217 34.4683 27.6414 34.0322 27.1062C31.9112 24.5035 29.9327 22.8317 28.0733 21.9649C26.2557 21.1177 24.518 21.0209 22.7498 21.6332C20.936 22.2614 18.9978 23.6692 16.9093 26.0079Z"
                      fill="#EB662B"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M2.73524 6.06863C4.21994 4.58393 6.23359 3.75 8.33317 3.75H20.4665C21.1568 3.75 21.7165 4.30965 21.7165 5C21.7165 5.69035 21.1568 6.25 20.4665 6.25H8.33317C6.89654 6.25 5.51879 6.82062 4.503 7.8364C3.4872 8.8522 2.9165 10.23 2.9165 11.6667V28.3333C2.9165 29.7698 3.48717 31.1475 4.503 32.1633C5.51885 33.1793 6.89662 33.75 8.33317 33.75H28.3332C29.7697 33.75 31.1475 33.1793 32.1633 32.1633C33.1792 31.1475 33.7498 29.7698 33.7498 28.3333V20C33.7498 19.3097 34.3095 18.75 34.9998 18.75C35.6902 18.75 36.2498 19.3097 36.2498 20V28.3333C36.2498 30.433 35.4158 32.4465 33.9312 33.9312C32.4465 35.4158 30.4328 36.25 28.3332 36.25H8.33317C6.23349 36.25 4.21987 35.4158 2.73524 33.9312C1.25059 32.4465 0.416504 30.433 0.416504 28.3333V11.6667C0.416504 9.56707 1.25056 7.55332 2.73524 6.06863Z"
                      fill="#EB662B"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M31.25 0.13327C31.9403 0.13327 32.5 0.692913 32.5 1.38327V14.7166C32.5 15.407 31.9403 15.9666 31.25 15.9666C30.5597 15.9666 30 15.407 30 14.7166V1.38327C30 0.692913 30.5597 0.13327 31.25 0.13327Z"
                      fill="#EB662B"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M30.3674 0.499385C30.8556 0.011232 31.6469 0.011232 32.1351 0.499385L37.4684 5.83273C37.9566 6.32088 37.9566 7.11233 37.4684 7.60049C36.9803 8.08864 36.1889 8.08864 35.7008 7.60049L31.2513 3.15103L26.8018 7.60049C26.3136 8.08864 25.5221 8.08864 25.0341 7.60049C24.5459 7.11233 24.5459 6.32088 25.0341 5.83273L30.3674 0.499385Z"
                      fill="#EB662B"
                    />
                  </svg>

                  <div className="text-16 fw-500 text-accent-1 mt-10">
                    Upload Images
                  </div>
                </div>
              </div>

              <div className="col-auto">
                <div className="relative">
                  <img
                    src="img/dashboard/addtour/1.jpg"
                    alt="image"
                    className="size-200 rounded-12 object-cover"
                  />
                  <button className="absoluteIcon1 button -dark-1">
                    <i className="icon-delete text-18"></i>
                  </button>
                </div>
              </div>
            </div>

            <div className="text-14 mt-20">
              PNG or JPG no bigger than 800px wide and tall.
            </div>

            <button className="button -md -dark-1 bg-accent-1 text-white mt-30">
              Save Changes
              <i className="icon-arrow-top-right text-16 ml-10"></i>
            </button>
          </div>
        </div>
      </div>

      <div className="rounded-12 bg-white shadow-2 px-40 pt-40 pb-30 mt-30">
        <h5 className="text-20 fw-500 mb-30">Change Password</h5>

        <div className="contactForm y-gap-30">
          <div className="row y-gap-30">
            <div className="col-md-6">
              <div className="form-input ">
                <input type="text" required />
                <label className="lh-1 text-16 text-light-1">
                  Old password
                </label>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-6">
              <div className="form-input ">
                <input type="text" required />
                <label className="lh-1 text-16 text-light-1">
                  New password
                </label>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-6">
              <div className="form-input ">
                <input type="text" required />
                <label className="lh-1 text-16 text-light-1">
                  Confirm new password
                </label>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-12">
              <button className="button -md -dark-1 bg-accent-1 text-white">
                Save Changes
                <i className="icon-arrow-top-right text-16 ml-10"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
      </>
  );
};

export default Profile;
