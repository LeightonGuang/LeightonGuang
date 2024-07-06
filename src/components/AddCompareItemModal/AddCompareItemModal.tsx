import "./AddCompareItemModal.scss";

const AddCompareItemModal = ({
  setIsAddItemModal,
}: {
  setIsAddItemModal: (value: boolean) => void;
}) => {
  return (
    <>
      <div className="addCompareItemModal">
        <div className="addCompareItemModal__container">
          <div className="addCompareItemModal__nav">
            <h1 className="addCompareItemModal__title">Add Item</h1>
            <button
              className="addCompareItemModal__btn-close"
              onClick={() => setIsAddItemModal(false)}
            >
              Close
            </button>
          </div>

          <div className="addCompareItemModal__body">
            <form action="">
              <label htmlFor="">
                Brand:
                <input type="text" name="brand" />
              </label>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddCompareItemModal;
