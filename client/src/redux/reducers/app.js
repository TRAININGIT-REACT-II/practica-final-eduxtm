import { AppThemesEnum } from "../../shared/data/AppThemes";
import { appActions } from "../actions/app";

// Estado inicial
const initialState = {
  theme: AppThemesEnum.DARK,
  lastEvent: null
};

/**
 * Reducer de operaciones relativas a la aplicación
 */
const appReducer = (state = initialState, action) => {
  let newState = null;
  switch (action.type) {
    case appActions.types.UPDATE_THEME:
      newState = { theme: action.theme, lastEvent: null };
      break;
    case appActions.types.TRACE_EVENT:
      newState = { theme: state.theme, lastEvent: action.event };
      break;
    default:
      newState = state;
  }

  return newState;
};

export default appReducer;
