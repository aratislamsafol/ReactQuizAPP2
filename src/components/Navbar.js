import logo from './assets/images/logo.png';
import Image from "./Image";
import { useEffect,useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link } from 'react-router-dom';
// import DropDownMenuSpace from './dropDownMenuSpace';

function Navbars() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    window.onscroll = function() {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
  }, []);
  return (
    <>
      {[false].map((expand) => (
        <Navbar key={expand} expand={expand} className={`fixed-top ${scrolled ? "navbar-container floatingNav" : "navbar-container"}`}>
          <Container>
            <Navbar.Brand href="/">
                <Image src={logo} />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Menu
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <div className='d-flex flex-row text-center justify-content-center gap-2'>
                    <Nav.Link href="/login/" className="login">Login</Nav.Link>
                    <Nav.Link href="/reg/" className="signUp">SignUp</Nav.Link>
                  </div>
                  <Nav.Link href="/">Home</Nav.Link>
                  <Nav.Link href="#action2">Link</Nav.Link>
                  <NavDropdown
                    title="Dropdown"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                    className="navbarDropDown"
                  >
                     <ul class="list-group">
                        <li class="list-group-item"><Link to="">All Courses</Link></li>
                        <li class="list-group-item"><Link to="">Note</Link></li>
                     </ul>

                    {/* <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">
                      Another action
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">
                      Something else here
                    </NavDropdown.Item> */}
                  </NavDropdown> 
                  <Nav.Link href="#action4">Home</Nav.Link>
                  <Nav.Link href="#action5">Link</Nav.Link>
                </Nav>
                
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default Navbars;
