import { Col, Container, Navbar, Row } from "react-bootstrap";
import { Stickies } from "react-bootstrap-icons";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import { getThemeAsClassName } from "../../../redux/selectors/app";

// Módulo de notas
const Notes = () => {
  
  // Valor de tema
  const theme = useSelector((state) => getThemeAsClassName(state));

  return (
    <>
      <Row className="mb-4">
        <Col>
          <Navbar bg={theme} variant={theme} expand="lg">
            <Container>
              <Navbar.Brand href="">
                <Stickies
                  title="Módulo de notas"
                  size={32}
                  className="ico-horizontal"
                />
                Notas
              </Navbar.Brand>
            </Container>
          </Navbar>
        </Col>
      </Row>

      <Outlet />
    </>
  );
};

export default Notes;
