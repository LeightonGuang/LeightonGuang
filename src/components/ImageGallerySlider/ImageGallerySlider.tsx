import "./imageGallerySlider.scss";
import { useState } from "react";

import { ImageObj } from "../../types/ImageObj";

const ImageGallerySlider = ({
  imageObjList,
  hightlightColour,
}: {
  imageObjList: ImageObj[];
  hightlightColour: string;
}) => {
  const [imageIndex, setImageIndex] = useState(0);

  const handleRightClick = () => {
    if (imageIndex === 0) {
      setImageIndex(imageObjList.length - 1);
    } else if (imageIndex !== 0) {
      setImageIndex(imageIndex - 1);
    }
  };

  const handleLeftClick = () => {
    if (imageIndex === imageObjList.length - 1) {
      setImageIndex(0);
    } else if (imageIndex !== imageObjList.length - 1) {
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
            src={imageObjList[imageIndex].imageUrl}
            alt=""
          />
          <button
            className="imageGallerySlider__display--btn"
            onClick={handleLeftClick}
          >{`>`}</button>
        </div>
        <div className="imageGallerySlider__list-container">
          <ul className="imageGallerySlider__list">
            {imageObjList.map((imageObj, index) => (
              <li
                className={`imageGallerySlider__item ${
                  index === imageIndex ? `imageGallerySlider__item--active` : ``
                }`}
                key={index}
                onClick={() => setImageIndex(index)}
                style={
                  index === imageIndex && hightlightColour !== ""
                    ? { backgroundColor: hightlightColour }
                    : {}
                }
              >
                <img
                  className="imageGallerySlider__preview-img"
                  src={imageObj.imageUrl}
                  alt={imageObj.imageAlt}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ImageGallerySlider;
