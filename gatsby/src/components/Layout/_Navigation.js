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
			<div uk-sticky="" > 
        <nav className="uk-navbar-container ui-light" uk-navbar="" >
          <div className="uk-container uk-container-expand">
            <div data-uk-navbar>
              <div className="uk-navbar-left uk-margin-small uk-visible@m">
                <Link className="uk-logo" to="/">
									<img src={Logo} width="100" height="50"/>
                </Link>
              </div>
              <div className="uk-navbar-right">
                <ul className="uk-navbar-nav">
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
                  <li>
                    <button
                      className="uk-hidden@m uk-button-secondary uk-margin-medium-right"
                      data-uk-toggle="target: #offcanvas"
                      type="button"
                    >
                      <span uk-icon="icon: table" />
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navigation;
