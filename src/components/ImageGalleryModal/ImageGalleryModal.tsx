const ImageGalleryModal = ({
  imgUrl,
  imgAlt,
}: {
  imgUrl: string;
  imgAlt: string;
}) => {
  return (
    <div className="imageGalleryModal">
      <div className="imageGalleryModal__card">
        <img className="imageGalleryModal__img" src={imgUrl} alt={imgAlt} />
      </div>
    </div>
  );
};

export default ImageGalleryModal;
