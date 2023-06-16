import React from 'react';
import styles from './style.module.css';

const AboutLayout = ({
    children,
}: {
    children: React.ReactNode
}) => {
    return (
        <div className={styles.main}>
            <h6>There will be common layout for about.</h6>
            {children}
        </div>
    );
};

export default AboutLayout;