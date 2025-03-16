import {
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
  WhatsappShareButton,
  TelegramShareButton,
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon,
  WhatsappIcon,
  TelegramIcon,
} from "react-share";
import Modal from "../Shared/Modal/Modal";
import Button from "../Shared/Button/Button";
import useModal from "../../hooks/useModal";
import useClipboard from "../../hooks/useClipboard";

type ShareProps = {
  title: string;
  description: string;
  url: string;
};

const Share = ({title, description, url}: ShareProps) => {
  const {showModal, openModal, onClose} = useModal();
  const {isCopied, isError, handleCopy} = useClipboard();

  return (
    <>
      <button className="d-flex items-center" onClick={openModal}>
        <i className="icon-share flex-center text-16 mr-10" />
        Share
      </button>
      <Modal show={showModal} onClose={onClose}>
        <Modal.Header>
          <Modal.Title>Share This Page</Modal.Title>
        </Modal.Header>
        <Modal.Content>
          <p className="fw-400 text-center" style={{width: "320px"}}>
            Share this with your friends:
          </p>
          <div className="d-flex justify-content-center gap-2">
            <FacebookShareButton url={url} title={title}>
              <FacebookIcon size={40} round />
            </FacebookShareButton>

            <TwitterShareButton url={url} title={title}>
              <TwitterIcon size={40} round />
            </TwitterShareButton>

            <LinkedinShareButton url={url} title={title} summary={description}>
              <LinkedinIcon size={40} round />
            </LinkedinShareButton>

            <WhatsappShareButton url={url} title={title} separator=" - ">
              <WhatsappIcon size={40} round />
            </WhatsappShareButton>

            <TelegramShareButton url={url} title={title}>
              <TelegramIcon size={40} round />
            </TelegramShareButton>
          </div>
          {isError && <p className="text-danger text-center mt-3">Could not copy, try again.</p>}
        </Modal.Content>
        <Modal.Footer className="d-flex justify-content-center gap-2">
          <Modal.Close className="my-2">Close</Modal.Close>
          <Button
            type="button"
            buttonType="primary"
            onClick={() => handleCopy(url)}
            className="py-0 my-2"
            showIcon={false}
          >
            {isCopied ? "Copied!" : "Copy Link"}
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Share;
