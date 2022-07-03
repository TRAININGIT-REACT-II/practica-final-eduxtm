import { React, useEffect, useState } from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { useSelector } from "react-redux";
import { getTheme } from "../../redux/selectors/app";
import { AppThemesEnum } from "../../shared/data/AppThemes";

const NavigationPanel = () => {
  const theme = useSelector((state) => getTheme(state));
  const [navbarTheme, setNavbarTheme] = useState("");

  useEffect(() => {
    // console.log("TopPanel::useEffect");
    setNavbarTheme(AppThemesEnum.DARK === theme ? "dark" : "light");
  }, [theme]);

  return (
    <>
      <Navbar bg={navbarTheme} variant={navbarTheme} expand="lg">
        <Container>
          <Navbar.Brand href="" />
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="/">Home</Nav.Link>
              <NavDropdown title="Notas" id="navbarScrollingDropdownNotes">
                <NavDropdown.Item href="/notes">Listar notas</NavDropdown.Item>
                <NavDropdown.Item href="/notes/create">
                  Crear nota
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Usuarios" id="navbarScrollingDropdownUsers">
                <NavDropdown.Item href="/users/create">
                  Crear usuario
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavigationPanel;
