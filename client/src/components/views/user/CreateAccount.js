import { useState } from "react";
import { useDispatch } from "react-redux";
import { appActions } from "../../../redux/actions/app";
import { userActions } from "../../../redux/actions/users";
//import useApi from '../../../shared/hooks/useApi';
import { userService } from "../../../shared/api/UserApi";
import { Button, Col, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";

const CreateAccount = () => {
  // Estado del formulario por defecto (valor inicial)
  const FORM_INITIAL_STATE = {
    username: "",
    password: "",
  };

  // Control del estado del formulario
  const [accountForm, setAccountForm] = useState(FORM_INITIAL_STATE);

  // Hook llamada a la API
  //const registerUserAPI = useApi(API_URL + "/register", "", {}, false);

  // Dispatcher de acciones Redux, para el store disponible
  const dispatch = useDispatch();

  // Actualización del estado de los campos del formulario (método controlado)
  const handleFormChange = (e) => {
    setAccountForm({
      ...accountForm,
      [e.target.name]: e.target.value,
    });
  };

  // Gestión del submit del formulario
  const formSubmit = (e) => {
    e.preventDefault();
    // console.log("Submit del formulario", accountForm);

    // TODO: Validación de datos

    // Acción de registrar usuario
    let event = { action: 'Creación de usuario', status: null, message: '' };
    userService.registerUser(accountForm).then((json) => {
      if (json.error != null) {
        event = {...event, status: 'ko', message: json.error};
        // console.log("Error al registrar al usuario!", json.error);
      } else {
        event = {...event, status: 'ok', message: "Usuario registrado correctamente!"};
        // console.log(event.message, json);
        dispatch(userActions.registerUser(accountForm));
      }
      dispatch(appActions.traceEvent(event));
    });
  };

  return (
    <>
      <h3>Crea una nueva cuenta de usuario</h3>
      <Row>
        <Col md={{ offset: "4", span: "4" }}>
          <div
            className="flex"
            style={{ justifyContent: "center", alignContent: "center" }}
          ></div>
          <form>
            <label htmlFor="username">Usuario</label>
            <input
              id="username"
              name="username"
              type="text"
              defaultValue={accountForm.username}
              onChange={handleFormChange}
              required
            />
            <label htmlFor="password">Password</label>
            <input
              id="password"
              name="password"
              type="password"
              defaultValue={accountForm.password}
              onChange={handleFormChange}
              required
            />
            <div
              style={{ display: "flex", marginTop: "10px", marginLeft: "35%" }}
            >
              <Button type="button" onClick={formSubmit}>
                <FontAwesomeIcon icon={solid("user-plus")} />
                <span style={{ marginLeft: "10px" }}>Crear</span>
              </Button>
            </div>
          </form>
        </Col>
      </Row>
    </>
  );
};

export default CreateAccount;
