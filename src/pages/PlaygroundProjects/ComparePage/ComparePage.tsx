import CompareComponent from "../../../components/CompareList/CompareList";
import "./ComparePage.scss";

interface itemObj {
  imageUrl: string;
  name: string;
  brand: string;
  price: number;
}

const itemObjList: itemObj[] = [
  {
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/f/fa/2016_Toyota_Prius_%28ZVW50L%29_Hybrid_liftback_%282016-04-02%29_01.jpg",
    name: "Prius",
    brand: "Toyota",
    price: 10000,
  },
  {
    imageUrl:
      "https://images.prismic.io/carwow/2b4b884f-fa2b-40e2-9182-2d2c9450ac5b_37018-ThenewVolkswagenGolfeHybrid.jpg?auto=format&cs=tinysrgb&fit=crop&q=60&w=750",
    name: "Golf",
    brand: "Volkswagen",
    price: 20000,
  },
  {
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/c/cb/Honda_Civic_Type_R_%28FK%3B_France%29_front_view.jpg",
    name: "Civic",
    brand: "Honda",
    price: 30000,
  },
  {
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/a/a8/Toyota_GR_Yaris_%28XP21%29_%E2%80%93_f_03052021.jpg",
    name: "GR Yaris",
    brand: "Toyota",
    price: 20000,
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
