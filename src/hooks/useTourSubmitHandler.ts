import { UseFormReset } from "react-hook-form";
import { useCreateTourMutation } from "../redux/api/AdminApi";
import { TourSchemaType } from "../schema/tourSchema";
import { ImgPath } from "../type";
import { extractFirebaseImgPath } from "../utils/extractFirebaseImgPath";
import useFirebaseUpload from "./useFirebaseUpload";

const useTourSubmitHandler = (reset: UseFormReset<TourSchemaType>) => {
  const { uploadImages, deleteImages } = useFirebaseUpload();
  const [createTour, { isLoading, isError }] = useCreateTourMutation();

  const tourSubmitHandler = async (formData: TourSchemaType) => {
    console.log(formData, "formData");
    
    const imageUrls = await uploadImages(formData.images, formData.name);

    await createTour({ ...formData, images: imageUrls });
    console.log(isError, "err occured while uploading");
    
    if (isError) {
      const imagesToDelete = extractFirebaseImgPath(imageUrls, ImgPath.tours);

      await deleteImages(imagesToDelete);
      return
    }

    // reset()

    console.log(imageUrls, "uploaded image urls");
  }

  return { tourSubmitHandler, isLoading };
};

export default useTourSubmitHandler;