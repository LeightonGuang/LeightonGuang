import ToggleButton from "../../components/vanilaCss/ToggleButton/ToggleButton";
import "./VanilaCssPage.scss";

const VanilaCssPage = () => {
  return (
    <div className="vanilaCssPage">
      <div className="vanilaCssPage__container">
        <h1 className="vanilaCssPage__title">Vanila css</h1>

        <ul className="vanilaCssPage__list">
          <li className="vanilaCssPage__item">
            <ToggleButton />
          </li>
          <li className="vanilaCssPage__item">
            <ToggleButton />
          </li>
          <li className="vanilaCssPage__item">
            <div className="newBtn">
              <input className="newBtn__checkbox" type="checkbox" />
              <div className="newBtn__knob" />
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default VanilaCssPage;
