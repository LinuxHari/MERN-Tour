import {ChangeEvent, useRef} from "react";
import {useFieldArray, useFormContext} from "react-hook-form";
import Input from "../../Shared/Input/Input";
import {MAX_UPLOAD_IMAGES} from "../../../config/adminConfig";
import {EditTourSchemaType, TourSchemaType} from "../../../schema/tourSchema";
import ImagePreview from "./ImagePreview";

type GallerySectionProps = {
  isEditForm?: boolean;
};

const GallerySection = ({isEditForm = false}: GallerySectionProps) => {
  const {watch, setValue} = useFormContext();
  const existingImages = watch("existingImages") as EditTourSchemaType["existingImages"];
  const {fields, append, remove} = useFieldArray({
    name: "images",
    rules: {minLength: 2},
  });
  const files = watch("images") as TourSchemaType["images"];
  const fileRef = useRef<HTMLInputElement>(null);
  const showAddImage = (existingImages || []).length + files.length <= MAX_UPLOAD_IMAGES;

  const handleAddImages = (event: ChangeEvent<HTMLInputElement>) => {
    const uploadedFiles = Array.from(event.target.files || {length: 0});
    const files = uploadedFiles.map((file) => ({
      file,
    }));

    append(files);
    if (fileRef.current) fileRef.current.value = "";
  };

  const onExistingImageDeletion = (url: string) => {
    const images = existingImages.map((image) => {
      if (image.url === url) return {url, isDeleted: true};
      else return image;
    });

    setValue("existingImages", images);
  };

  return (
    <>
      <h4 className="text-18 fw-500 mb-20">Images</h4>
      <div className="d-flex gap-4">
        <div className="d-flex gap-4">
          {isEditForm &&
            existingImages.map(
              ({url, isDeleted}) =>
                !isDeleted && <ImagePreview key={url} url={url} onDelete={() => onExistingImageDeletion(url)} />,
            )}
          {files.map(({file}, index) => (
            <ImagePreview key={fields[index].id} url={URL.createObjectURL(file)} onDelete={() => remove(index)} />
          ))}
        </div>
        {showAddImage && (
          <Input
            type="file"
            ref={fileRef}
            name="images"
            id="images"
            label="upload"
            multiple
            onChange={handleAddImages}
          />
        )}
      </div>
    </>
  );
};

export default GallerySection;
