import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div>
        <Navbar>
          <Container>
            <Navbar.Brand href='/'>AA outdoor</Navbar.Brand>
            <Navbar.Toggle aria-controls='responsive-navbar-nav' />
            <Navbar.Collapse id='responsive-nabar-nav'>
            <Nav className='ms-auto'>
              <Nav.Link as={NavLink} to='/'>Home</Nav.Link>
            </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
    </div>
  ) 
}

export default NavBar;