import React, { Component } from 'react';
import Link from 'gatsby-link';

import Logo from '../../images/logo.png';

const divStyle = {
		position: "relative",
		zIndex: 980,
    WebkitTransition: 'all', // note the capital 'W' here
    msTransition: 'all' // 'ms' is the only lowercase vendor prefix
};

export class Navigation extends Component {
  render() {
    return (
        <div uk-sticky="animation: uk-animation-slide-top; sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky uk-dark; cls-inactive: uk-navbar-transparent; top: 200">
        <div className="uk-position-relative">
        <div className="uk-position-top">
          <nav className="uk-navbar-container uk-navbar-transparent" >
            <div className="uk-container uk-container-large">
              <div data-uk-navbar>
                <div className="uk-margin-small-top">
                  <Link className="uk-logo" to="/">
                    <img src={Logo} width="100" height="50"/>
                  </Link>
                </div>
                <div className="uk-navbar-right">
                  <ul className="uk-navbar-nav uk-visible@s">
                    <li>
                      <Link to="page-2">Úvod</Link>
                    </li>
                    <li>
                      <Link to="page-2">O nás</Link>
                    </li>
                    <li>
                      <Link to="page-2">Kontakt</Link>
                    </li>
                
                    <li className="uk-navbar-item">
                      <button className="uk-button uk-button-primary">
                        Chci přijít
                      </button>
                    </li>
                  </ul>
                  <a uk-navbar-toggle-icon="" href="#offcanvas" uk-toggle="" className="uk-navbar-toggle uk-hidden@s uk-navbar-toggle-icon uk-icon"></a>
                </div>
              </div>
            </div>
          </nav>
      </div>
      </div>
      </div>
    );
  }
}

export default Navigation;
