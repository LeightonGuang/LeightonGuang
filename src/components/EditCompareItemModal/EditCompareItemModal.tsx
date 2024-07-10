import "./EditCompareItemModal.scss";
import { useState } from "react";

import { ItemObj } from "../../types/ItemObj";

interface PropTypes {
  itemObj: ItemObj;
  pinnedItemList: ItemObj[];
  setPinnedItemList: (value: ItemObj[]) => void;
  unpinnedItemList: ItemObj[];
  setUnpinnedItemList: (value: ItemObj[]) => void;
  setIsEditModal: (value: boolean) => void;
}

const EditCompareItemModal = ({
  itemObj,
  pinnedItemList,
  setPinnedItemList,
  unpinnedItemList,
  setUnpinnedItemList,
  setIsEditModal,
}: PropTypes) => {
  const [formData, setFormData] = useState<ItemObj>(itemObj);

  const handleEditFormChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    console.log({ ...formData, [name]: value });
  };

  const handleFinishEdit = () => {
    if (pinnedItemList.includes(itemObj)) {
      console.log("Item is in pinned list");
      const itemIndex: number = pinnedItemList.indexOf(itemObj);
      const updatedList: ItemObj[] = [...pinnedItemList];
      updatedList[itemIndex] = formData;
      console.log(updatedList);
      setPinnedItemList(updatedList);
    } else if (unpinnedItemList.includes(itemObj)) {
      console.log("Item is in unpinned list");
      const itemIndex: number = unpinnedItemList.indexOf(itemObj);
      const updatedList: ItemObj[] = [...unpinnedItemList];
      updatedList[itemIndex] = formData;
      console.log(updatedList);
      setUnpinnedItemList(updatedList);
    }

    setIsEditModal(false);
  };

  return (
    <div className="editCompareItemModal">
      <div className="editCompareItemModal__card">
        <div className="editCompareItemModal__nav">
          <h1 className="editCompareItemModal__title">Edit Item</h1>
          <button
            className="editCompareItemModal__btn-cancel"
            onClick={() => setIsEditModal(false)}
          >
            Cancel
          </button>
        </div>

        <form
          className="editCompareItemModal__form"
          onSubmit={handleFinishEdit}
        >
          <img
            className="editCompareItemModal__img-preview"
            src={formData.imageUrl}
            alt={formData.brand + ` ` + formData.name}
          />
          <label>
            Image URL:
            <input
              className="editCompareItemModal__input"
              type="url"
              name="imageUrl"
              value={formData.imageUrl}
              onChange={handleEditFormChange}
            />
          </label>
          <label>
            Brand:
            <input
              className="editCompareItemModal__input"
              type="text"
              name="brand"
              value={formData.brand}
              onChange={handleEditFormChange}
            />
          </label>
          <label>
            Name:
            <input
              className="editCompareItemModal__input"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleEditFormChange}
            />
          </label>
          <label htmlFor="">
            Year:
            <input
              className="editCompareItemModal__input"
              type="text"
              name="year"
              value={formData.year}
              onChange={handleEditFormChange}
            />
          </label>
          <label>
            Price:
            <input
              className="editCompareItemModal__input"
              type="text"
              name="price"
              value={formData.price}
              onChange={handleEditFormChange}
            />
          </label>
          <label>
            Description:
            <textarea
              className="editCompareItemModal__textarea"
              name="description"
              value={formData.description}
              onChange={handleEditFormChange}
            />
          </label>

          <button className="editCompareItemModal__confirm-btn" type="submit">
            Confirm
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditCompareItemModal;
