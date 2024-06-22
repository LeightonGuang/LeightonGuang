import "./imageGallerySlider.scss";
import { useState } from "react";

const ImageGallerySlider = ({ images }: { images: string[] }) => {
  const [imageIndex, setImageIndex] = useState(0);

  return (
    <div className="imageGallerySlider">
      <div className="imageGallerySlider__container">
        <img className="imageGallerySlider__img" src="" alt="" />
        <ul>
          {images.map((image, index) => (
            <li>
              <img src={image} alt={`image ${index}`} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ImageGallerySlider;
