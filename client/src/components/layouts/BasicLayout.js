import { React, useEffect, useState } from "react";
import { Container, Row, Col, Toast } from "react-bootstrap";
import UserInfo from "../views/user/UserInfo";
import NavigationPanel from "./NavigationPanel";
import ThemeToggle from "../common/ThemeToggle";
import useAppUser from "../../shared/hooks/useAppUser";
import useAppTheme from "../../shared/hooks/useAppTheme";
import { useSelector } from "react-redux";
import { getLastEvent } from "../../redux/selectors/app";

const BasicLayout = (props) => {
  
  // Contexto de configs/props de la aplicación
  //const appProps = useContext(AppProps);

  // Usuario de la aplicación
  const appUser = useAppUser();

  // Tema de la aplicación
  const theme = useAppTheme();

  // Último evento registrado
  const lastEvent = useSelector((state) => getLastEvent(state));
  const [showEvent, setShowEvent] = useState(false);

  useEffect(() => {
    setShowEvent(lastEvent != null);
  }, [lastEvent] )

  return (
    <>
      <Container id="content">
        <header id="header_section">
          <Row>
            <Col md="10">
              {/* // Navegación */}
              <NavigationPanel />
            </Col>
            <Col md="1" className={`header-widget ${theme.value}`}>
              {/* // Opciones de sesión */}
              <UserInfo />
            </Col>
            <Col md="1" className={theme.value}>
              {/* // Selector de tema */}
              <ThemeToggle />
            </Col>
          </Row>
        </header>
        <main>
          <Row id="main_body">
            <Col className="mb-4">{props.children}</Col>
          </Row>
        </main>
       
        {/* Panel de notificaciones */}
        {lastEvent && (
          <Row id="notifications">
            <Col md={{ span: 12, offset: 8 }}>
              <Toast
                show={showEvent}
                onClose={() => {
                  setShowEvent(false);
                }}
              >
                <Toast.Header>
                  <div
                    className={`event title status ${
                      lastEvent.status ? lastEvent.status : ""
                    }`}
                  ></div>
                  <strong className="me-auto">{lastEvent.action}</strong>
                </Toast.Header>
                <Toast.Body>{lastEvent.message}</Toast.Body>
              </Toast>
            </Col>
          </Row>
        )}
      </Container>
    </>
  );
};

export default BasicLayout;
