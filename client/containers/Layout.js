import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Layout extends Component {

  render () {
    return (
      <div>
        <div className="navbar navbar-fixed-top navbar-inverse" role="navigation">
          <div className="container">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <Link className="navbar-brand" to="/home">Skeleton</Link>
            </div>
            <div id="nav-items" className="collapse navbar-collapse">
              <ul className="nav navbar-nav">
                <li><Link to="/home">somewhere1</Link></li>
                <li><Link to="/home">somewhere2</Link></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="container content" style={{marginTop: 50}}>
          { this.props.children }
        </div>
      </div>
    );
  }
}