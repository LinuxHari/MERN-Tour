import withAuth from "../../hocs/withAuth";
import {RenderProps} from "../../type";
import TourForm from "./TourForm";

const AddTour = ({render}: RenderProps) => {
  return (
    <>
      {render("Add Tour", "List a New Tour")}
      <TourForm />
    </>
  );
};

const AuthenticatedAddTour = withAuth(AddTour);

export default AuthenticatedAddTour;
