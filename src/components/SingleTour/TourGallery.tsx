import Modal from "../Shared/Modal/Modal";
import TourImages from "./TourImages";

type Props = {
  images: string[];
};

const TourGallery = ({ images }: Props) => {
  return (
    <div className="tourSingleGrid -type-1 mt-30">
      <div className="tourSingleGrid__grid mobile-css-slider-2">
        {images.map((image) => (
          <img key={image} src="https://media.istockphoto.com/id/1414814850/photo/summer-blue-sky-cloud-gradient-light-white-background-beauty-clear-cloudy-in-sunshine-calm.jpg?s=612x612&w=0&k=20&c=AB8i_X54iwA5B8u3EmkmduL37-W35mYuUmHmOeCSiGw=" alt="image" />
        ))}
      </div>
      <div className="tourSingleGrid__button">
          <Modal>
            <Modal.Trigger className="-accent-1 py-10 px-20 rounded-200 bg-dark-1 lh-16 text-white">
              See all photos
            </Modal.Trigger>
            <Modal.Header>
              <Modal.Title className="text-30">
                Tour Gallery
              </Modal.Title>
            </Modal.Header>
            <Modal.Content>
              <TourImages images={images}/>
            </Modal.Content>
            <Modal.Footer>
              <div className="d-flex justify-content-end">
              <Modal.Close>
                Close
              </Modal.Close>
              </div>
            </Modal.Footer>
          </Modal>
      </div>
    </div>
  );
};

export default TourGallery;
