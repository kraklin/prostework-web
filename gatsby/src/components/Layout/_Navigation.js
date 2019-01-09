import React, { Component } from 'react';
import Link from 'gatsby-link';

export class Navigation extends Component {
  render() {
    return (
      <div className="uk-position-top">
        <nav className="uk-navbar-container uk-navbar-transparent uk-light">
          <div className="uk-container uk-container-expand">
            <div data-uk-navbar>
              <div className="uk-navbar-left uk-visible@m">
                <Link className="uk-logo" to="/">
                  PROSTĚWORK
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
                      Request a Demo
                    </button>
                  </li>
                  <li>
                    <button
                      className="uk-hidden@m uk-button-default uk-margin-medium-right"
                      data-uk-toggle="target: #offcanvas"
                      type="button"
                    >
                      <span data-uk-icon="menu" />
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
