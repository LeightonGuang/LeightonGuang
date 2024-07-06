import "./CompareList.scss";
import { ItemObj } from "../../types/ItemObj";
import { useState } from "react";

const CompareComponent = ({ itemObjList }: { itemObjList: ItemObj[] }) => {
  // original order of the list
  const orderedList: ItemObj[] = itemObjList;
  const [isAddItemModal, setIsAddItemModal] = useState(false);
  const [pinnedItemList, setPinnedItemList] = useState<ItemObj[]>([]);
  const [unpinnedItemList, setUnpinnedItemList] =
    useState<ItemObj[]>(itemObjList);

  const handlePinButton: (objIndex: number) => void = (objIndex: number) => {
    setPinnedItemList([...pinnedItemList, unpinnedItemList[objIndex]]);
    setUnpinnedItemList((prevList) =>
      prevList.filter((_item, i) => i !== objIndex)
    );
  };

  const handleUnpinButton: (objIndex: number) => void = (objIndex: number) => {
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

  const handleAddItemButton: () => void = () => {
    setIsAddItemModal(!isAddItemModal);
  };

  return (
    <div className="compareList">
      <ul className="compareList__list">
        {
          // don't show pinned list when it's empty
          pinnedItemList.length === 0
            ? ``
            : pinnedItemList.map((pinnedItemObj, index) => (
                <li className="compareList__item" key={index}>
                  <button
                    className="compareList__pin-button compareList__pin-button--pinned"
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
        {unpinnedItemList.map((itemObj, index) => (
          <li className="compareList__item" key={index}>
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
        <li
          className="compareList__item compareList__item--add"
          onClick={handleAddItemButton}
        >
          <div className="compareList__item--add-container">+</div>
        </li>
      </ul>

      {/* add item modal */}
      {isAddItemModal ? (
        <div className="compareList__add-popup">
          <div className="compareList__add-popup-container">
            <div className="compareList__add-popup-nav">
              <h1 className="compareList__add-popup-title">Add Item</h1>
              <button
                className="compareList__add-popup-btn-close"
                onClick={() => setIsAddItemModal(false)}
              >
                Close
              </button>
            </div>

            <div className="compareList__add-popup-body">
              <form action="">
                <label htmlFor="">
                  Brand:
                  <input type="text" name="brand" />
                </label>
              </form>
            </div>
          </div>
        </div>
      ) : (
        ``
      )}
    </div>
  );
};

export default CompareComponent;
