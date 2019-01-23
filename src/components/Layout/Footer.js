import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export class Footer extends Component {
  render() {
    return (
      <div className="uk-section uk-section-secondary">
        <div className="uk-container alignuk-container-small uk-text-center">
          Vytvořeno s <FontAwesomeIcon icon="heart" /> a spoustou{" "}
          <FontAwesomeIcon icon="coffee" />
        </div>
      </div>
    );
  }
}

export default Footer;
