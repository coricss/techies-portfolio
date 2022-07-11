import React from 'react';
import PropTypes from 'prop-types';
import styles from './AppHeader.module.css';

const AppHeader = () => (
  <div className={styles.AppHeader+' fixed-top bg-dark'} data-testid="AppHeader">
    <div className='container text-white d-flex justify-content-between align-items-center p-2'>
      <a className='text-decoration-none text-white' href=''>
        <div className='brand d-flex align-items-center'>
          <div className='mx-2'>
            <img src={window.location.origin + '/img/favicon.png'} className="" alt="brand-logo" width='50px'/>
          </div>
          <div className="brand-name text-center">
            <h2 className='m-0'>TECHIES</h2>
            <p class='m-0'>Web Solutions</p>
          </div>
        </div>
      </a>
      <div className="hamburger d-block d-sm-none">
        <button className='btn btn-outline-light d-flex align-items-center'>
          <i class='bx bx-menu fs-1 fw-bold'></i>
        </button>
        
      </div>
      <div className='nav d-flex align-items-center d-none d-md-block'>
        <ul className='d-flex align-items-center list-unstyled gap-4 m-0 h-100'>
          <li className='border-bottom'>
            <a className='text-decoration-none text-white' href='#'>Home</a>
          </li>
          <li>
            <a className='text-decoration-none text-white' href='#'>About</a>
          </li>
          <li>
            <a className='text-decoration-none text-white' href='#'>Services</a>
          </li>
          <li>
            <a className='text-decoration-none text-white' href='#'>Contact</a>
          </li>
          <li>
            <div className="search">
              <input type="text" placeholder="Search" className="form-control" />
            </div>
          </li>
        </ul>
      </div>  
    </div>
  </div>
);

AppHeader.propTypes = {};

AppHeader.defaultProps = {};

export default AppHeader;
