import "./CompareList.scss";
import { ItemObj } from "../../types/ItemObj";
import { useState } from "react";

const CompareComponent = ({ itemObjList }: { itemObjList: ItemObj[] }) => {
  const [pinnedItemList, setPinnedItemList] = useState<ItemObj[]>([]);
  const [unpinnedItemList, setUnpinnedItemList] =
    useState<ItemObj[]>(itemObjList);

  return (
    <div className="compareList">
      <ul className="compareList__container">
        {
          // don't show pinned list when it's empty
          pinnedItemList.length !== 0
            ? pinnedItemList.map((pinnedItemObj, index) => (
                <li className="compareList__item" key={index}>
                  <ul className="compareList__item-list">
                    <img
                      className="compareList__img"
                      src={pinnedItemObj.imageUrl}
                    />
                    <li className="compareList__brand">
                      {pinnedItemObj.brand}
                    </li>
                    <li className="compareList__name">{pinnedItemObj.name}</li>
                    <li className="compareList__year">{pinnedItemObj.year}</li>
                    <li className="compareList__price">
                      ${pinnedItemObj.price}
                    </li>
                    <li className="compareList__description">desciption</li>
                  </ul>
                </li>
              ))
            : ``
        }
        {unpinnedItemList.map((itemObj, index) => (
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
