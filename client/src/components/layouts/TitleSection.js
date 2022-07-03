import { React } from "react";
import { Col, Container, Navbar, Row } from "react-bootstrap";

const TitleSection = ({ section = "Home", icon = null }) => {
  const theme = useSelector((state) => getTheme(state));
  const [navbarTheme, setNavbarTheme] = useState("");

  useEffect(() => {
    // console.log("TitleSection::useEffect");
    setNavbarTheme(AppThemesEnum.DARK === theme ? "dark" : "light");
  }, [theme]);

  return (
    <>
      <Row>
        <Col>
          <Navbar bg={navbarTheme} variant={navbarTheme} expand="lg">
            <Container fluid>
              <Navbar.Brand href="#">
                {icon}
                {section}
              </Navbar.Brand>
            </Container>
          </Navbar>
        </Col>
      </Row>
    </>
  );
};

export default TitleSection;
