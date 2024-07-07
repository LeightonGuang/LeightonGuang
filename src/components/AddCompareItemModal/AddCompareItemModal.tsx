import "./AddCompareItemModal.scss";
import { useState } from "react";

import { ItemObj } from "../../types/ItemObj";

interface PropTypes {
  setIsAddItemModal: (value: boolean) => void;
  orderedList: ItemObj[];
  setOrderedList: (value: ItemObj[]) => void;
  unpinnedItemList: ItemObj[];
  setUnpinnedItemList: (value: ItemObj[]) => void;
}

const AddCompareItemModal = ({
  setIsAddItemModal,
  orderedList,
  setOrderedList,
  unpinnedItemList,
  setUnpinnedItemList,
}: PropTypes) => {
  const [formData, setFormData] = useState<ItemObj>({
    imageUrl: "",
    brand: "",
    name: "",
    year: 0,
    price: "",
    description: "",
  });

  const handleAddFormChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    console.log({ ...formData, [name]: value });
  };

  const handleSubmitForm = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    setOrderedList([...orderedList, formData]);
    setUnpinnedItemList([...unpinnedItemList, formData]);
    console.log(unpinnedItemList);
    setIsAddItemModal(false);
  };

  return (
    <div className="addCompareItemModal">
      <div className="addCompareItemModal__card">
        <div className="addCompareItemModal__nav">
          <h1 className="addCompareItemModal__title">Add Item</h1>
          <button
            className="addCompareItemModal__btn-close"
            onClick={() => setIsAddItemModal(false)}
          >
            Close
          </button>
        </div>

        <form className="addCompareItemModal__form" onSubmit={handleSubmitForm}>
          <label>
            Image URL:
            <input
              className="addCompareItemModal__input"
              type="url"
              name="imageUrl"
              value={formData.imageUrl}
              onChange={handleAddFormChange}
            />
          </label>
          <label>
            Brand:
            <input
              className="addCompareItemModal__input"
              type="text"
              name="brand"
              value={formData.brand}
              onChange={handleAddFormChange}
            />
          </label>
          <label>
            Name:
            <input
              className="addCompareItemModal__input"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleAddFormChange}
            />
          </label>
          <label htmlFor="">
            Year:
            <input
              className="addCompareItemModal__input"
              type="text"
              name="year"
              value={formData.year}
              onChange={handleAddFormChange}
            />
          </label>
          <label>
            Price:
            <input
              className="addCompareItemModal__input"
              type="text"
              name="price"
              value={formData.price}
              onChange={handleAddFormChange}
            />
          </label>
          <label>
            Description:
            <textarea
              className="addCompareItemModal__textarea"
              name="description"
              value={formData.description}
              onChange={handleAddFormChange}
            />
          </label>

          <button className="addCompareItemModal__add-btn" type="submit">
            Add
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddCompareItemModal;
