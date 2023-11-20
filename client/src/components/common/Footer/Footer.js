import React from 'react';
import { MDBFooter } from 'mdb-react-ui-kit';
import styles from './Footer.module.scss';

const Footer = () => {

    return (
        <MDBFooter color='blue' className={`text-center font-small ${styles.footer}`} style={{ color: 'white' }} bgColor="dark">
        <div className='container'>
            &copy; Janisz Dominika 2023
        </div>
        </MDBFooter>
    );
};

export default Footer;