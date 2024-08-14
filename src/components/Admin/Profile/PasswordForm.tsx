import Button from "../../Shared/Button/Button";
import Input from "../../Shared/Input/Input";

const PasswordForm = () => {
  return (
    <div className="rounded-12 bg-white shadow-2 px-40 pt-40 pb-30 mt-30">
      <h5 className="text-20 fw-500 mb-30">Change Password</h5>

      <div className="contactForm y-gap-30">
        <div className="row y-gap-30">
          <div className="col-md-6">
            <Input label="Old password" type="password" />
          </div>
        </div>

        <div className="row">
          <div className="col-md-6">
            <Input label="New password" type="password" />
          </div>
        </div>

        <div className="row">
          <div className="col-md-6">
            <Input label="Confirm new password" type="password" />
          </div>
        </div>

        <div className="row">
          <div className="col-12">
            <Button buttonType="primary">
              Save Changes
              <i className="icon-arrow-top-right text-16 ml-10"></i>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PasswordForm;
