// ===========================================
// Selectores para store de usuario
// ===========================================

// Obtención del valor de usuario
export const getUser = (state) => state.user ? state.user.data : null;

// Obtención del Token
export const getToken = (state) => state.user.data ? state.user.data.token : null;