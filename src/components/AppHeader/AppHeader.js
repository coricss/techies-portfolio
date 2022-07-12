import React from 'react';
import PropTypes from 'prop-types';
import styles from './AppHeader.module.css';
import { Link } from 'react-scroll';

class AppHeader extends React.Component {
  render () {
    return(
      <div className={styles.AppHeader+' fixed-top'} data-testid="AppHeader">
          <div className='container text-white d-flex justify-content-between align-items-center p-2'>
            <a className='text-decoration-none text-white' href=''>
              <div className='brand d-flex align-items-center'>
                <div className='mx-2'>
                  <img src={window.location.origin + '/img/UptoDevs-logo.png'} className="" alt="brand-logo" width='40px'/>
                </div>
                <div className="brand-name text-center">
                  <h3 className='m-0 fw-bold text-mint-blue'>UptoDevs</h3>
                </div>
              </div>
            </a>
            <div className="hamburger d-block d-md-none">
              <button className='btn btn-outline-light d-flex align-items-center'>
                <i class='bx bx-menu fs-1 fw-bold'></i>
              </button>
              
            </div>
            <div className='nav d-flex align-items-center d-none d-md-block'>
              <ul className={styles.NavList+' d-flex align-items-center list-unstyled gap-4 m-0 h-100'}>
                <li>
                  <Link activeClass={styles.Active} smooth spy className='text-decoration-none text-white' to="home">HOME</Link>
                </li>
                <li>
                  <Link activeClass={styles.Active} smooth spy className='text-decoration-none text-white' to="about">ABOUT</Link>
                </li>
                <li>
                  <Link activeClass={styles.Active} smooth spy className='text-decoration-none text-white' to="services">SERVICES</Link>
                </li>
                <li>
                  <Link activeClass={styles.Active} smooth spy className='text-decoration-none text-white' to="contact">CONTACT</Link>
                </li>
                <li>
                  <div className={styles.Search}>
                    <form action="" className={styles.SearchForm+' position-relative'}>
                      <input type="text" placeholder="Search UptoDevs" className="form-control" />
                      <button className={styles.SearchButton+' navbar-toggler'} >
                        <i class='bx bx-search fs-4 navbar-toggler-icon'></i>
                      </button>
                    </form>
                  </div>
                </li>
              </ul>
            </div>  
          </div>
        </div>
    )
  }
};

AppHeader.propTypes = {};

AppHeader.defaultProps = {};

export default AppHeader;
