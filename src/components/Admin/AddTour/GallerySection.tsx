import { ChangeEvent, useRef } from "react";
import { useFieldArray, useFormContext } from "react-hook-form";
import ImagePreview from "./ImagePreview";
import Input from "../../Shared/Input/Input";
import { TourSchemaType } from "../../../schema/tourSchema";

const GallerySection = () => {
  const { watch } = useFormContext();
  const { fields, append, remove } = useFieldArray({ name: "images", rules: { minLength: 2 } });
  const files = watch("images") as TourSchemaType["images"];
  const fileRef = useRef<HTMLInputElement>(null);

  const handleAddImages = (event: ChangeEvent<HTMLInputElement>) => {
    const uploadedFiles = Array.from(event.target.files || { length: 0 });
    const files = uploadedFiles.map((file) => ({
      file,
    }));
    append(files);
    if (fileRef.current) fileRef.current.value = "";
  };

  return (
    <>
    <h4 className="text-18 fw-500 mb-20">Images</h4>
      <div className="d-flex gap-4">
        <div className="d-flex gap-4">
          {files.map(({ file }, index) => (
            <ImagePreview key={fields[index].id} url={URL.createObjectURL(file)} onDelete={() => remove(index)} />
          ))}
        </div>
        <Input type="file" ref={fileRef} name="images" id="images" label="upload" multiple onChange={handleAddImages} />
      </div>
    </>
  );
};

export default GallerySection;
