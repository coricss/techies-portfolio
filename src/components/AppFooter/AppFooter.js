import React from 'react';
import PropTypes from 'prop-types';
import styles from './AppFooter.module.css';

const AppFooter = () => (
  <div className={styles.AppFooter+' fixed-bottom bg-dark'} data-testid="AppFooter">
    <div className='text-white'>
      <h1>Footer</h1>
    </div>
  </div>
);

AppFooter.propTypes = {};

AppFooter.defaultProps = {};

export default AppFooter;
