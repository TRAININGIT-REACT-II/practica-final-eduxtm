import { useState } from "react";
import { buildEnum } from "../../../shared/utils/ObjectUtils";
import Switch, { ToggleTypeEnum } from "../../common/Switch";

const viewValues = ["LISTA", "TARJ"];
export const NotesViewEnum = buildEnum(viewValues);
const defaultViewType = NotesViewEnum.LISTA;

/**
 * Componente intercambiador de vista de datos de nota
 * @returns Componente
 */
const NoteViewToggle = ({viewType = defaultViewType, handleViewToogle}) => {

  const [view, setView] = useState(viewType);

  const viewToggleAction = (e) => {
    // console.log("NoteViewToggle::viewToggleAction");
    const newView =
      NotesViewEnum.LISTA === view ? NotesViewEnum.TARJ : NotesViewEnum.LISTA;
    // console.log("NoteViewToggle::viewToggleAction::newView=", newView);
    setView(newView);
    if(handleViewToogle) {
      handleViewToogle();
    }
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "52px",
          width: "104px",
        }}
      >
      <Switch
        type={ToggleTypeEnum.SQUARE}
        values={viewValues}
        isOn={NotesViewEnum.TARJ === view}
        toggleAction={viewToggleAction}
      />
      </div>
    </>
  );
};

export default NoteViewToggle;
