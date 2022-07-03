import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { getUser } from "../../redux/selectors/users";

// Listado de rutas públicas, permiten ser visitadas sin necesitas de estar logado en la app
const defaultPublicRoutes = ["/users/create"];

// Ruta de login por defecto
const defaultLoginRoute = "/login";

/**
 * Hook para control del usuario de la aplicación
 */
const useAppUser = (
  user = null,
  publicRoutes = defaultPublicRoutes,
  loginRoute = defaultLoginRoute
) => {

  // Datos de usuario
  const currentUser = useSelector((state) => getUser(state));
  const [data, setData] = useState(user ? user : currentUser);

  // Control de navegación
  const navigation = useNavigate();
  const location = useLocation()

  useEffect(() => {
    //console.log("useAppUser::useEffect::usuario ", data);
    //console.log("useAppUser::useEffect::location.pathname: ", location.pathname);
    
    // Control de rutas privadas
    const isPrivateRoute = !(location.pathname === loginRoute)
        && (!publicRoutes || publicRoutes.length == 0 || !publicRoutes.includes(location.pathname));
    //console.log("useAppUser::useEffect::Do I have to deny route?: ", isPrivateRoute);
    
    // Si no hay datos de usuario, se produce una redirección a la pantalla de login
    // Solo en caso de que se pretenda acceder a una ruta privada.
    if (isPrivateRoute && !(data && data.token !== "")) {
        navigation(loginRoute);
    }
  }, [data]);

  return {
    data,
  };
};

export default useAppUser;
