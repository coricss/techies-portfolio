import React from 'react';
import PropTypes from 'prop-types';
import styles from './AppLayout.module.css';
import AppHeader from '../AppHeader/AppHeader.js';
import AppFooter from '../AppFooter/AppFooter.js';
import App from '../../App.js';

const AppLayout = () => (
  <div className={styles.AppLayout} data-testid="AppLayout">
    <AppHeader></AppHeader>
      <main className={styles.AppMain} data-testid="AppMain">
        <div className={styles.AppMainContent+' mt-5'} data-testid="AppMainContent">
          <App></App>
        </div>
      </main>
    <AppFooter></AppFooter>
  </div>
);

AppLayout.propTypes = {};

AppLayout.defaultProps = {};

export default AppLayout;
