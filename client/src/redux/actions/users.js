import { builActionEnum } from "../../shared/utils/ReduxUtils";

// Listado de acciones (como cadenas de texto)
const actions = ["LOGIN", "LOGOUT", "CREATE"];

// "Enumerado de acciones", a partir de los literales
const userActionTypes = builActionEnum(actions);

// ===========================================
// Acciones de usuario (wrapper de actions)
// ===========================================

/**
 * Acción de Login
 */
const doLogin = (userData) => ({
  type: userActionTypes.LOGIN,
  user: userData,
});

/**
 * Acción de Logout
 */
const doLogout = () => ({
  type: userActionTypes.LOGOUT,
});

/**
 * Acción de Registrar usuario
 */
const registerUser = (userData) => ({
  type: userActionTypes.CREATE,
  user: userData,
});

export const userActions = {
  types: userActionTypes,
  doLogin,
  doLogout,
  registerUser
};
