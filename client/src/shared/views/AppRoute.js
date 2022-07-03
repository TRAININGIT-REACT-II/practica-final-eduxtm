import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import User from "../contexts/User";

// Obtenemos el componente a renderizar y cualquier otro parámetro
const AppRoute = ({ children, ...others }) => {

    // Obtenemos los datos del usuario desde el Contexto
    const { current } = useContext(User);

    // Si el usuario está registrado, cargamos el componente de la ruta.
    // Si no, hacemos un redirect a login
    return (
        <Route
            {...others}
            render={() =>
                current.signedIn ? (children) : (
                    <Redirect
                        to={{ pathname: "/login", state: { msg: "Por favor, haz login primero" }  }}
                    />
                )
            }
        />
    );
};

export default AppRoute;