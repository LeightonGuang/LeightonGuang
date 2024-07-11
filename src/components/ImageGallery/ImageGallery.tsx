import "./imageGallery.scss";
import { useState } from "react";

import { ImageObj } from "../../types/ImageObj";
import ImageGalleryModal from "../ImageGalleryModal/ImageGalleryModal";

const ImageGallery = ({
  imageObjList,
  hightlightColour,
}: {
  imageObjList: ImageObj[];
  hightlightColour: string;
}) => {
  const isSingleImage: boolean = imageObjList.length === 1;
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
    <div className="imageGallery">
      <div className="imageGallery__container">
        <div className={isSingleImage ? `` : "imageGallery__display"}>
          {isSingleImage ? (
            ``
          ) : (
            <button
              className="imageGallery__display--btn"
              onClick={handleRightClick}
            >{`<`}</button>
          )}
          <img
            className="imageGallery__display--img"
            src={imageObjList[imageIndex].imageUrl}
            alt=""
          />
          {isSingleImage ? null : (
            <button
              className="imageGallery__display--btn"
              onClick={handleLeftClick}
            >{`>`}</button>
          )}
        </div>
        <div className="imageGallery__list-container">
          <ul className="imageGallery__list">
            {imageObjList.map((imageObj, index) => (
              <li
                className={`imageGallery__item ${
                  index === imageIndex ? `imageGallery__item--active` : ``
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
                  className="imageGallery__preview-img"
                  src={imageObj.imageUrl}
                  alt={imageObj.imageAlt}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>

      <ImageGalleryModal
        imgUrl={imageObjList[imageIndex].imageUrl}
        imgAlt={imageObjList[imageIndex].imageAlt}
      />
    </div>
  );
};

export default ImageGallery;
