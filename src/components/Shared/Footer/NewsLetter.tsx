import Button from "../Button/Button";
import Translator from "./Translator";

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

    <h4 className="text-20 fw-500 mt-30">Translate</h4>
    <div className="mt-10 text-14">
      <Translator />
    </div>
  </div>
);

export default Newsletter;
