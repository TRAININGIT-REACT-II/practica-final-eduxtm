import { buildEnum } from "../../shared/utils/ObjectUtils";
import RoundedSwitch from "./RoundedSwitch";
import SquareSwitch from "./SquareSwitch";
import "./Toggle.css";

const toggleTypes = ["SQUARE", "ROUNDED"];
export const ToggleTypeEnum = buildEnum(toggleTypes);

/**
 * Produce un fragmento HMTL con un componente tipo Toogle
 * @param {*} type
 * @param {*} values
 * @param {*} isOn Flag que indica si está activo
 * @param {*} onColor
 * @param {*} toggleAction Acción a ejecutar cuando se produce una acción "toggle" (cambio)
 * @returns Componente
 */
const Switch = ({
  type = ToggleTypeEnum.ROUNDED,
  values = [],
  isOn = false,
  onColor = "#fff",
  toggleAction,
}) => {
  return ToggleTypeEnum.ROUNDED === type ? (
    <RoundedSwitch toggleAction={toggleAction} />
  ) : (
    <SquareSwitch
      isOn={isOn}
      onColor={onColor}
      switchValues={values}
      handleToggle={toggleAction}
    />
  );
};

export default Switch;
