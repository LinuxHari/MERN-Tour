import {useState} from "react";
import toast from "react-hot-toast";
import {
  useAddTourToFavoriteMutation,
  useGetFavoriteToursQuery,
  useRemoveTourFromFavoriteMutation,
} from "../redux/api/userApi";

const useUserFavoriteHandler = () => {
  const [page, setPage] = useState(1);
  const [addToFavorite, {isLoading: isAddingToFavorite}] = useAddTourToFavoriteMutation();
  const [removeFromFavorite, {isLoading: isRemovingFromFavorite}] =
    useRemoveTourFromFavoriteMutation();
  const {data: favoriteTours, isLoading: isFetchingFavoriteTours} = useGetFavoriteToursQuery(page);

  const addTourToFavorites = async (tourId: string) => {
    const toastId = toast.loading("Adding tour to favorites");
    const {error} = await addToFavorite(tourId);

    if (error) return toast.error("Failed to add tour to favorites", {id: toastId});

    return toast.success("Tour was added to favorites successfully", {id: toastId});
  };

  const removeTourFromFavorite = async (tourId: string) => {
    const toastId = toast.loading("Removing tour from favorites");
    const {error} = await removeFromFavorite(tourId);

    if (error) return toast.error("Failed to remove tour from favorites", {id: toastId});

    return toast.success("Tour was removed from favorites successfully", {id: toastId});
  };

  return {
    addTourToFavorites,
    isMutationLoading: isAddingToFavorite || isRemovingFromFavorite,
    removeTourFromFavorite,
    isFetchingFavoriteTours,
    favoriteTours,
    page,
    setPage,
  };
};

export default useUserFavoriteHandler;
