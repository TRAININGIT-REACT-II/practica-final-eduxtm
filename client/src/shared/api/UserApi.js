
// ------------------------------
// API para operaciones de usuario
// ------------------------------

// Registro de usuario
// ------------------------------
const CREATE_USER_API_PATH = "/api/register";
const createUserRequest = (userData) => ({
  method: "POST",
  headers: {
    "Content-Type": "application/json; charset=UTF-8"
  },
  body: JSON.stringify(userData),
});

/**
 * Método que llama a la API de registro de usuario a partir de credenciales usu/pass
 * @param {*} userData Credenciales de usuario
 */
const registerUser = async (userData) => {
  let username = null;
  if (userData && userData.username) {
    username = userData.username;
  }

  if (!username) {
    //console.log("No se puede ejecutar la operación de creación de usuario. Datos incorrectos!");
  }

  const response = await fetch(CREATE_USER_API_PATH, createUserRequest(userData));
  const json = await response.json();
  return json;
};

// Login de usuario
// ------------------------------
const LOG_USER_API_PATH = "/api/login";
const logUserRequestParams = (loginData) => ({
  method: "POST",
  headers: {
    "Content-Type": "application/json; charset=UTF-8"
  },
  body: JSON.stringify(loginData),
});

/**
 * Método que llama a la API de log de usuario a partir de credenciales usu/pass
 * @param {*} loginData Credenciales de usuario
 * @returns Objeto con los dato de usuario
 */
const logUserRequest = async (loginData) => {
  let username = null;
  if (loginData && loginData.username) {
    username = loginData.username;
  }

  if (!username) {
    console.log(
      "No se puede ejecutar la operación de login. Credenciales incorrectas!"
    );
  }

  const response = await fetch(LOG_USER_API_PATH, logUserRequestParams(loginData));
  const json = await response.json();
  return json;
  
};

export const userService = {
  registerUser,
  logUser: logUserRequest
}
