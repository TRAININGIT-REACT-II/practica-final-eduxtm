import { builActionEnum } from "../../shared/utils/ReduxUtils";

// Listado de acciones (como cadenas de texto)
const actions = ["LIST_NOTES", "ADD_NOTE", "EDIT_NOTE", "REMOVE_NOTE", "UPDATE_SORT_CRITERIA"];

// "Enumerado de acciones", a partir de los literales
const noteActionTypes = builActionEnum(actions);

// ===========================================
// Acciones para notas de usuario (wrapper de actions)
// ===========================================

/**
 * Acción de recuperar el listado de notas
 */
const listAllNotes = (notes) => ({
  type: noteActionTypes.LIST_NOTES,
  notes,
});

/**
 * Acción de añadir/crear un nota
 */
const addNote = (note) => ({
  type: noteActionTypes.ADD_NOTE,
  note,
});

/**
 * Acción de editar una nota
 */
const editNote = (index, note) => ({
  type: noteActionTypes.EDIT_NOTE,
  index,
  note,
});

/**
 * Acción de eliminar una nota
 */
 const removeNote = (index) => ({
    type: noteActionTypes.REMOVE_NOTE,
    index
  });

  /**
 * Acción de actualizar criterios de ordenación del listado de notas
 */
 const updateSortingCriteria = (field, direction) => ({
  type: noteActionTypes.UPDATE_SORT_CRITERIA,
  field: field,
  direction: direction
});

export const noteActions = {
  types: noteActionTypes,
  listAllNotes,
  addNote,
  editNote,
  removeNote,
  updateSortingCriteria,
};
