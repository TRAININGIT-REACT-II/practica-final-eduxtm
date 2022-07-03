import { useContext } from "react";
import { useSelector } from "react-redux";
import AppProps from "../../../shared/contexts/AppProps";
import { getUser } from "../../../redux/selectors/users";
import { Col, Container, Navbar, Row } from "react-bootstrap";
import { House } from "react-bootstrap-icons";
import { getThemeAsClassName } from "../../../redux/selectors/app";

/**
 * Componente vista principal de la aplicación.
 * @returns
 */
const Home = () => {
  // Contexto de configs/props de la aplicación
  const appProps = useContext(AppProps);

  // Usuario de la aplicación
  const appUser = useSelector((state) => getUser(state));

  // Valor de tema
  const theme = useSelector((state) => getThemeAsClassName(state));

  return (
    <>
      <Row className="mb-4">
        <Col>
          <Navbar bg={theme} variant={theme} expand="lg">
            <Container>
              <Navbar.Brand href="">
                <House
                  title="Página principal"
                  size={32}
                  className="ico-horizontal"
                />
                Principal
              </Navbar.Brand>
            </Container>
          </Navbar>
        </Col>
      </Row>
      <h3>Hola! {appUser && appUser.username}</h3>
      <p>Muévete a través de las opciones de navegación del panel superior</p>
    </>
  );
};

export default Home;
