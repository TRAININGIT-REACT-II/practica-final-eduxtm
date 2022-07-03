import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { Button, Table } from "react-bootstrap";
import { formatDate } from "../../../shared/utils/DateUtils";

const NotesListView = ({
  notes,
  viewNoteAction,
  editNoteAction,
  removeNoteAction,
}) => {
  return (
    <>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Título</th>
            <th>Contenido</th>
            <th>Fecha de creación</th>
            <th>Fecha de última edición</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {notes &&
            notes.map((note, i) => (
              <tr key={i}>
                <td>{note.title}</td>
                <td>{note.content}</td>
                <td>{formatDate(note.creationDate)}</td>
                <td>{formatDate(note.lastEditionDate)}</td>
                <td>
                  <Button
                    onClick={() => viewNoteAction(note, i)}
                    className="ico-horizontal"
                  >
                    <FontAwesomeIcon icon={solid("info")} />
                    <span style={{ marginLeft: "10px" }}>Ver nota</span>
                  </Button>
                  <Button
                    onClick={() => editNoteAction(note, i)}
                    className="ico-horizontal"
                  >
                    <FontAwesomeIcon icon={solid("pen-to-square")} />
                    <span style={{ marginLeft: "10px" }}>Editar nota</span>
                  </Button>
                  <Button onClick={() => removeNoteAction(note, i)}>
                    <FontAwesomeIcon icon={solid("eraser")} />
                    <span style={{ marginLeft: "10px" }}>Eliminar nota</span>
                  </Button>
                </td>
              </tr>
            ))}
        </tbody>
      </Table>
    </>
  );
};

export default NotesListView;
