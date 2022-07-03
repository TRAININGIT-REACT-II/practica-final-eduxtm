import { useDispatch, useSelector } from "react-redux";
import { appActions } from "../../redux/actions/app";
import { getTheme } from "../../redux/selectors/app";
import { AppThemesEnum } from "../../shared/data/AppThemes";
import Switch from "./Switch";

import "./Toggle.css";

/**
 * Componente intercambiador del tema de la aplicación
 * @returns Componente
 */
const ThemeToggle = () => {
  const dispatch = useDispatch();

  // Valor de tema
  const theme = useSelector((state) => getTheme(state));

  const themeToggleAction = (e) => {
    // console.log("ToggleTheme::toggleThemeAction");
    const newTheme =
      AppThemesEnum.DARK === theme ? AppThemesEnum.LIGHT : AppThemesEnum.DARK;
    dispatch(appActions.updateTheme(newTheme));
  };

  return <Switch toggleAction={themeToggleAction} />;
};

export default ThemeToggle;
