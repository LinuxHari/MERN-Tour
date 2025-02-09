import Button from "../../Shared/Button/Button";

type ImagePreviewProps = {
  url: string;
  onDelete: () => void;
};

const ImagePreview = ({url, onDelete}: ImagePreviewProps) => {
  return (
    <div className="relative p-0">
      <img
        src={url}
        alt=""
        className="rounded-8 px-0 border border-dashed border-secondary"
        style={{width: "230px", height: "200px", objectFit: "cover"}}
      />
      <Button
        buttonType="icon"
        className="px-2 py-3 -outline-accent-1 text-accent-1 absolute top-5 end-5"
        showIcon={false}
        onClick={onDelete}
        style={{width: "fit-content"}}
      >
        <i className="icon-delete text-20" />
      </Button>
    </div>
  );
};

export default ImagePreview;
