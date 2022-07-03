// ---------------------------------------
// Fichero de utilidades de Objetos
// ---------------------------------------

/**
 * Utilidad que crea un "Enumerado", a partir de un array de literales, que definen los valores
 * @param {[array]} strValues Array de literales (cadenas de texto)
 * @returns Enumerado con tantos elementos como literales
 */
export const buildEnum = (strValues) => {
  const enumValues = {};
  strValues.forEach((strValue) => {
    enumValues[strValue] = strValue;
  });

  return enumValues;
};

/**
 * Obtiene el valor de un array, a partir de un índice numérico
 * @param {array} arrayObj Array de elementos
 * @param {number} index Índice dentro del array
 * @returns Valor
 */
export const getArrayValue = (arrayObj, index) => {
  return arrayObj && index >= 0 && arrayObj.length >= index + 1
    ? arrayObj[index]
    : null;
};
