import React from 'react';
import { MDBFooter } from 'mdb-react-ui-kit';
import styles from './Footer.module.scss';

const Footer = () => {
    const COPYRIGHT_YEAR = 2023;
    const COPYRIGHT_OWNER = "Janisz Dominika";

    return (
        <MDBFooter className={`text-center font-small ${styles.footer}`}>
            <div className='container'>
                &copy; {COPYRIGHT_OWNER} {COPYRIGHT_YEAR}
            </div>
        </MDBFooter>
    );
};

export default Footer;
