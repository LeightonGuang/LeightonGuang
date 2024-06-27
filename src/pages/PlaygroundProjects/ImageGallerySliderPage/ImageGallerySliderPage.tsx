import "./ImageGallerySliderPage.scss";
import ImageGallerySlider from "../../../components/ImageGallerySlider/ImageGallerySlider";

const ImageGallerySliderPage = () => {
  return (
    <section className="imageGallerySliderPage">
      <div className="imageGallerySliderPage__container">
        <h1 className="imageGallerySliderPage__title">Image Gallery Slider</h1>

        <ImageGallerySlider
          imageObjList={[
            {
              image:
                "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Stema_e_Fanell%C3%ABs_s%C3%AB_Komb%C3%ABtares.svg/800px-Stema_e_Fanell%C3%ABs_s%C3%AB_Komb%C3%ABtares.svg.png",
              imageAlt: "Albania national football team crest",
            },
            {
              image:
                "https://upload.wikimedia.org/wikipedia/en/thumb/b/b7/Austria_national_football_team_crest.svg/800px-Austria_national_football_team_crest.svg.png",
              imageAlt: "Austria national football team crest",
            },
            {
              image:
                "https://upload.wikimedia.org/wikipedia/en/thumb/f/f9/Royal_Belgian_FA_logo_2019.svg/800px-Royal_Belgian_FA_logo_2019.svg.png",
              imageAlt: "Belgium national football team crest",
            },
            {
              image:
                "https://upload.wikimedia.org/wikipedia/en/thumb/3/39/Croatia_national_football_team_crest.svg/800px-Croatia_national_football_team_crest.svg.png",
              imageAlt: "Croatia national football team crest",
            },
            {
              image:
                "https://upload.wikimedia.org/wikipedia/en/thumb/7/76/Czech_Republic_national_football_team_logo.svg/800px-Czech_Republic_national_football_team_logo.svg.png",
              imageAlt: "Czech Republic national football team crest",
            },
            {
              image:
                "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Dansk_boldspil_union_logo.svg/1024px-Dansk_boldspil_union_logo.svg.png",
              imageAlt: "Denmark national football team crest",
            },
            {
              image:
                "https://upload.wikimedia.org/wikipedia/en/thumb/8/8b/England_national_football_team_crest.svg/800px-England_national_football_team_crest.svg.png",
              imageAlt: "England national football team crest",
            },
            {
              image:
                "https://upload.wikimedia.org/wikipedia/en/thumb/1/12/France_national_football_team_seal.svg/800px-France_national_football_team_seal.svg.png",
              imageAlt: "France national football team crest",
            },
          ]}
          hightlightColour=""
        />
      </div>
    </section>
  );
};

export default ImageGallerySliderPage;
