import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import { Footer} from './_Footer';
import { Navigation } from './_Navigation';
import { OffCanvas } from './_OffCanvas';

import './styles.scss';

export class Layout extends Component {
  state = { ready: false };
  componentDidMount = () => {
    if (typeof window !== 'undefined') {
      const uikit = require('uikit');
      const icons = require('uikit/dist/js/uikit-icons.min');
      uikit.use(icons);
      this.setState({ ready: true });
    }
  };

  render() {
    return (
      <div>
        {this.state.ready && (
          <div>
            <Navigation />
            <div>{this.props.children}</div>
            <Footer />
            <OffCanvas />
          </div>
        )}
      </div>
    );
  }
}

export default Layout;

Layout.propTypes = {
  children: PropTypes.array,
};
