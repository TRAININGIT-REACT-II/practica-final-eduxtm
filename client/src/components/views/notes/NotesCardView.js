import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { Card } from "react-bootstrap";

const NotesCardView = ({
  notes,
  viewNoteAction,
  editNoteAction,
  removeNoteAction,
}) => {
  return (
    <>
      {notes.map((note, i) => (
        <div style={{ marginRight: "10px", marginBottom: "10px", float: "left" }} key={i}>
          <div className="note">
            <Card.Title>{note.title}</Card.Title>
            <Card.Text>{note.content}</Card.Text>
            <div className="note-footer">
              <button className="ico-horizontal" onClick={() => viewNoteAction(note, i)}>
                <FontAwesomeIcon icon={solid("info")} />
                <span>Ver</span>
              </button>
              <button className="ico-horizontal" onClick={() => editNoteAction(note, i)}>
                <FontAwesomeIcon icon={solid("pen-to-square")} />
                <span>Editar</span>
              </button>
              <button onClick={() => removeNoteAction(note, i)}>
                <FontAwesomeIcon icon={solid("eraser")} />
                <span>Eliminar</span>
              </button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default NotesCardView;
