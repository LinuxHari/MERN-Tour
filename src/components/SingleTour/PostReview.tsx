import { Controller, useForm } from "react-hook-form";
import TourSectionLayout from "../../layouts/TourSectionLayout";
import Button from "../Shared/Button/Button";
import Input from "../Shared/Input/Input";
import Textarea from "../Shared/Teaxtarea/Textarea";
import StarRating from "./StarRating";
import StarRatingSchema, { RatingType } from "../../schema/reviewSchema";
import { zodResolver } from "@hookform/resolvers/zod";

type PostReviewProps = {
  onSubmit: (data: RatingType) => void
  isLoading: boolean
}

const PostReview = ({ onSubmit, isLoading }: PostReviewProps) => {
  const form = useForm<RatingType>({ resolver: zodResolver(StarRatingSchema) });
  const { control, handleSubmit } = form;
  return (
    <TourSectionLayout title="Leave a Review" showBorder={false}>
      <form onSubmit={handleSubmit(onSubmit)}>
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

      <div className="contactForm y-gap-30 pt-30">
        <div className="col-12">
          <Input type="text" required label="How was the tour?" name="title" />
        </div>

        <div className="row">
          <div className="col-12">
            <Textarea label="What do you think?" name="comment" rows={8} />
          </div>
        </div>

        <div className="row">
          <div className="col-12">
            <Button buttonType="primary" isLoading={isLoading} disabled={isLoading}>Post Review</Button>
          </div>
        </div>
      <div/>
      </form>
    </TourSectionLayout>
  );
};

export default PostReview;
