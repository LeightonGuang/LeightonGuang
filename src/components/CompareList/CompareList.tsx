import "./CompareList.scss";
import { ItemObj } from "../../types/ItemObj";

const CompareComponent = ({ itemObjList }: { itemObjList: ItemObj[] }) => {
  return (
    <div className="compareList">
      <ul className="compareList__container">
        {itemObjList.map((itemObj, index) => (
          <li className="compareList__item" key={index}>
            <ul className="compareList__item-list">
              <img className="compareList__img" src={itemObj.imageUrl} />
              <li className="compareList__brand">{itemObj.brand}</li>
              <li className="compareList__name">{itemObj.name}</li>
              <li className="compareList__year">{itemObj.year}</li>
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
