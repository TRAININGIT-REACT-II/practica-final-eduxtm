
/**
 * Middleware que pinta trazas de log durante el flujo de REDUX
 * @param {*} store Store de REDUX
 * @returns Siguiente acción
 */
const logger = (store) => (next) => (action) => {

    console.log("REDUX: Acción -> ", action);

    console.log("REDUX: Estado actual -> ", store.getState());

    const result = next(action);

    console.log("REDUX: Estado siguiente -> ", store.getState());

    return result;
}

export default logger;