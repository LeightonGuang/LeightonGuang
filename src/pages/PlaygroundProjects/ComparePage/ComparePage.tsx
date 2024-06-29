import CompareComponent from "../../../components/CompareList/CompareList";
import "./ComparePage.scss";

interface itemObj {
  imageUrl: string;
  brand: string;
  name: string;
  year: number;
  price: number;
}

const itemObjList: itemObj[] = [
  {
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/f/fa/2016_Toyota_Prius_%28ZVW50L%29_Hybrid_liftback_%282016-04-02%29_01.jpg",
    brand: "Toyota",
    name: "Prius",
    year: 2024,
    price: 25000,
  },
  {
    imageUrl:
      "https://images.prismic.io/carwow/2b4b884f-fa2b-40e2-9182-2d2c9450ac5b_37018-ThenewVolkswagenGolfeHybrid.jpg?auto=format&cs=tinysrgb&fit=crop&q=60&w=750",
    brand: "Volkswagen",
    name: "Golf GTI",
    year: 2024,
    price: 32000,
  },
  {
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/c/cb/Honda_Civic_Type_R_%28FK%3B_France%29_front_view.jpg",
    brand: "Honda",
    name: "Civic Type R",
    year: 2024,
    price: 28000,
  },
  {
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/a/a8/Toyota_GR_Yaris_%28XP21%29_%E2%80%93_f_03052021.jpg",
    brand: "Toyota",
    name: "GR Yaris",
    year: 2024,
    price: 35000,
  },
  {
    imageUrl:
      "https://www.topgear.com/sites/default/files/cars-car/image/2015/01/buyers_guide_-_renault_clio_2014_-_front_quarter.jpg?w=1280&h=720",
    brand: "Renault",
    name: "Clio RS",
    year: 2024,
    price: 18000,
  },
  {
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/a/a7/Ford_Fiesta_ST-Line_%28VII%2C_Facelift%29_%E2%80%93_f_30012023.jpg",
    brand: "Ford",
    name: "Fiesta ST",
    year: 2024,
    price: 22000,
  },
  {
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Mazda_Roadster_%28MX-5%29_by_Negawa_Bridge_%28cropped%29.jpg/1200px-Mazda_Roadster_%28MX-5%29_by_Negawa_Bridge_%29.jpg",
    brand: "Mazda",
    name: "MX-5 Miata",
    year: 2024,
    price: 27000,
  },
  {
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/BMW_M3_Competition_%28G80%29_IMG_4041.jpg/1200px-BMW_M3_Competition_%29_IMG_4041.jpg",
    brand: "BMW",
    name: "M3 Competition",
    year: 2024,
    price: 75000,
  },
  {
    imageUrl:
      "https://www.autocar.co.uk/sites/autocar.co.uk/files/subaru-brz-02-side-panning_1.jpg",
    brand: "Subaru",
    name: "BRZ",
    year: 2024,
    price: 26000,
  },
];

const ComparePage = () => {
  return (
    <section className="comparePage">
      <div className="comparePage__container">
        <h1 className="comparePage__title">Compare Page</h1>
        <CompareComponent itemObjList={itemObjList} />
      </div>
    </section>
  );
};

export default ComparePage;
