import { Controller, useForm } from "react-hook-form";
import TourSectionLayout from "../../layouts/TourSectionLayout";
import Button from "../Shared/Button/Button";
import Input from "../Shared/Input/Input";
import Textarea from "../Shared/Teaxtarea/Textarea";
import StarRating from "./StarRating";
import StarRatingSchema, { StarRatingType } from "../../schema/reviewSchema";
import { zodResolver } from "@hookform/resolvers/zod";

const PostReview = () => {
  const form = useForm<StarRatingType>({ resolver: zodResolver(StarRatingSchema) });
  const { control } = form;
  return (
    <TourSectionLayout title="Leave a Review" showBorder={false}>
      <p className="mt-30">Your email address will not be published. Required fields are marked *</p>

      <div className="reviewsGrid pt-30">
        <Controller
          control={control}
          name="ratings.Location"
          render={({ field: { onChange, value } }) => <StarRating label="Location" value={value} onChange={onChange} />}
        />
        <Controller
          control={control}
          name="ratings.Amenities"
          render={({ field: { onChange, value } }) => (
            <StarRating label="Amenities" value={value} onChange={onChange} />
          )}
        />
        <Controller
          control={control}
          name="ratings.Food"
          render={({ field: { onChange, value } }) => <StarRating label="Food" value={value} onChange={onChange} />}
        />
        <Controller
          control={control}
          name="ratings.Room"
          render={({ field: { onChange, value } }) => <StarRating label="Room" value={value} onChange={onChange} />}
        />
        <Controller
          control={control}
          name="ratings.Price"
          render={({ field: { onChange, value } }) => <StarRating label="Price" value={value} onChange={onChange} />}
        />
        {/* <div className="reviewsGrid__item">
          Tour Operator
          <div className="d-flex x-gap-5 pl-20">
            <i className="icon-star text-10 text-yellow-2"></i>

            <i className="icon-star text-10 text-yellow-2"></i>

            <i className="icon-star text-10 text-yellow-2"></i>

            <i className="icon-star text-10 text-yellow-2"></i>

            <i className="icon-star text-10 text-yellow-2"></i>
          </div>
        </div> */}
      </div>

      <form className="contactForm y-gap-30 pt-30">
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
