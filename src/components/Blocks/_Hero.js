import React, { Component } from 'react';
import HeroImage from 'Images/hero-bg_1200.jpg'

export class Hero extends Component {
  render() {
    return (
      <div
        className="uk-height-viewport uk-flex uk-flex-center uk-flex-middle uk-background-cover uk-light" data-src={HeroImage} uk-img="">
				<div className="uk-width-1-2@m uk-text-left uk-margin-auto uk-position-center uk-light">
					<h1 className="uk-heading-primary uk-margin-large-left" >Vaše místo pro klidnou práci<br/>v centru Prostějova</h1>
				</div>
      </div>
    );
  }
}

export default Hero;
