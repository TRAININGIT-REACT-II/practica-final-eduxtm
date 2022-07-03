import { useSelector } from "react-redux";
import { getThemeAsClassName } from "../../redux/selectors/app";

import "./SquareSwitch.css";

const SquareSwitch = ({
  isOn = false,
  onColor = "#fff",
  switchValues = [],
  handleToggle,
}) => {
  // Valor de tema
  const theme = useSelector((state) => getThemeAsClassName(state));

  return (
    <>
      <label className={`react-switch react-switch-${theme}`}>
        <input
          checked={isOn}
          onChange={handleToggle}
          className="react-switch-checkbox"
          type="checkbox"
        />

        <div className={`react-switch-button react-switch-button-${theme}`} />
        <div className="react-switch-labels">
          {switchValues.map((value, i) => (
            <span key={i}>{value}</span>
          ))}
        </div>
      </label>
    </>
  );
};

export default SquareSwitch;
