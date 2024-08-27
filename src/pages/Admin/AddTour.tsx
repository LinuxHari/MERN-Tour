import { RenderProps } from "../../type";
import TourForm from "./TourForm";

const AddTour = ({ render }: RenderProps) => {
  
  return (
    <>
      {render("Add Tour", "List a New Tour")}
      <TourForm/>
    </>
  );
};

export default AddTour;
