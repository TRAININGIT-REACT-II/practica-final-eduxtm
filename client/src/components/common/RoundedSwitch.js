import { useSelector } from "react-redux";
import { getThemeAsClassName } from "../../redux/selectors/app";
import "./RoundedSwitch.css";

/**
 * Produce un fragmento HMTL con un componente tipo Toogle
 * @param {*} isOn Flag que indica si está activo
 * @param {*} toggleAction Acción a ejecutar cuando se produce una acción "toggle" (cambio)
 * @returns Componente
 */
const RoundedSwitch = ({ toggleAction }) => {
  // Valor de tema
  const theme = useSelector((state) => getThemeAsClassName(state));

  return (
    <>
      <div className={`toggle ${theme}`}>
        <input type="checkbox" id="toggle" onClick={toggleAction} />
        <label htmlFor="toggle"></label>
      </div>
    </>
  );
};

export default RoundedSwitch;
