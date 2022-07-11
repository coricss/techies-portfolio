import React from 'react';
import PropTypes from 'prop-types';
import styles from './AppHeader.module.css';

const AppHeader = () => (
  <div className={styles.AppHeader+' fixed-top bg-dark'} data-testid="AppHeader">
    <div className='text-white'>
      <h1>Header</h1>
    </div>
  </div>
);

AppHeader.propTypes = {};

AppHeader.defaultProps = {};

export default AppHeader;
