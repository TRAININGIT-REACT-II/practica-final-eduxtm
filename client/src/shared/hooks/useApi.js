import { useEffect, useMemo, useState } from "react";

/**
 * Hook para realizar llamadas a la API
 * @param {string} url Url de la API
 * @param {string} Método (POST/GET/UPDATE)
 * @param {*} token Token de usuario
 * @returns Datos de la petición, devueltos por la API
 */
const useApi = (url, token = "", initialParams = {}, performOnMount = true) => {

    // Control de carga de la petición
    const [loading, setLoading] = useState(performOnMount);
    // Datos de la petición
    const [data, setData] = useState(null);
    // Error en la petición
    const [error, setError] = useState(null);
    // Control de carga de parámetros
    const [fetchParams, setFetchParams] = useState(initialParams);
    // Control de ejecución de la llamada
    const [performRequest, setPerformRequest] = useState(performOnMount);

    const updateParams = (newParams) => {
        setFetchParams(newParams);
    };

    const perform = () => {
        setPerformRequest(true);
    };

    const config = useMemo(() => {
        
        // Configuración inicial/por defecto
        const initialConfig = {
            method: "GET",
            // body: {},
            ...fetchParams,
        };

        // Control de Token en las cabeceras de la petición
        if(token && token !== ""){
            if(initialConfig.headers == null){
                initialConfig.headers = {};
            }
            initialConfig.headers["api-token"] = token;
        }

        return initialConfig;

    }, [url, token, fetchParams]);


    useEffect(() => {

        // Control de ejecución, únicamente cuando el flag de perform request lo habilita
        if(performRequest){
            
            // Flag de carga -> Se realiza la carga
            if(!loading){
                setLoading(true);
            }

            // Limpiamos los errores
            setError("");

            fetch(url, config)
                .then((res) => res.json())
                .then((json) => {
                    if (json.error != null) {
                        // console.log('Error al llamar a la API!', json.error);
                        setData(null);
                        setError(json.error)
                    } else {
                        // console.log('Llamada a la API exitosa!', json);
                        setData(json);
                        setError("")
                    }
                })
                .catch((err) => console.log(err))
                .finally(() => setLoading(false)); // Flag de carga -> Se termina la carga
        }

    }, [url, config, performRequest]);

    return {
        loading,
        data,
        error,
        updateParams,
        perform,
    };
};

export default useApi;