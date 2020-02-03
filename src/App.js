import React, { Component } from 'react';
import { renderRoutes } from 'react-router-config';

class App extends Component {
  render() { 
    return (
      <div className="default_layout">
        {renderRoutes(this.props.route.routes)}
      </div>
    );
  }
}

export default {
  component: App,
};
