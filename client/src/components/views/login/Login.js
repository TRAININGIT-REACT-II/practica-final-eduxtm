import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userActions } from "../../../redux/actions/users";
import { userService } from "../../../shared/api/UserApi";
import UsuPassFragment from "../../common/UsuPassFragment";
import { getThemeAsClassName } from "../../../redux/selectors/app";

import "./Login.css";

const Login = () => {
  // Estado del formulario por defecto (valor inicial)
  const FORM_INITIAL_STATE = {
    username: "",
    password: "",
  };

  // Usuario de la app
  const appUserFromStorage = JSON.parse(localStorage.getItem("user"));
  const [appUser, setAppUser] = useState(appUserFromStorage);

  // Control del estado del formulario
  const [formLogin, setFormLogin] = useState(FORM_INITIAL_STATE);

  // Hook llamada a la API
  //const loginAPI = useApi("/api/login", "", {}, false);

  // Control de navegación
  const navigation = useNavigate();

  // Dispatcher de acciones Redux, para el store disponible
  // ** En este punto, debe existir un Provider de Redux con el store creado,
  // que envuelva a este componente y lo dote de esta funcionalidad.
  const dispatch = useDispatch();

  // Valor de tema
  const theme = useSelector((state) => getThemeAsClassName(state));

  // Función de gestión de cambio de valor en el formulario
  const handleFormChange = (e) => {
    setFormLogin({
      ...formLogin,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    // Si se intenta acceder al login con un usuario ya logado, se redirije a la pantalla principal (home)
    // console.log("Login::useEffect::appUser -> ", appUser);
    if (appUser && appUser.token !== "") {
      goToHome();
    }
  }, [appUser]);

  // Método de navegación a la pantalla principal (Home)
  const goToHome = () => {
    navigation("/");
  };

  // Gestión del submit del formulario
  const formSubmit = (e) => {
    e.preventDefault();
    // console.log("Submit del formulario", formLogin);

    // TODO: Validación de datos

    // Acción de autenticar usuario
    userService
      .logUser(formLogin)
      //.then((json) => console.log('Login::formSubmit::userService.logUser::json', json));
      .then((json) => {
        if (json.error != null) {
          // console.log("Error al logar al usuario! ", json.error);
        } else {
          // console.log("Iniciada sesión de usuario correctamente! ", json);
          // Guardamos los datos de usuario en el Local Storage para tenerlos disponibles
          localStorage.setItem("user", JSON.stringify(json));
          setAppUser(json);
          dispatch(userActions.doLogin(json));
        }
      });
  };

  return (
    <>
      <UsuPassFragment
        theme={theme}
        formLogin={formLogin}
        handleFormChange={handleFormChange}
        handleFormSubmit={formSubmit}
      />
      <span>Si todavía no tienes cuenta, crea una desde </span>
      <Link to={"/users/create"}>Aquí</Link>
    </>
  );
};

export default Login;
