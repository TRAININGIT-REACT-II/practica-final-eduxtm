import Moment from 'moment';

// ---------------------------------------
// Fichero de utilidades de Fechas
// ---------------------------------------

const DEFAULT_DATE_FORMAT = 'DD/MM/YYYY HH:mm:ss';

/**
 * Función que Formatea un objeto fecha, a partir del patrón de texto pasado
 * @param {date} date Fecha a formatear
 * @param {string} format Formato
 */
export const formatDate = (date, format = DEFAULT_DATE_FORMAT) => {
    return date ? Moment(date).format(format) : null;
}

