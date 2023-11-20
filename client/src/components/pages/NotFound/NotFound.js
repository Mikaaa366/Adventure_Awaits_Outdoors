import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRobot } from '@fortawesome/free-solid-svg-icons';
import styles from './NotFound.module.scss';

const NotFound = () => {

    return (
        <div className={styles.wrapper}>
            <h1 className={styles.text}>Not Found...</h1>   
            <FontAwesomeIcon icon={faRobot} className={styles.robot} />
        </div>
    );
};

export default NotFound;