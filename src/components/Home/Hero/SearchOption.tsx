import {SearchOptionType} from "../../../type";
import Image from "../../Shared/Image/Image";

const SearchOption = (props: SearchOptionType) => {
  if (props.type === "destination") {
    return (
      <>
        <span className="js-select-control-choice">{props.destination}</span>
        <span>{props.destinationType}</span>
      </>
    );
  }

  const {image, name, destination, minAge} = props;

  return (
    <div className="d-flex justify-content-start gap-3 align-items-center w-100">
      <div style={{height: "50px", width: "50px"}} className="mx-0 mt-2">
        <Image src={image} style={{height: "40px", width: "40px", borderRadius: "30px"}} />
      </div>
      <div className="d-flex flex-column w-100">
        <span className="text-15 line-clamp-2 text-start fw-500">{name}</span>
        <div className="d-flex justify-content-between text-13 text-start">
          <span
            className="js-select-control-choice text-light-2"
            style={{maxWidth: "20ch", textOverflow: "ellipsis", overflow: "hidden"}}
          >
            {destination}
          </span>
          {minAge > 0 && <span className="js-select-control-choice text-success">Min. age {minAge}</span>}
        </div>
      </div>
    </div>
  );
};

export default SearchOption;
