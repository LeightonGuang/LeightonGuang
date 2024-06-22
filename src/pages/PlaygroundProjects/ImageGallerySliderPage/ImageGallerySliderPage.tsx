import "./ImageGallerySliderPage.scss";
import ImageGallerySlider from "../../../components/ImageGallerySlider/ImageGallerySlider";

const ImageGallerySliderPage = () => {
  return (
    <section className="imageGallerySliderPage">
      <h1 className="imageGallerySliderPage__title">Image Gallery Slider</h1>
      <div className="imageGallerySliderPage__container">
        <ImageGallerySlider images={[]} />
      </div>
    </section>
  );
};

export default ImageGallerySliderPage;
