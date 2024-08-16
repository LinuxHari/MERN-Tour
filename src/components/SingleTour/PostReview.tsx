import TourSectionLayout from "../../layouts/TourSectionLayout";
import Button from "../Shared/Button/Button";
import Input from "../Shared/Input/Input";
import Textarea from "../Shared/Teaxtarea/Textarea";

const PostReview = () => {
  return (
    <TourSectionLayout title="Leave a Review" showBorder={false}>
      <p className="mt-30">
        Your email address will not be published. Required fields are marked *
      </p>

      <div className="reviewsGrid pt-30">
        <div className="reviewsGrid__item">
          Location
          <div className="d-flex x-gap-5 pl-20">
            <i className="icon-star text-10 text-yellow-2"></i>

            <i className="icon-star text-10 text-yellow-2"></i>

            <i className="icon-star text-10 text-yellow-2"></i>

            <i className="icon-star text-10 text-yellow-2"></i>

            <i className="icon-star text-10 text-yellow-2"></i>
          </div>
        </div>

        <div className="reviewsGrid__item">
          Amenities
          <div className="d-flex x-gap-5 pl-20">
            <i className="icon-star text-10 text-yellow-2"></i>

            <i className="icon-star text-10 text-yellow-2"></i>

            <i className="icon-star text-10 text-yellow-2"></i>

            <i className="icon-star text-10 text-yellow-2"></i>

            <i className="icon-star text-10 text-yellow-2"></i>
          </div>
        </div>

        <div className="reviewsGrid__item">
          Food
          <div className="d-flex x-gap-5 pl-20">
            <i className="icon-star text-10 text-yellow-2"></i>

            <i className="icon-star text-10 text-yellow-2"></i>

            <i className="icon-star text-10 text-yellow-2"></i>

            <i className="icon-star text-10 text-yellow-2"></i>

            <i className="icon-star text-10 text-yellow-2"></i>
          </div>
        </div>

        <div className="reviewsGrid__item">
          Room
          <div className="d-flex x-gap-5 pl-20">
            <i className="icon-star text-10 text-yellow-2"></i>

            <i className="icon-star text-10 text-yellow-2"></i>

            <i className="icon-star text-10 text-yellow-2"></i>

            <i className="icon-star text-10 text-yellow-2"></i>

            <i className="icon-star text-10 text-yellow-2"></i>
          </div>
        </div>

        <div className="reviewsGrid__item">
          Price
          <div className="d-flex x-gap-5 pl-20">
            <i className="icon-star text-10 text-yellow-2"></i>

            <i className="icon-star text-10 text-yellow-2"></i>

            <i className="icon-star text-10 text-yellow-2"></i>

            <i className="icon-star text-10 text-yellow-2"></i>

            <i className="icon-star text-10 text-yellow-2"></i>
          </div>
        </div>

        <div className="reviewsGrid__item">
          Tour Operator
          <div className="d-flex x-gap-5 pl-20">
            <i className="icon-star text-10 text-yellow-2"></i>

            <i className="icon-star text-10 text-yellow-2"></i>

            <i className="icon-star text-10 text-yellow-2"></i>

            <i className="icon-star text-10 text-yellow-2"></i>

            <i className="icon-star text-10 text-yellow-2"></i>
          </div>
        </div>
      </div>

      <form className="contactForm y-gap-30 pt-30">
        <div className="row y-gap-30">
          <div className="col-md-6">
            <Input type="text" required label="Name" />
          </div>
        <div className="col-md-6">
          <Input type="email" required label="Email" />
        </div>
        </div>
      <div className="col-12">
        <Input type="text" required label="Title" />
      </div>

      <div className="row">
        <div className="col-12">
          <Textarea label="Comment" rows={8} />
        </div>
      </div>

      <div className="row">
        <div className="col-12">
          <Button buttonType="primary">Post Comment</Button>
        </div>
      </div>
      </form>
    </TourSectionLayout>
  );
};

export default PostReview;
