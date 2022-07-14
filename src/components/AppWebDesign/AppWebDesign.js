import React from 'react';
import PropTypes from 'prop-types';
import styles from './AppWebDesign.module.css';
import AppHeader from '../AppHeader/AppHeader.js';
// import AppFooter from '../AppFooter/AppFooter.js';

const AppWebDesign = () => (
  <div className={styles.AppWebDesign} data-testid="AppWebDesign">
    <AppHeader></AppHeader>
      <div className={styles.AppWebDesignContent+' text-white text-center'}>
        <h1>WEB DESIGN</h1>
      </div>
    {/* <AppFooter></AppFooter> */}
  </div>
);

AppWebDesign.propTypes = {};

AppWebDesign.defaultProps = {};

export default AppWebDesign;
