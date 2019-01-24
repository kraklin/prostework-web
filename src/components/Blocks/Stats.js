import React, { Component } from "react";

export class Stats extends Component {
  render() {
    return (
      <div className="uk-section uk-section-default">
        <div className="uk-container uk-container-small">
          <h3 className="uk-heading">
            <span>Quickly look at these numbers!</span>
          </h3>
          <div
            className="uk-flex uk-grid-small uk-child-width-expand@s uk-text-center"
            uk-grid
          >
            <div>
              <div className="uk-card uk-card-default uk-card-body">Item</div>
            </div>
            <div>
              <div className="uk-card uk-card-default uk-card-body">Item</div>
            </div>
            <div>
              <div className="uk-card uk-card-default uk-card-body">Item</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Stats;
