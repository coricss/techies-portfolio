import React from 'react';
import PropTypes from 'prop-types';
import styles from './AppECommerce.module.css';
import AppHeader from '../AppHeader/AppHeader.js';

const AppECommerce = () => (
  <div className={styles.AppECommerce} data-testid="AppECommerce">
    <AppHeader></AppHeader>
      <div className={styles.AppECommerceContent+' text-white text-center'}>
        <h1>E-commerce</h1>
      </div>
  </div>
);

AppECommerce.propTypes = {};

AppECommerce.defaultProps = {};

export default AppECommerce;
