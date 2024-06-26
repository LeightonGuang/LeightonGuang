import "./imageGallerySlider.scss";
import { useState } from "react";

const ImageGallerySlider = ({ images }: { images: string[] }) => {
  const [imageIndex, setImageIndex] = useState(0);

  const handleRightClick = () => {
    if (imageIndex !== 0) {
      setImageIndex(imageIndex - 1);
    }
  };

  const handleLeftClick = () => {
    if (imageIndex !== images.length - 1) {
      setImageIndex(imageIndex + 1);
    }
  };

  return (
    <div className="imageGallerySlider">
      <div className="imageGallerySlider__container">
        <div className="imageGallerySlider__display">
          <button
            className="imageGallerySlider__display--btn"
            onClick={handleRightClick}
          >{`<`}</button>
          <img
            className="imageGallerySlider__display--img"
            src={images[imageIndex]}
            alt=""
          />
          <button
            className="imageGallerySlider__display--btn"
            onClick={handleLeftClick}
          >{`>`}</button>
        </div>
        <ul className="imageGallerySlider__list">
          {images.map((image, index) => (
            <li
              className={`imageGallerySlider__item ${
                index === imageIndex ? "imageGallerySlider__item--active" : ""
              }`}
              key={index}
            >
              <img
                className="imageGallerySlider__img"
                src={image}
                alt={`image ${index}`}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ImageGallerySlider;
