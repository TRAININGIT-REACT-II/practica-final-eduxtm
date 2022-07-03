import { React } from "react";
import { Col, Row } from "react-bootstrap";

/**
 * Componente que representa el cuerpo/contenedor principal de la aplicación
 * @param {*} props
 * @returns
 */
const MainBody = ({ views }) => {
  return (
    <>
      <Row className="mt-4 mb-4" bg="dark">
        <Col md={{ span: 4, offset: 4 }}>{views}</Col>
      </Row>
    </>
  );
};

export default MainBody;
