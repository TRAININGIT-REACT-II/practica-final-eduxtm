import { React, useEffect, useState } from "react";
import {
  BoxArrowRight,
  PersonCircle,
} from "react-bootstrap-icons";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { userActions } from "../../../redux/actions/users";
import { getUser } from "../../../redux/selectors/users";
import useAppTheme from "../../../shared/hooks/useAppTheme";

const UserInfo = ({ icoSize = 32 }) => {
  
  // Usuario de la aplicación
  const appUser = useSelector((state) => getUser(state));
  const [user, setUser] = useState(appUser);

  // Thema de la aplicación
  const theme = useAppTheme();

  // Dispatcher de acciones Redux
  const dispatch = useDispatch();

  // Control de navegación
  const navigation = useNavigate();

  useEffect(() => {
    // console.log("UserInfo::useEffect");
    setUser(appUser);
  }, [appUser]);

  /**
   * Evento de login
   */
  const logIn = () => {
    // console.log("UserInfo::logIn...");
    navigation("/login");
  };

  /**
   * Evento de logout
   */
  const logOut = () => {
    // console.log("UserInfo::logOut...");
    // Eliminamos los datos de usuario en el Local Storage
    localStorage.removeItem("user");
    dispatch(userActions.doLogout());
    navigation("/login");
  };

  function showSignedInUser() {
    return (
      <>
        <PersonCircle
          title={`Usuario ${user.username}`}
          size={icoSize}
          color="#0dcaf0"
          className="ico-horizontal"
        />
        <BoxArrowRight
          title="Logout"
          color={theme.isDark ? 'white' : "grey"}
          onClick={logOut}
          size={icoSize}
        />
      </>
    );
  }

  function showSignedOutUser() {
    return (
      <>
        <PersonCircle
          title="El usuario no ha iniciado sesión"
          size={icoSize}
          color={theme.isDark ? 'white' : "grey"}
          className="ico clickable ico-horizontal"
          onClick={logIn}
        />
        {/* <BoxArrowLeft title="Login" onClick={logIn} size={icoSize} /> */}
      </>
    );
  }

  return <>{user ? showSignedInUser() : showSignedOutUser()}</>;
};

export default UserInfo;
