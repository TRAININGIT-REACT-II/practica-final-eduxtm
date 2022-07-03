import { builActionEnum } from "../../shared/utils/ReduxUtils";

// Listado de acciones (como cadenas de texto)
const actions = ["UPDATE_THEME", "TRACE_EVENT"];

// "Enumerado de acciones", a partir de los literales
const appActionTypes = builActionEnum(actions);

// ===========================================
// Acciones de aplicación (wrapper de actions)
// ===========================================

/**
 * Acción de cambio de tema
 */
const updateTheme = (theme) => ({
  type: appActionTypes.UPDATE_THEME,
  theme: theme,
});

/**
 * Acción de trazado de evento
 */
 const traceEvent = (event) => ({
  type: appActionTypes.TRACE_EVENT,
  event: event,
});

export const appActions = {
  types: appActionTypes,
  updateTheme,
  traceEvent,
};
