import styles from './Navbar.module.scss';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBasket } from '@fortawesome/free-solid-svg-icons';
import { faMountain } from '@fortawesome/free-solid-svg-icons';
import { useSelector } from 'react-redux';


const NavBar = () => {
  const cartItems = useSelector((state) => state.cart.products);
  const totalItemsInCart = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <div>
      <Navbar className={styles.navbar}>
       <Container>
          <Navbar.Brand href='/' className={`text-light ${styles.branding}`}>
          Adventure Awaits Outdoors
          <FontAwesomeIcon icon={faMountain} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='responsive-navbar-nav' />
          <Navbar.Collapse id='responsive-nabar-nav'>
            <Nav className={`ms-auto`}>
              <Nav.Link as={NavLink} to='/' className={styles.link}>
                Home
              </Nav.Link>
              <Nav.Link as={NavLink} to='/cart' className={styles.cartLink}>
                <div className={styles.cartIcon}>
                  <FontAwesomeIcon icon={faShoppingBasket} size="lg" />
                </div>
              </Nav.Link>
              <Nav.Link as={NavLink} to='/cart' className={styles.counterLink}>
                <div className={styles.counter}>{totalItemsInCart}</div>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
       </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;