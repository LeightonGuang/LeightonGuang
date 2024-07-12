import "./ImageGalleryModal.scss";

const ImageGalleryModal = ({
  isImgModal,
  setImgModal,
  imgUrl,
  imgAlt,
}: {
  isImgModal: boolean;
  setImgModal: React.Dispatch<React.SetStateAction<boolean>>;
  imgUrl: string;
  imgAlt: string;
}) => {
  return (
    <>
      {isImgModal ? (
        <div className="imageGalleryModal">
          <div className="imageGalleryModal__card">
            <div className="imageGalleryModal__header">
              <h2 className="imageGalleryModal__title">{imgAlt}</h2>
              <button
                className="imageGalleryModal__close-btn"
                onClick={() => setImgModal(false)}
              >
                X
              </button>
            </div>

            <img className="imageGalleryModal__img" src={imgUrl} alt={imgAlt} />
          </div>
        </div>
      ) : (
        ``
      )}
    </>
  );
};

export default ImageGalleryModal;
