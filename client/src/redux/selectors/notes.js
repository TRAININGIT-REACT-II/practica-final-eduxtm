// ===========================================
// Selectores para store de notas de usuario
// ===========================================

import { getArrayValue } from "../../shared/utils/ObjectUtils";

// Obtención del listado de notas (todas)
export const getNotes = (state) => (state.notes.list ? state.notes.list : []);

// Obtención del listado de notas, aplicando un filtrado
export const getSortedNotes = (state) =>
  state.notes.list
    ? sortListByFieldAndDirection(
        state.notes.list,
        state.notes.orderBy,
        state.notes.orderDirection
      )
    : [];

// Obtención del valor de una nota
export const getNote = (state, i) => {
  return getArrayValue(state.notes.list, i);
};

/**
 * Función de ordenación de una lista de objetos, a partir de un campo del objeto y una dirección
 * @param {*} list Listado a ordenar
 * @param {*} field Campo de referencia
 * @param {*} direction Dirección (asc = Ascendente / desc = Descendente)
 * @returns Lista ordenada
 */
const sortListByFieldAndDirection = (list, field, direction) => {
  return list.sort((a, b) =>
    "asc" === direction
      ? a[field] > b[field]
        ? 1
        : b[field] > a[field]
        ? -1
        : 0
      : b[field] > a[field]
      ? 1
      : a[field] > b[field]
      ? -1
      : 0
  );
};
