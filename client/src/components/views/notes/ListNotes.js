import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getSortedNotes } from "../../../redux/selectors/notes";

import { noteActions } from "../../../redux/actions/notes";
import { notesService } from "../../../shared/api/NotesAPI";
import {
  Button,
  Col,
  Dropdown,
  DropdownButton,
  Modal,
  Row,
} from "react-bootstrap";
import NoteViewToggle from "./NoteViewToggle";
import NotesListView from "./NotesListView";
import NotesCardView from "./NotesCardView";
import { getUser } from "../../../redux/selectors/users";

const ListNotes = () => {
  // Usuario de la aplicación
  const appUser = useSelector((state) => getUser(state));

  // Dispatcher de acciones
  const dispatch = useDispatch();

  // // Control de navegación
  const navigation = useNavigate();

  // Control del tipo de vista de la lista
  const [listView, setListView] = useState(true);
  const [cardView, setCardView] = useState(false);

  // Control de ordenación de la lista
  const [orderField, setOrderField] = useState("title");
  const [orderDirection, setOrderDirection] = useState("asc");

  // Control modal de seguridad para eliminar una nota definitivamente
  const [showRemoveModal, setShowRemoveModal] = useState(false);
  const [pendingToBeRemovedNote, setPendingToBeRemovedNote] = useState(null);
  const [pendingToBeRemovedIndex, setPendingToBeRemovedIndex] = useState(null);

  // Listado de notas
  const notes = useSelector((state) => getSortedNotes(state));
  //const [notes, setNotes] = useState([]);

  const retrieveNotes = () => {
    notesService.getNotes(appUser.token).then((json) => {
      if (json.error != null) {
        // console.log("Error al listar notas! ", json.error);
      } else {
        // console.log("Listado de notas recuperado correctamente! ", json);
        dispatch(noteActions.listAllNotes(json));
        //notes = useSelector((state) => getSortedNotes(state));
      }
    });
  };

  useEffect(() => {
    // console.log("ListNotes::useEffect::notas");
    if (appUser) {
      // Acción de listar notas
      retrieveNotes();
    }
  }, []);

  const viewNoteDetails = (note) => {
    // console.log("Se navega hasta la pantalla de detalles de la nota");
    navigation(`details/${note.id}`);
  };

  const editNoteDetails = (note) => {
    // console.log("Se navega hasta la pantalla de edición de la nota");
    navigation(`edit/${note.id}`);
  };

  /**
   * Guarda temporalmente referencia a la nota y el índice a borrar y muestra el modal de confirmación
   * @param {*} note Nota a borrar
   * @param {*} index Índice a borrar
   */
  const confirmNoteRemoval = (note, index) => {
    setPendingToBeRemovedIndex(index);
    setPendingToBeRemovedNote(note);
    setShowRemoveModal(true);
  };

  /**
   * Función que elimina una nota del listado, a través del servicio de Notas.
   */
  const removeNote = (note, index) => {
    console.log("Se elimina la nota ", note.id);
    notesService.removeNote(appUser.token, note.id).then((json) => {
      if (json.error != null) {
        // console.log("Error al eliminar la nota! ", json.error);
      } else {
        // console.log("Nota eliminada correctamente! ", json);
        dispatch(noteActions.removeNote(index));
      }
    });
    // Reset valores auxiliares para borrado de nota
    setPendingToBeRemovedIndex(null);
    setPendingToBeRemovedNote(null);
    setShowRemoveModal(false);
  };

  const viewToggleAction = (e) => {
    // console.log("ListNotes::viewToggleAction");
    if (listView) {
      setListView(false);
      setCardView(true);
    } else {
      setListView(true);
      setCardView(false);
    }
  };

  const sortNotesList = (sortingField) => {
    // console.log("ListNotes::sortNotesList");
    setOrderDirection(
      orderField === sortingField
        ? orderDirection === "asc"
          ? "desc"
          : "asc"
        : "asc"
    );
    setOrderField(sortingField);
    dispatch(noteActions.updateSortingCriteria(orderField, orderDirection));
  };

  return (
    <>
      <h3>Listado de notas</h3>
      <Row className="mt-4 mb-4">
        <Col md="2" className="mt-3">
          <p>Selector de vista</p>
        </Col>
        <Col md="8">
          <NoteViewToggle handleViewToogle={viewToggleAction} />
        </Col>
        <Col md="2">
          <DropdownButton title="Ordenar notas por" id="bg-nested-dropdown">
            <Dropdown.Item eventKey="1" onClick={() => sortNotesList("title")}>
              Título
            </Dropdown.Item>
            <Dropdown.Item
              eventKey="2"
              onClick={() => sortNotesList("creationDate")}
            >
              Fecha de creación
            </Dropdown.Item>
            <Dropdown.Item
              eventKey="3"
              onClick={() => sortNotesList("lastEditionDate")}
            >
              Fecha de última edición
            </Dropdown.Item>
          </DropdownButton>
        </Col>
      </Row>
      <Row>
        <Col md="12">
          {listView && (
            <NotesListView
              notes={notes}
              viewNoteAction={viewNoteDetails}
              editNoteAction={editNoteDetails}
              removeNoteAction={confirmNoteRemoval}
            />
          )}
        </Col>
      </Row>
      {/* <Row>
        <Col md="12" style={{ display: "flex" }}> */}
          {cardView && (
            <NotesCardView
              notes={notes}
              viewNoteAction={viewNoteDetails}
              editNoteAction={editNoteDetails}
              removeNoteAction={confirmNoteRemoval}
            />
          )}
        {/* </Col>
      </Row> */}

      <Modal show={showRemoveModal}>
        <Modal.Header closeButton>
          <Modal.Title>Eliminar nota</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            ¿Estás seguro que quieres eliminar la nota? Esta acción es
            irreversible
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowRemoveModal(false)}>
            Close
          </Button>
          <Button
            variant="danger"
            onClick={() =>
              removeNote(pendingToBeRemovedNote, pendingToBeRemovedIndex)
            }
          >
            Eliminar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ListNotes;
