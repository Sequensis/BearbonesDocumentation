import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { Switch } from 'react-router-dom';

export default class Animation extends Switch {
  render() {
    return (
      <ReactCSSTransitionGroup
        transitionAppear={true}
        transitionAppearTimeout={600}
        transitionEnterTimeout={600}
        transitionLeaveTimeout={200}
        transitionName={'doc-page-animation'}
      >
        {super.render()}
      </ReactCSSTransitionGroup>
    );
  }
}
