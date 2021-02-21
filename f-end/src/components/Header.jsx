import React, { Component } from "react";
import { Link } from "react-router-dom";
export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <header>
          <nav className="navbar navbar-expend-md navbar-dark bg-dark">
            <div className="d-flex justify-content-between">
              <a
                href="https://githube.com/ismail-fdilat"
                className="navbar-brand"
              >
                Employee management
              </a>
              <Link to="/Employees">
                <button className="btn btn-primary">List Employee</button>
              </Link>
            </div>
          </nav>
        </header>
      </div>
    );
  }
}
