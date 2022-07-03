import { buildEnum } from "../../shared/utils/ObjectUtils";

/** Listado de modos (como cadenas) */
const themes = ["DARK", "LIGHT"];

/** Modos posibles para temas de aplicación */
export const AppThemesEnum = buildEnum(themes);
