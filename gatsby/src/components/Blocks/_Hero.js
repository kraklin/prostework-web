import React, { Component } from 'react';

export class Hero extends Component {
  render() {
    return (
      <div
        className="uk-background-cover uk-height-viewport uk-overlay uk-overlay-default uk-light uk-flex hero-bg"
        data-uk-parallax="bgy: -200"
      >

        <div className="uk-width-1-2@m uk-text-left uk-margin-auto uk-position-bottom uk-light">
          <h1>Vaše místo pro klidnou práci v centru Prostějova</h1>
        </div>
      </div>
    );
  }
}

export default Hero;
