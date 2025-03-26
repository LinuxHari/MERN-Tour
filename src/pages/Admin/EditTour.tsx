import {useParams} from "react-router-dom";
import withAuth from "../../hocs/withAuth";
import {RenderProps} from "../../type";
import TourForm from "../../components/Admin/EditTour/EditTourForm";
import useAdminTourHandler from "../../hooks/Admin/useAdminTourHandler";
import CommonSkeleton from "../../components/Skeletons/CommonSkeleton";
import {EditTourSchemaType} from "../../schema/tourSchema";

const EditTour = ({render}: RenderProps) => {
  const {publishedTours, isTourLoading, isTourError} = useAdminTourHandler();
  const {tourId} = useParams();

  if (isTourLoading) return <CommonSkeleton />;

  if (isTourError || !publishedTours) return null;

  const tour = publishedTours.tours.find((publishedTour) => publishedTour.tourId === tourId);

  if (!tour || !tourId) return null;

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
