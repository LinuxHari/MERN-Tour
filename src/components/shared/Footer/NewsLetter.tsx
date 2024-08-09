import Button from "../Button/Button";

const Newsletter = () => (
    <div className="col-lg-3 col-md-6">
      <h4 className="text-20 fw-500">Newsletter</h4>
      <p className="mt-20">Subscribe to the free newsletter and stay up to date</p>
      <div className="footer__newsletter">
        <input type="email" placeholder="Your email address" />
        <Button buttonType="primary" className="my-1" showIcon={false}>
          Send
        </Button>
      </div>
  
      <h4 className="text-20 fw-500 mt-30">Mobile Apps</h4>
      <ul className="mt-10 text-14">
        <li>
          <a className="d-flex items-center" href="#">
            <i className="icon-apple text-16 mr-10"></i> iOS App
          </a>
        </li>
        <li>
          <a className="d-flex items-center mt-10" href="#">
            <i className="icon-android text-16 mr-10"></i> Android App
          </a>
        </li>
      </ul>
    </div>
  );

export default Newsletter