import {useEffect} from "react";
import toast from "react-hot-toast";
import {Controller, useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import TourSectionLayout from "../../layouts/TourSectionLayout";
import StarRatingSchema, {RatingType} from "../../schema/reviewSchema";
import Button from "../Shared/Button/Button";
import Input from "../Shared/Input/Input";
import Textarea from "../Shared/Teaxtarea/Textarea";
import {getFormErrorMessages} from "../../utils/getFormErrorMessages";
import StarRating from "./StarRating";

type PostReviewProps = {
  onSubmit: (data: RatingType) => void;
  isLoading: boolean;
};

const PostReview = ({onSubmit, isLoading}: PostReviewProps) => {
  const form = useForm<RatingType>({resolver: zodResolver(StarRatingSchema)});
  const {
    control,
    handleSubmit,
    formState: {errors},
    register,
    reset,
  } = form;

  const submitReview = (data: RatingType) => {
    onSubmit(data);
    reset();
  };

  useEffect(() => {
    if (Object.keys(errors).length) {
      const {errorMessages} = getFormErrorMessages(errors);

      toast.error(errorMessages[0]);
    }
  }, [errors]);

  return (
    <TourSectionLayout title="Leave a Review">
      <form onSubmit={handleSubmit(submitReview)}>
        <div className="reviewsGrid pt-30">
          <Controller
            control={control}
            name="ratings.Location"
            render={({field: {onChange, value}}) => <StarRating label="Location" value={value} onChange={onChange} />}
          />
          <Controller
            control={control}
            name="ratings.Amenities"
            render={({field: {onChange, value}}) => <StarRating label="Amenities" value={value} onChange={onChange} />}
          />
          <Controller
            control={control}
            name="ratings.Food"
            render={({field: {onChange, value}}) => <StarRating label="Food" value={value} onChange={onChange} />}
          />
          <Controller
            control={control}
            name="ratings.Room"
            render={({field: {onChange, value}}) => <StarRating label="Room" value={value} onChange={onChange} />}
          />
          <Controller
            control={control}
            name="ratings.Price"
            render={({field: {onChange, value}}) => <StarRating label="Price" value={value} onChange={onChange} />}
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
            <Input type="text" required label="How was the tour?" {...register("title")} />
          </div>

          <div className="row">
            <div className="col-12">
              <Textarea label="What do you think?" rows={8} {...register("comment")} />
            </div>
          </div>

          <div className="row">
            <div className="col-12 d-flex justify-content-end">
              <Button buttonType="primary" type="submit" isLoading={isLoading} disabled={isLoading}>
                Post Review
              </Button>
            </div>
          </div>
        </div>
      </form>
    </TourSectionLayout>
  );
};

export default PostReview;
