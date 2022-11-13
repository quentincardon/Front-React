import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Header() {
  return (
    
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/Accueil">Eligibilities</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="Brands" id="collasible-nav-dropdown">
              <NavDropdown.Item href="brands">Brands List</NavDropdown.Item>
              <NavDropdown.Item href="brandsForm">
                Create Brands
              </NavDropdown.Item> 
            </NavDropdown>
            <NavDropdown title="Nature" id="collasible-nav-dropdown">
              <NavDropdown.Item href="nature">Nature List</NavDropdown.Item>
              <NavDropdown.Item href="natureForm">
                Create Nature
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Guarantee" id="collasible-nav-dropdown">
              <NavDropdown.Item href="guarantee">Guarantee List</NavDropdown.Item>
              <NavDropdown.Item href="guaranteeForm">
                Create Guarantee
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Student" id="collasible-nav-dropdown">
              <NavDropdown.Item href="/create-student">Create Student test</NavDropdown.Item>
              <NavDropdown.Item href="/student-list">
                Create Guarantee
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="/Connexion">Sign in </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;