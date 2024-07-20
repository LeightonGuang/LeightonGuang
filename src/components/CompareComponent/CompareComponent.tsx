import "./CompareComponent.scss";
import { ItemObj } from "../../types/ItemObj";
import { useState } from "react";
import AddCompareItemModal from "../AddCompareItemModal/AddCompareItemModal";
import EditCompareItemModal from "../EditCompareItemModal/EditCompareItemModal";

const CompareComponent = ({
  listName,
  itemObjList,
}: {
  listName: string;
  itemObjList: ItemObj[];
}) => {
  // original order of the list
  const [itemObj, setItemObj] = useState<ItemObj>({
    imageUrl: "",
    brand: "",
    name: "",
    year: 0,
    price: "",
    description: "",
  });
  const [orderedList, setOrderedList] = useState<ItemObj[]>(itemObjList);
  const [pinnedItemList, setPinnedItemList] = useState<ItemObj[]>([]);
  const [unpinnedItemList, setUnpinnedItemList] =
    useState<ItemObj[]>(itemObjList);
  const [isAddItemModal, setIsAddItemModal] = useState(false);
  const [isEditModal, setIsEditModal] = useState(false);
  const [isListView, setIsListView] = useState(false);

  const handleCheckboxChange = () => {
    setIsListView(!isListView);
  };

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

  const handleEditButton: (objIndex: number, isUnpinned: boolean) => void = (
    objIndex: number,
    isUnpinned: boolean
  ) => {
    setIsEditModal(true);

    if (isUnpinned) {
      setItemObj(unpinnedItemList[objIndex]);
    } else if (!isUnpinned) {
      setItemObj(pinnedItemList[objIndex]);
    }
  };

  const handleAddItemButton: () => void = () => {
    setIsAddItemModal(true);
  };

  return (
    <div className="compareComponent">
      <div className="compareComponent__header">
        <h1 className="compareComponent__title">{listName}</h1>

        <div className="compareComponent__btn-container">
          <input
            className="compareComponent__checkbox"
            type="checkbox"
            checked={isListView}
            onChange={handleCheckboxChange}
          />
        </div>
      </div>

      <ul
        className={`compareComponent__list ${
          isListView
            ? `compareComponent__list--list-view`
            : `compareComponent__list--grid-view`
        }`}
      >
        {
          // hide pinned list when it's empty
          pinnedItemList.length === 0
            ? ``
            : pinnedItemList.map((pinnedItemObj, index) => (
                <li
                  className={`compareComponent__item 
                ${index % 2 !== 0 ? `compareComponent__item--alt-colour` : ``}
                    ${
                      isListView
                        ? `compareComponent__item--list-view`
                        : `compareComponent__item--grid-view`
                    }`}
                  key={index}
                >
                  <button
                    className={`compareComponent__pin-button compareComponent__pin-button--pinned ${
                      isListView
                        ? `compareComponent__pin-button--list-view`
                        : `compareComponent__pin-button--grid-view`
                    }`}
                    onClick={() => {
                      handleUnpinButton(index);
                    }}
                  >
                    unpin
                  </button>
                  <ul
                    className={`compareComponent__item-list ${
                      isListView
                        ? `compareComponent__item-list--list-view`
                        : `compareComponent__item-list--grid-view`
                    }`}
                  >
                    <img
                      className={`compareComponent__img ${
                        isListView
                          ? `compareComponent__img--list-view`
                          : `compareComponent__img--grid-view`
                      }`}
                      src={pinnedItemObj.imageUrl}
                      alt={pinnedItemObj.brand + " " + pinnedItemObj.name}
                    />
                    <li
                      className={
                        isListView
                          ? `compareComponent__list-view-category compareComponent__list-view-category--brand`
                          : `compareComponent__grid-view-category compareComponent__grid-view-category--brand`
                      }
                    >
                      {pinnedItemObj.brand}
                    </li>
                    <li
                      className={
                        isListView
                          ? `compareComponent__list-view-category compareComponent__list-view-category--name`
                          : `compareComponent__grid-view-category compareComponent__grid-view-category--name`
                      }
                    >
                      {pinnedItemObj.name}
                    </li>
                    <li
                      className={
                        isListView
                          ? `compareComponent__list-view-category compareComponent__list-view-category--year`
                          : `compareComponent__grid-view-category compareComponent__grid-view-category--year`
                      }
                    >
                      {pinnedItemObj.year}
                    </li>
                    <li
                      className={
                        isListView
                          ? `compareComponent__list-view-category compareComponent__list-view-category--price`
                          : `compareComponent__grid-view-category compareComponent__grid-view-category--price`
                      }
                    >
                      {pinnedItemObj.price}
                    </li>
                    <li
                      className={
                        isListView
                          ? `compareComponent__list-view-category compareComponent__list-view-category--description`
                          : `compareComponent__grid-view-category compareComponent__grid-view-category--description`
                      }
                    >
                      {pinnedItemObj.description}
                    </li>
                  </ul>
                  <button
                    className={`compareComponent__edit-button ${
                      isListView
                        ? `compareComponent__edit-button--list-view`
                        : `compareComponent__edit-button--grid-view`
                    }`}
                    onClick={() => {
                      handleEditButton(index, false);
                    }}
                  >
                    Edit
                  </button>
                </li>
              ))
        }
        {unpinnedItemList.length === 0
          ? ``
          : unpinnedItemList.map((itemObj, index) => (
              <li
                className={`compareComponent__item 
                ${index % 2 !== 0 ? `compareComponent__item--alt-colour` : ``}
                  ${
                    isListView
                      ? `compareComponent__item--list-view`
                      : `compareComponent__item--grid-view`
                  }`}
                key={index}
              >
                <button
                  className={`compareComponent__pin-button ${
                    isListView
                      ? `compareComponent__pin-button--list-view`
                      : `compareComponent__pin-button--grid-view`
                  }`}
                  onClick={() => {
                    handlePinButton(index);
                  }}
                >
                  pin
                </button>
                <ul
                  className={`compareComponent__item-list ${
                    isListView
                      ? `compareComponent__item-list--list-view`
                      : `compareComponent__item-list--grid-view`
                  }`}
                >
                  <img
                    className={`compareComponent__img ${
                      isListView
                        ? `compareComponent__img--list-view`
                        : `compareComponent__img--grid-view`
                    }`}
                    src={itemObj.imageUrl}
                    alt={itemObj.brand + " " + itemObj.name}
                  />
                  <li
                    className={
                      isListView
                        ? `compareComponent__list-view-category compareComponent__list-view-category--brand`
                        : `compareComponent__grid-view-category compareComponent__grid-view-category--brand`
                    }
                  >
                    {itemObj.brand}
                  </li>
                  <li
                    className={
                      isListView
                        ? `compareComponent__list-view-category compareComponent__list-view-category--name`
                        : `compareComponent__grid-view-category compareComponent__grid-view-category--name`
                    }
                  >
                    {itemObj.name}
                  </li>
                  <li
                    className={
                      isListView
                        ? `compareComponent__list-view-category compareComponent__list-view-category--year`
                        : `compareComponent__grid-view-category compareComponent__grid-view-category--year`
                    }
                  >
                    {itemObj.year}
                  </li>
                  <li
                    className={
                      isListView
                        ? `compareComponent__list-view-category compareComponent__list-view-category--price`
                        : `compareComponent__grid-view-category compareComponent__grid-view-category--price`
                    }
                  >
                    {itemObj.price}
                  </li>
                  <li
                    className={
                      isListView
                        ? `compareComponent__list-view-category compareComponent__list-view-category--description`
                        : `compareComponent__grid-view-category compareComponent__grid-view-category--description`
                    }
                  >
                    {itemObj.description}
                  </li>
                </ul>
                <button
                  className={`compareComponent__edit-button ${
                    isListView
                      ? `compareComponent__edit-button--list-view`
                      : `compareComponent__edit-button--grid-view`
                  }`}
                  onClick={() => {
                    handleEditButton(index, true);
                  }}
                >
                  Edit
                </button>
              </li>
            ))}
        <li
          className={`compareComponent__item ${
            isListView
              ? `compareComponent__item--list-view  compareComponent__item--add-item-list-view`
              : `compareComponent__item--grid-view  compareComponent__item--add-item-grid-view`
          }`}
          onClick={handleAddItemButton}
        >
          <div className="compareComponent__item--add-container">+</div>
        </li>
      </ul>

      {isEditModal ? (
        <EditCompareItemModal
          itemObj={itemObj}
          pinnedItemList={pinnedItemList}
          setPinnedItemList={setPinnedItemList}
          unpinnedItemList={unpinnedItemList}
          setUnpinnedItemList={setUnpinnedItemList}
          setIsEditModal={setIsEditModal}
        />
      ) : (
        ``
      )}

      {/* add item modal */}
      {isAddItemModal ? (
        <AddCompareItemModal
          setIsAddItemModal={setIsAddItemModal}
          orderedList={orderedList}
          setOrderedList={setOrderedList}
          unpinnedItemList={unpinnedItemList}
          setUnpinnedItemList={setUnpinnedItemList}
        />
      ) : (
        ``
      )}
    </div>
  );
};

export default CompareComponent;
