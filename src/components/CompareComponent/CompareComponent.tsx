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
  const [isViewBtnActive, setIsViewBtnActive] = useState({
    isGridView: true,
    isListView: false,
  });

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
          <button
            className={`compareComponent__view-btn ${
              isViewBtnActive.isGridView
                ? `compareComponent__view-btn--active`
                : ``
            }`}
            onClick={() =>
              setIsViewBtnActive({ isGridView: true, isListView: false })
            }
          >
            ▯ Grid
          </button>
          <button
            className={`compareComponent__view-btn ${
              isViewBtnActive.isListView
                ? `compareComponent__view-btn--active`
                : ``
            }`}
            onClick={() =>
              setIsViewBtnActive({ isGridView: false, isListView: true })
            }
          >
            ☰ List
          </button>
        </div>
      </div>

      <ul className="compareComponent__list">
        {
          // don't show pinned list when it's empty
          pinnedItemList.length === 0
            ? ``
            : pinnedItemList.map((pinnedItemObj, index) => (
                <li className="compareComponent__item" key={index}>
                  <button
                    className="compareComponent__pin-button compareComponent__pin-button--pinned"
                    onClick={() => {
                      handleUnpinButton(index);
                    }}
                  >
                    unpin
                  </button>
                  <ul className="compareComponent__item-list">
                    <img
                      className="compareComponent__img"
                      src={pinnedItemObj.imageUrl}
                    />
                    <li className="compareComponent__brand">
                      {pinnedItemObj.brand}
                    </li>
                    <li className="compareComponent__name">
                      {pinnedItemObj.name}
                    </li>
                    <li className="compareComponent__year">
                      {pinnedItemObj.year}
                    </li>
                    <li className="compareComponent__price">
                      {pinnedItemObj.price}
                    </li>
                    <li className="compareComponent__description">
                      {pinnedItemObj.description}
                    </li>
                  </ul>
                  <button
                    className="compareComponent__edit-button"
                    onClick={() => {
                      handleEditButton(index, false);
                    }}
                  >
                    Edit
                  </button>
                </li>
              ))
        }
        {unpinnedItemList.map((itemObj, index) => (
          <li className="compareComponent__item" key={index}>
            <button
              className="compareComponent__pin-button"
              onClick={() => {
                handlePinButton(index);
              }}
            >
              pin
            </button>
            <ul className="compareComponent__item-list">
              <img className="compareComponent__img" src={itemObj.imageUrl} />
              <li className="compareComponent__brand">{itemObj.brand}</li>
              <li className="compareComponent__name">{itemObj.name}</li>
              <li className="compareComponent__year">{itemObj.year}</li>
              <li className="compareComponent__price">{itemObj.price}</li>
              <li className="compareComponent__description">
                {itemObj.description}
              </li>
            </ul>
            <button
              className="compareComponent__edit-button"
              onClick={() => {
                handleEditButton(index, true);
              }}
            >
              Edit
            </button>
          </li>
        ))}
        <li
          className="compareComponent__item compareComponent__item--add"
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
