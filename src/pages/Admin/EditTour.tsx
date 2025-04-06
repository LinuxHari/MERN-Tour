import {useParams} from "react-router-dom";
import withAuth from "../../hocs/withAuth";
import {RenderProps} from "../../type";
import TourForm from "../../components/Admin/EditTour/EditTourForm";
import {EditTourSchemaType} from "../../schema/tourSchema";
import {useGetAdminPublishedTourQuery} from "../../redux/api/adminApi";
import CommonSkeleton from "../../components/Skeletons/CommonSkeleton";
import NoResult from "../../components/Shared/NoResult/NoResult";

const EditTour = ({render}: RenderProps) => {
  const {tourId} = useParams();
  const {data: tour, isLoading, isError} = useGetAdminPublishedTourQuery(tourId as string);

  if (isLoading) return <CommonSkeleton />;

  if (isError || !tour || !tourId)
    return <NoResult title="No tours found" description="There could be an error or tour id is not valid" />;

  const defaultValue: EditTourSchemaType = {
    name: tour.name,
    description: tour.description,
    category: tour.category,
    highlights: tour.highlights.map((highlight) => ({value: highlight})),
    capacity: tour.capacity,
    itinerary: tour.itinerary,
    existingImages: tour.images.map((image) => ({
      url: image,
      isDeleted: false,
    })),
    price: {...tour.price},
    minAge: tour.minAge,
    freeCancellation: tour.freeCancellation ? "yes" : "no",
    languages: tour.languages,
    faq: tour.faq,
    included: tour.included,
    images: [],
    availableDates: tour.availableDates.map((dateStr) => {
      const date = new Date(dateStr);

      date.setUTCHours(0, 0, 0, 0);

      return date;
    }),
  };

  return (
    <>
      {render("Edit Tour", "Update a Tour")}
      <TourForm tour={defaultValue} tourId={tourId} />
    </>
  );
};

const AuthenticatedEditTour = withAuth(EditTour);

export default AuthenticatedEditTour;
