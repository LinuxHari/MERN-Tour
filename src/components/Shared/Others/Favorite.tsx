import {MouseEvent} from "react";
import useUserFavoriteHandler from "../../../hooks/useUserFavoriteHandler";

type FavoriteProps = {
  isFavorite: boolean;
  tourId: string;
  onClick?: () => void;
};

const Favorite = ({isFavorite, tourId, onClick}: FavoriteProps) => {
  const {removeTourFromFavorite, addTourToFavorites} = useUserFavoriteHandler();

  const handleFavorite = async (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();
    if (isFavorite) await removeTourFromFavorite(tourId);
    else await addTourToFavorites(tourId);
    onClick && onClick();
  };

  return (
    <div className="tourCard__favorite">
      <button
        className={`button size-35 bg-white rounded-full flex-center ${isFavorite ? "bg-accent-1 text-white" : "-accent-1"}`}
        onClick={handleFavorite}
      >
        <i className={`icon-heart ${isFavorite ? "text-white" : ""}`} />
      </button>
    </div>
  );
};

export default Favorite;
