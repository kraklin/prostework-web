import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export class SocialIcons extends Component {
  render() {
    return (
      <div className="uk-section uk-section-muted">
          <div className="uk-text-center" >
            <div className="uk-flex-center">
              <h2 className="uk-heading">Chceš vědět, co je u nás nového</h2>
              <p>Sleduj nás na Facebooku</p>
            </div>
            <div className="uk-flex-center uk-text-center">
              <a href="https://www.facebook.com/prostework/" className="uk-button uk-button-primary"> ProstěWork na Facebooku</a>
            </div>
          </div>
      </div>
    );
  }
}

export default SocialIcons;
