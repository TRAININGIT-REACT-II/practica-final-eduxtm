import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams, Link } from "react-router-dom";
import { NoteModesEnum } from "../../../shared/data/NoteModes";
import { appActions } from "../../../redux/actions/app";
import { noteActions } from "../../../redux/actions/notes";
import { notesService } from "../../../shared/api/NotesAPI";
import { getUser } from "../../../redux/selectors/users";

//import "./NoteDetails.css";

const NoteDetails = ({ mode = NoteModesEnum.NEW }) => {
  
  // Usuario de la aplicación
  const appUser = useSelector((state) => getUser(state));

  // Control de navegación
  const navigation = useNavigate();
  const routeParams = useParams();

  // Dispatcher de acciones Redux, para el store disponible
  // ** En este punto, debe existir un Provider de Redux con el store creado,
  // que envuelva a este componente y lo dote de esta funcionalidad.
  const dispatch = useDispatch();

  // Estado del formulario por defecto (valor inicial)
  const FORM_INITIAL_STATE = {
    title: "",
    content: "",
  };

  // Control del estado del formulario
  //const formInitialValue =
  // !mode || modesEnum.NEW === mode ? FORM_INITIAL_STATE : useSelector((state) => getNote(state, routeParams.id));
  const [formNote, setFormNote] = useState(FORM_INITIAL_STATE);

  // Flags de modo
  const isNewMode = NoteModesEnum.NEW === mode;
  const isViewMode = NoteModesEnum.VIEW === mode;
  const isEditionMode = NoteModesEnum.EDIT === mode;
  const hasToRetrieveNote = isViewMode || isEditionMode;
  const canEditForm = isNewMode || isEditionMode;

  useEffect(() => {
    // console.log("NoteDetails::useEffect");
    if (hasToRetrieveNote) {
      retrieveNote();
    } else {
      handleFormReset();
    }
  }, [mode]);

  const retrieveNote = () => {
    notesService.getNote(appUser.token, routeParams.id).then((json) => {
      if (json.error != null) {
        // console.log("Error al recuperar la nota! ", json.error);
      } else {
        // console.log("Nota recuperada correctamente!", json);
        setFormNote(json);
      }
    });
  };

  // Función de gestión de cambio de valor en el formulario
  const handleFormChange = (e) => {
    setFormNote({
      ...formNote,
      [e.target.name]: e.target.value,
    });
  };

  // Función de gestión de limpieza de los valores del formulario
  const handleFormReset = () => {
    setFormNote(FORM_INITIAL_STATE);
    return formNote;
  };

  // Gestión del submit del formulario
  const handleFormSubmit = (e) => {
    e.preventDefault();
    // console.log("Submit del formulario", formNote);

    // TODO: Validación de datos

    // Acciones para el submit
    if (isNewMode) {
      // Acción de crear nota
      addNote();
    } else if (isEditionMode) {
      // Acción de editar nota
      editNote();
    }
  };

  /**
   * Realiza la acción de adición de nota al listado, mediante el servicio de notas
   */
  const addNote = () => {
    let event = { action: 'Creación de nota', status: null, message: '' };
    notesService.addNote(appUser.token, formNote).then((json) => {
      if (json.error != null) {
        event = {...event, status: 'ko', message: json.error};
        // console.log("Error al añadir la nota! ", json.error);
      } else {
        event = {...event, status: 'ok', message: "Nota añadida correctamente!"};
        // console.log(event.message, json);
        dispatch(noteActions.addNote(json));
      }
      dispatch(appActions.traceEvent(event));
      if(event.status == 'ok'){
        navigation("/notes");
      }
    });
  };

  /**
   * Realiza la acción de edición de una nota
   */
  const editNote = () => {
    notesService.editNote(appUser.token, formNote).then((json) => {
      if (json.error != null) {
        // console.log("Error al editar la nota! ", json.error);
      } else {
        // console.log("Nota editada correctamente! ", json);
        dispatch(noteActions.editNote(routeParams.id, json));
        navigation("/notes");
      }
    });
  };

  return (
    <>
      {isNewMode && <h4>Vamos a crear una nota</h4>}
      {isViewMode && (
        <h4>Estás consultando los datos de la nota <b>{routeParams.id}</b></h4>
      )}
      {isEditionMode && (
        <h4>Estás editando de datos de la nota <b>{routeParams.id}</b></h4>
      )}
      <form>
        <div className="note-title">
        <input
          id="title"
          name="title"
          type="text"
          placeholder="Título"
          value={formNote.title}
          disabled={!canEditForm}
          onChange={handleFormChange}
          required
        />
        </div>
        <div className="note new">
          <textarea
            id="content"
            name="content"
            rows="8"
            cols="10"
            placeholder="Contenido de la nota..."
            value={formNote.content}
            onChange={handleFormChange}
          ></textarea>
          <div className="note-footer">
            <button
              type="button"
              onClick={handleFormSubmit}
              hidden={!isNewMode}
            >
              Crear
            </button>
            <button
              type="button"
              onClick={handleFormSubmit}
              hidden={!isEditionMode}
            >
              Editar
            </button>
          </div>
        </div>
      </form>

      <Link to="/notes">Volver a Notas</Link>
    </>
  );
};

export default NoteDetails;
