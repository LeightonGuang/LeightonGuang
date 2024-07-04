import "./CompareList.scss";
import { ItemObj } from "../../types/ItemObj";
import { useState } from "react";

const CompareComponent = ({ itemObjList }: { itemObjList: ItemObj[] }) => {
  // original order of the list
  const orderedList: ItemObj[] = itemObjList;
  const [pinnedItemList, setPinnedItemList] = useState<ItemObj[]>([]);
  const [unpinnedItemList, setUnpinnedItemList] =
    useState<ItemObj[]>(itemObjList);

  const handlePinButton = (objIndex: number) => {
    setPinnedItemList([...pinnedItemList, unpinnedItemList[objIndex]]);
    setUnpinnedItemList((prevList) =>
      prevList.filter((_item, i) => i !== objIndex)
    );
  };

  const handleUnpinButton = (objIndex: number) => {
    if (!orderedList.includes(pinnedItemList[objIndex])) {
      console.log(
        `${pinnedItemList[objIndex].name} is not in the original list`
      );
      return;
    }

    if (unpinnedItemList.includes(pinnedItemList[objIndex])) {
      console.log(
        `${pinnedItemList[objIndex].name} is already in the unpinned list`
      );
      return;
    }

    for (let i: number = 0; i < orderedList.length; i++) {
      const originalEl: ItemObj = orderedList[i];

      if (pinnedItemList[objIndex] === originalEl) {
        unpinnedItemList.splice(i, 0, pinnedItemList[objIndex]);
        break;
      }
    }

    setPinnedItemList(pinnedItemList.filter((_item, i) => i !== objIndex));
  };

  return (
    <div className="compareList">
      <ul className="compareList__list">
        {
          // don't show pinned list when it's empty
          pinnedItemList.length === 0
            ? ``
            : pinnedItemList.map((pinnedItemObj, index) => (
                <li
                  className={
                    pinnedItemList.length === 0
                      ? `compareList__item`
                      : `compareList__item compareList__item--pinned`
                  }
                  key={index}
                >
                  <button
                    className="compareList__pin-button"
                    onClick={() => {
                      handleUnpinButton(index);
                    }}
                  >
                    unpin
                  </button>
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
        }
        <div
          className={
            pinnedItemList.length === 0
              ? `compareList__divider--hidden`
              : `compareList__divider`
          }
        >
          <div className="compareList__divider-text">Pinned</div>
        </div>
        {unpinnedItemList.map((itemObj, index) => (
          <li
            className={
              pinnedItemList.length === 0
                ? `compareList__item`
                : `compareList__item compareList__item--pinned`
            }
            key={index}
          >
            <button
              className="compareList__pin-button"
              onClick={() => {
                handlePinButton(index);
              }}
            >
              pin
            </button>
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
