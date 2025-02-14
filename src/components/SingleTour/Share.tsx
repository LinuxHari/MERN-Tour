import useShare from "../../hooks/useShare";
import Modal from "../Shared/Modal/Modal";

type ShareProps = {
  title: string;
  description: string;
  url: string;
};

const Share = ({title, description, url}: ShareProps) => {
  const {handleShare, isError, isSharingSupported, reset} = useShare({
    title,
    description,
    url,
  });

  return (
    <>
      <button className="d-flex items-center" onClick={handleShare}>
        <i className="icon-share flex-center text-16 mr-10" />
        Share
      </button>
      <Modal show={isError || !isSharingSupported} onClose={reset}>
        <Modal.Header>
          <Modal.Title>Sharing</Modal.Title>
        </Modal.Header>
        <Modal.Content>
          <p className="fw-400 text-center">
            {isError
              ? "Something went wrong."
              : "Sharing is not supported in this browser."}
          </p>
        </Modal.Content>
        <Modal.Footer className="d-flex justify-content-end">
          <Modal.Close className="my-2">Close</Modal.Close>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Share;
