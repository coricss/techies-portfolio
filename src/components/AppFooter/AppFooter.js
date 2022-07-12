import React from 'react';
import PropTypes from 'prop-types';
import styles from './AppFooter.module.css';

class AppFooter extends React.Component {
  render() {
    return(
    <div className={styles.AppFooter} data-testid="AppFooter">
      <div className='container text-white'>
        <div className='row'>
        <center>
            <div class="socmed w-50 d-flex align-items-center justify-content-center">
              <a class="text-decoration-none" href="#" target="_blank">
                <button class="btn btn-outline-light rounded-circle d-flex align-items-center justify-content-center p-2 mx-2 btn-socmed">
                  <i class='bx bxl-twitter fs-3' ></i>
                </button>
              </a>
               <a class="text-decoration-none" href="#" target="_blank">
                <button class="btn btn-outline-light rounded-circle d-flex align-items-center justify-content-center p-2 mx-2 btn-socmed">
                  <i class='bx bxl-youtube fs-3' ></i>
                </button>
              </a>
               <a class="text-decoration-none" href="#" target="_blank">
                <button class="btn btn-outline-light rounded-circle d-flex align-items-center justify-content-center p-2 mx-2 btn-socmed">
                  <i class='bx bxl-instagram fs-3' ></i>
                </button>
              </a>
               <a class="text-decoration-none" href="#" target="_blank">
                <button class="btn btn-outline-light rounded-circle d-flex align-items-center justify-content-center p-2 mx-2 btn-socmed">
                  <i class='bx bxl-facebook-circle fs-3' ></i>
                </button>
              </a>
               <a class="text-decoration-none" href="#" target="_blank">
                <button class="btn btn-outline-light rounded-circle d-flex align-items-center justify-content-center p-2 mx-2 btn-socmed">
                  <i class='bx bxl-discord-alt fs-3' ></i>
                </button>
              </a>
            </div>
          </center>
        </div>
      </div>
    </div>
    );
  }
};

AppFooter.propTypes = {};

AppFooter.defaultProps = {};

export default AppFooter;
