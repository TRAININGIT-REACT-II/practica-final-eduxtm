import { noteActions } from "../actions/notes";

// Estado inicial
const initialState = {
  list: [],
  orderBy: "title",
  orderDirection: "asc",
};

/**
 * Reducer de acciones relativas a notas
 */
const notesReducer = (state = initialState, action) => {
  let newState = null;

  switch (action.type) {
    case noteActions.types.LIST_NOTES:
      newState = {
        list: action.notes,
        orderBy: state.orderBy,
        orderDirection: state.orderDirection
      };
      break;
    case noteActions.types.ADD_NOTE:
      newState = {
        list: addNoteToList(state.list, action.note),
        orderBy: state.orderBy,
        orderDirection: state.orderDirection
      };
      break;
    case noteActions.types.EDIT_NOTE:
      newState = {
        list: editNoteInList(state.list, action.index, action.note),
        orderBy: state.orderBy,
        orderDirection: state.orderDirection
      };
      break;
    case noteActions.types.REMOVE_NOTE:
      newState = {
        list: removeNoteFromList(state.list, action.index),
        orderBy: state.orderBy,
        orderDirection: state.orderDirection
      };
      break;
    case noteActions.types.UPDATE_SORT_CRITERIA:
      newState = {
        list: state.list,
        orderBy: action.field,
        orderDirection: action.direction,
      };
      break;
    default:
      newState = state;
  }

  return newState;
};

/**
 * Función que realiza la agregación de una nota a un listado
 * @param {array} list listado de notas
 * @param {any} note Datos a añadir
 * @returns Listado con la nota añadida
 */
const addNoteToList = (list, note) => {
  return [...list, note];
};

/**
 * Función que realiza la edición de una nota
 * @param {array} list listado de notas
 * @param {number} index Índice donde se encuentra la nota en un listado
 * @param {any} note Datos de la nota a editar
 * @returns Nota editada
 */
const editNoteInList = (list, index, note) => {
  return [...list.slice(0, index), note, ...list.slice(index + 1)];
};

/**
 * Función que devuelve un listado sin un elemento concreto
 * @param {array} list listado de notas
 * @param {number} index Índice donde se encuentra la nota a eliminar en un listado
 * @returns Listado sin el elemento
 */
const removeNoteFromList = (list, index) => {
  // TODO: Control del índice
  return [...list.slice(0, index), ...list.slice(index + 1)];
};

// const sortListOfNotesByField = (list, field, direction) => {
//   return list.sort((a, b) =>
//     "asc" === direction
//       ? a[field] > b[field]
//         ? 1
//         : b[field] > a[field]
//         ? -1
//         : 0
//       : b[field] > a[field]
//       ? 1
//       : a[field] > b[field]
//       ? -1
//       : 0
//   );
// };

export default notesReducer;
