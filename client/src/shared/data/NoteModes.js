import { buildEnum } from "../../shared/utils/ObjectUtils";

/** Listado de modos (como cadenas) */
const modes = ["NEW", "VIEW", "EDIT"];

/** Modos posibles para una nota */
export const NoteModesEnum = buildEnum(modes);