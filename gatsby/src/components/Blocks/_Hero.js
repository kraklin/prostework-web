import React, { Component } from 'react';

export class Hero extends Component {
  render() {
    return (
      <div
        className="uk-background-cover uk-height-viewport uk-light uk-flex hero-bg"
        data-uk-parallax="bgy: -200"
      >
				<div className="uk-width-1-2@m uk-text-left uk-margin-auto uk-position-center uk-light">
					<h1 className="uk-heading-primary uk-margin-large-left" >Vaše místo pro klidnou práci<br/>v centru Prostějova</h1>
				</div>
      </div>
    );
  }
}

export default Hero;
