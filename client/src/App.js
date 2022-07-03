import { useContext, useEffect } from "react";
import { Provider } from "react-redux";
import ErrorBoundary from "./components/common/ErrorBoundary";
import AppRoutesProvider from "./components/views/AppRoutesProvider";
import AppProps from "./shared/contexts/AppProps";

import store from "./redux/store";

// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";

// Componente principal de la aplicación.
const App = () => {
  
  // Contexto de configs/props de la aplicación
  const appProps = useContext(AppProps);

  useEffect(() => {
    // Inicializa los valores del contexto de la aplicación
    initAppPropsValues();
  }, []);

  /**
   * Función de inicialización de valores del contexto de la app
   */
  function initAppPropsValues() {
    appProps.appName = "TrainingNotes";
  }

  // Mostramos la aplicación
  return (
    <Provider store={store}>
      <ErrorBoundary message="Ha ocurrido un error en la aplicación">
        <AppRoutesProvider />
      </ErrorBoundary>
    </Provider>
  );
};

export default App;
