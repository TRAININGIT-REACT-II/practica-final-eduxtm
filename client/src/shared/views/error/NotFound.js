import { useNavigate } from 'react-router-dom';

const NotFound = () => {

    const navigate = useNavigate();

    return <>
        <p>Página no encontrada!</p>
        <a href='#' onClick={navigate(-1)}>Volver a la página anterior</a>
    </>

}

export default NotFound;