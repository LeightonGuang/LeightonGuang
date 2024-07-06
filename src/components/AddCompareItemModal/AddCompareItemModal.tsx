import "./AddCompareItemModal.scss";

const AddCompareItemModal = ({
  setIsAddItemModal,
}: {
  setIsAddItemModal: (value: boolean) => void;
}) => {
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

        <form className="addCompareItemModal__form" action="">
          <label htmlFor="">
            Brand:
            <input
              className="addCompareItemModal__input"
              type="text"
              name="brand"
            />
          </label>
          <label htmlFor="">
            Name:
            <input
              className="addCompareItemModal__input"
              type="text"
              name="name"
            />
          </label>
          <label htmlFor="">
            Year:
            <input
              className="addCompareItemModal__input"
              type="text"
              name="year"
            />
          </label>
          <label htmlFor="">
            Price:
            <input
              className="addCompareItemModal__input"
              type="text"
              name="price"
            />
          </label>
          <label htmlFor="">
            Description:
            <textarea
              className="addCompareItemModal__textarea"
              name="description"
              id=""
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
