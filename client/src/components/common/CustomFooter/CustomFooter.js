import styles from './CustomFooter.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const CustomFooter = () => {
  return (
    <div className={styles.root}>
      <footer className={styles.footer}>
        <div className={styles.container}>
          <div className={styles.row}>
            <div className={styles['footer-col']}>
              <ul>
                <h4>About Us</h4>
                <li>
                  <a href='/'>Mountain Trips</a>
                </li>
                <li>
                  <a href='/'>Climbing Walls</a>
                </li>
                <li>
                  <a href='/'>Mindfulness Practice</a>
                </li>
              </ul>
            </div>
            <div className={styles['footer-col']}>
              <ul>
                <h4>Help</h4>
                <li>
                  <a href='/'>FAQ</a>
                </li>
                <li>
                  <a href='/'>Privacy Policy</a>
                </li>
                <li>
                  <a href='/'>Terms and Conditions</a>
                </li>
                <li>
                  <a href='/'>Permissions</a>
                </li>
              </ul>
            </div>
            <div className={styles['footer-col']}>
              <ul>
                <h4>Online Shop</h4>
                <li>
                  <a href='/'>Courses</a>
                </li>
                <li>
                  <a href='/'>Chat</a>
                </li>
                <li>
                  <a href='/'>Training</a>
                </li>
              </ul>
            </div>
            <div className={styles['footer-col']}>
              <ul className={styles['social-links']}>
                <h4>Follow Us</h4>
                <a href='/'>
                  <FontAwesomeIcon icon={faFacebook} />
                </a>
                <a href='/'>
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
                <a href='/'>
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
                <a href='/'>
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default CustomFooter;