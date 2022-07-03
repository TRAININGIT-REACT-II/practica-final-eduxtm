// ---------------------------------------
// Fichero de utilidades de Redux
// ---------------------------------------

/**
 * Utilidad que crea un "Enumerado de acciones", a partir de un array de literales, que definen las acciones
 * @param {[]} actions
 * @returns Enumerado con las acciones indicadas
 */
export const builActionEnum = (actions) => {
  const actionTypeEnum = {};
  actions.forEach((action) => {
    actionTypeEnum[action] = action;
  });

  return actionTypeEnum;
};
