import React, { Component } from 'react';

export class PageHeader extends Component {
  render() {
    return (
      <div
        className="uk-height-medium uk-flex uk-flex-center uk-flex-middle uk-background-cover uk-light" data-src={this.props.imgSrc} uk-img="">
				<div className="uk-width-1-2@m uk-text-center uk-margin-auto uk-light">
					<h1 className="uk-heading-primary uk-margin-large-left" >{this.props.title}</h1>
				</div>
      </div>
    );
  }
}

export default PageHeader;
