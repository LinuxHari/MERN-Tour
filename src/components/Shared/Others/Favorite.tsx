import {MouseEvent} from "react";
import useUserFavoriteHandler from "../../../hooks/Users/useUserFavoriteHandler";

type FavoriteProps = {
  isFavorite: boolean;
  tourId: string;
  onClick?: () => void;
};

const Favorite = ({isFavorite, tourId, onClick}: FavoriteProps) => {
  const {removeTourFromFavorite, addTourToFavorites, isMutationLoading} = useUserFavoriteHandler();

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
        className={`button size-35 rounded-full flex-center ${isFavorite ? "bg-accent-1 text-white" : "bg-white -accent-1"}`}
        onClick={handleFavorite}
        disabled={isMutationLoading}
      >
        <i className={`icon-heart ${isFavorite ? "text-white" : ""}`} />
      </button>
    </div>
  );
};

export default Favorite;
