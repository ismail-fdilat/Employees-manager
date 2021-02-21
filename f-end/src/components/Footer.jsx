import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    return (
      <div className=" fixed-bottom">
        <footer className=" d-flex justify-content-center footer">
          <span className="text-muted d-flex align-items-center">
            All Rights reserved @javaguides
          </span>
        </footer>
      </div>
    );
  }
}
