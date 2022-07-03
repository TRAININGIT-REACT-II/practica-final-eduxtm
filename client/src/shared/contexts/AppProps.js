import { createContext } from "react";

// Contexto con la información de la aplicación
const AppProps = createContext({
    appName: ''
});

export default AppProps;