// ===========================================
// Selectores para store de aplicación
// ===========================================

// Obtención del valor de tema
export const getTheme = (state) => state.app.theme;

// Obtención del valor de tema como valor de clase
export const getThemeAsClassName = (state) => state.app.theme ? state.app.theme.toLowerCase() : '';

// Obtención del valor del último evento
export const getLastEvent = (state) => state.app.lastEvent;
