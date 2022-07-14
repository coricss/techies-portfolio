import React from 'react';
import PropTypes from 'prop-types';
import styles from './AppWebDeployment.module.css';
import AppHeader from '../AppHeader/AppHeader.js';

const AppWebDeployment = () => (
  <div className={styles.AppWebDeployment} data-testid="AppWebDeployment">
    <AppHeader></AppHeader>
      <div className={styles.AppWebDeploymentContent+' text-white text-center'}>
        <h1>WEB DEPLOYMENT</h1>
      </div>
  </div>
);

AppWebDeployment.propTypes = {};

AppWebDeployment.defaultProps = {};

export default AppWebDeployment;
