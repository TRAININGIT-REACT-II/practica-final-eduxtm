import { Container, Navbar, Col, Row } from "react-bootstrap";
import { People } from "react-bootstrap-icons";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import { getThemeAsClassName } from "../../../redux/selectors/app";

// Módulo de usuarios
const Users = () => {
  // Valor de tema
  const theme = useSelector((state) => getThemeAsClassName(state));

  return (
    <>
      <Row className="mb-4">
        <Col>
          <Navbar bg={theme} variant={theme} expand="lg">
            <Container>
              <Navbar.Brand href="">
                <People
                  title="Módulo usuarios"
                  size={32}
                  className="ico-horizontal"
                />
                Usuarios
              </Navbar.Brand>
            </Container>
          </Navbar>
        </Col>
      </Row>

      <Outlet />
    </>
  );
};

export default Users;
