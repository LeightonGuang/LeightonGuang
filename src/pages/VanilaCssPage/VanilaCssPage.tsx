import "./VanilaCssPage.scss";

const VanilaCssPage = () => {
  return (
    <div className="vanilaCssPage">
      <div className="vanilaCssPage__container">
        <h1 className="vanilaCssPage__title">Vanila css</h1>

        <ul className="vanilaCssPage__list">
          <li className="vanilaCssPage__item">
            <div className="vanilaCssPage__toggle-btn">
              <input
                className="vanilaCssPage__checkbox"
                type="checkbox"
                id="checkbox"
              />
              <label className="vanilaCssPage__knob" htmlFor="checkbox">
                checked
              </label>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default VanilaCssPage;
