import { ChangeEvent, memo, useRef } from "react";
import { RenderProps } from "../../../type";
import { useFieldArray, useFormContext } from "react-hook-form";
import ImagePreview from "./ImagePreview";
import Input from "../../Shared/Input/Input";
import { TourSchemaType } from "../../../schema/tourSchema";

const GallerySection = ({ render }: RenderProps) => {
  const { watch } = useFormContext();
  const { fields, append, remove } = useFieldArray({ name: "images", rules: { minLength: 2 } });
  const files = watch("images") as TourSchemaType["images"];
  const fileRef = useRef<HTMLInputElement>(null);

  const handleAddDocuments = (event: ChangeEvent<HTMLInputElement>) => {
    const uploadedFiles = Array.from(event.target.files || { length: 0 });
    const files = uploadedFiles.map((file) => ({
      file,
    }));
    append(files);
    if (fileRef.current) fileRef.current.value = "";
  };

  return (
    <>
      {render("Gallery")}
      <div className="d-flex gap-4">
        <div className="d-flex gap-4">
          {files.map(({ file }, index) => (
            <ImagePreview key={fields[index].id} url={URL.createObjectURL(file)} onDelete={() => remove(index)} />
            // <img key={id} src={URL.createObjectURL(file)} alt="" style={{width: "100px", height: "100px"}} />
          ))}
        </div>
        <Input type="file" ref={fileRef} name="file" id="file" label="upload" multiple onChange={handleAddDocuments} />
      </div>
      {/* <div className="text-14 mt-20">PNG or JPG no bigger than 800px wide and tall.</div> */}
    </>
  );
};

export default memo(GallerySection);
