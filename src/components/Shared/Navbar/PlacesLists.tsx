import React from "react";
import PlacesList from "./PlacesList";

type PlacesLocationsProps = {
  data:
    | {
        "Top Cities": string[];
        "Top Countries": string[];
        "Top Locations": string[];
        "Highly Rated"?: never;
        "On Demand"?: never;
      }
    | {
        "Top Cities"?: never;
        "Top Countries"?: never;
        "Top Locations"?: never;
        "Highly Rated": string[];
        "On Demand": string[];
      };
};

const PlacesLocations = ({ data }: PlacesLocationsProps) => {
  return (
    <div className="tabsMenu__lists">
      {Object.entries(data).map(([title, placeData], index) => (
        <PlacesList key={index} data={placeData} title={title} />
      ))}
    </div>
  );
};

const MemoizedPlaceLocations = React.memo(PlacesLocations)

export default MemoizedPlaceLocations