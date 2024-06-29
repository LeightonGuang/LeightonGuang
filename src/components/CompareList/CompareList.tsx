import "./CompareList.scss";
interface itemObj {
  imageUrl: string;
  name: string;
  brand: string;
  price: number;
}

const CompareComponent = ({ itemObjList }: { itemObjList: itemObj[] }) => {
  return (
    <div className="compareList">
      <ul className="compareList__container">
        {itemObjList.map((itemObj, index) => (
          <li className="compareList__item" key={index}>
            <ul className="compareList__item-list">
              <img className="compareList__img" src={itemObj.imageUrl} />
              <li className="compareList__name">{itemObj.name}</li>
              <li className="compareList__brand">{itemObj.brand}</li>
              <li className="compareList__price">${itemObj.price}</li>
              <li className="compareList__description">desciption</li>
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CompareComponent;
