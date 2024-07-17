import "./ToggleButton.scss";

const ToggleButton = () => {
  return (
    <div className="toggleButton">
      <input className="toggleButton__checkbox" type="checkbox" id="checkbox" />
      <label className="toggleButton__knob" htmlFor="checkbox">
        checked
      </label>
    </div>
  );
};

export default ToggleButton;
