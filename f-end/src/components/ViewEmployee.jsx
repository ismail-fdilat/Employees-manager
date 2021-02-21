import React, { Component } from "react";

import EmployeService from "../services/EmployeService";
export default class ViewEmployee extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.match.params.id,
      employee: {}
    };
  }
  componentDidMount() {
    EmployeService.getEmployeeById(this.state.id).then(res => {
      this.setState({ employee: res.data });
    });
  }
  render() {
    return (
      <div
        className=" d-flex mb-4 align-items-center"
        style={{ height: "84vh" }}
      >
        <div className="card col-md-6 offset-3">
          <h3> View Employee Details</h3>
          <div className="card-body">
            <div className="row d-flex flex-column ">
              <div className="d-flex flex-row">
                <label> Employee First Name:</label>
                <div className="ml-5"> {this.state.employee.first_name}</div>
              </div>
              <div className="d-flex flex-row">
                <label> Employee Last Name:</label>
                <div className="ml-5"> {this.state.employee.last_name}</div>
              </div>
              <div className="d-flex flex-row">
                <label> Employee email address:</label>
                <div className="ml-5"> {this.state.employee.email}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
