// ------------------------------
// API para operaciones de notas
// ------------------------------

const NOTES_API_BASE_PATH = "/api/notes";

// OPERACIÓN: Obtención del listado de notas
// ------------------------------------------
const GET_NOTES_API_PATH = NOTES_API_BASE_PATH;
const getNotesRequestParams = (token) => ({
  method: "GET",
  headers: {
    "api-token": token,
  },
});

/**
 * Método que llama a la API de obtención del listado de notas
 * @param {*} token Token de usuario requerido en la llamada a la API
 * @returns Listado de notas creadas
 */
const getNotesRequest = async (token) => {
  const response = await fetch(
    GET_NOTES_API_PATH,
    getNotesRequestParams(token)
  );
  const json = await response.json();
  return json;
};

// OPERACIÓN: Obtener nota
// ------------------------------------------
const GET_NOTE_API_PATH = NOTES_API_BASE_PATH + "/";
const getNoteRequestParams = (token) => ({
  method: "GET",
  headers: {
    "api-token": token,
  }
});

/**
 * Método que llama a la API de recuperación de nota por ID
 * @param {string} token Token de usuario requerido en la llamada a la API
 * @param {number} id Identificador de la nota a recuperar
 * @returns Nota
 */
const getNoteRequest = async (token, id) => {
  const response = await fetch(GET_NOTE_API_PATH + id, getNoteRequestParams(token, id));
  const json = await response.json();
  return json;
};

// OPERACIÓN: Añadir nota al listado
// ------------------------------------------
const ADD_NOTE_API_PATH = NOTES_API_BASE_PATH;
const addNoteRequestParams = (token, note) => ({
  method: "POST",
  headers: {
    "api-token": token,
    "Content-Type": "application/json; charset=UTF-8"
  },
  body: JSON.stringify(note)
});

/**
 * Método que llama a la API de adición de nota al listado de notas
 * @param {string} token Token de usuario requerido en la llamada a la API
 * @returns nota añadida
 */
const addNoteRequest = async (token, note) => {
  const response = await fetch(ADD_NOTE_API_PATH, addNoteRequestParams(token, note));
  const json = await response.json();
  return json;
};

// OPERACIÓN: Editar nota
// ------------------------------------------
const EDIT_NOTE_API_PATH = NOTES_API_BASE_PATH + "/";
const editNotRequestParams = (token, note) => ({
  method: "PUT",
  headers: {
    "api-token": token,
    "Content-Type": "application/json; charset=UTF-8",
  },
  body: JSON.stringify(note)
});

/**
 * Método que llama a la API de edición de nota
 * @param {string} token Token de usuario requerido en la llamada a la API
 * @returns nota a editar
 */
const editNoteRequest = async (token, note) => {
  const response = await fetch(EDIT_NOTE_API_PATH + note.id, editNotRequestParams(token, note));
  const json = await response.json();
  return json;
};

// OPERACIÓN: Eliminar nota
// ------------------------------------------
const REMOVE_NOTE_API_PATH = NOTES_API_BASE_PATH + "/";
const removeNotRequestParams = (token) => ({
  method: "DELETE",
  headers: {
    "api-token": token,
  }
});

/**
 * Método que llama a la API de borrado de nota
 * @param {string} token Token de usuario requerido en la llamada a la API
 * @returns nota a eliminar
 */
const removeNoteRequest = async (token, id) => {
  const response = await fetch(REMOVE_NOTE_API_PATH + id, removeNotRequestParams(token));
  const json = await response.json();
  return json;
};

export const notesService = {
  getNotes: getNotesRequest,
  getNote: getNoteRequest,
  addNote: addNoteRequest,
  editNote: editNoteRequest,
  removeNote: removeNoteRequest
};
