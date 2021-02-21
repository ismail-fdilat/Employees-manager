import React, { Component } from "react";
import EmployeService from "../services/EmployeService";
import { confirmAlert } from "react-confirm-alert"; // Import
import "react-confirm-alert/src/react-confirm-alert.css"; // Import css

class ListEmployee extends Component {
  _ismounted = false;
  constructor(props) {
    super(props);
    this.state = {
      employees: []
    };
    this.addEmployee = this.addEmployee.bind(this);
    this.DeleteEmployee = this.DeleteEmployee.bind(this);
    this.updateEmployee = this.updateEmployee.bind(this);
    this.ViewEmployee = this.ViewEmployee.bind(this);
  }
  componentDidMount() {
    this._ismounted = true;
    EmployeService.getEmployee().then(res => {
      this.setState({ employees: res.data });
    });
  }
  addEmployee() {
    this.props.history.push("/add-Employee");
  }
  updateEmployee(id) {
    this.props.history.push("/update-Employee/" + id);
    console.log(id);
  }

  DeleteEmployee(id) {
    confirmAlert({
      title: "Confirm the action",
      message: "Are you sure to delete the employee.",
      buttons: [
        {
          label: "Yes",
          className: "btn btn-success",
          onClick: () => {
            EmployeService.deleteEmployee(id).then(res => {
              this.setState({
                employees: this.state.employees.filter(
                  employee => employee.id !== id
                )
              });
            });
          }
        },
        {
          label: "No",
          className: "btn btn-danger"
        }
      ]
    });
  }
  ViewEmployee(id) {
    console.log(id);
    this.props.history.replace("/view-Employee/" + id);
  }
  render() {
    return (
      <div className="container mb-5">
        <h1 className="text-center">List Employees</h1>
        <div className="row  m-2">
          <button
            className="offset-sm-1 btn btn-primary "
            onClick={this.addEmployee}
          >
            Add Employee
          </button>
        </div>
        <div className="row  ">
          <div className="w-100  d-flex justify-content-center">
            <table className=" col-md-10 table table-striped table-bordered table-dark">
              <thead>
                <tr>
                  <th>Employee LastName</th>
                  <th>Employee FirstName</th>
                  <th>Employee email</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {this.state.employees.map(employee => (
                  <tr key={employee.id}>
                    <td> {employee.first_name}</td>
                    <td> {employee.last_name}</td>
                    <td> {employee.email}</td>
                    <td>
                      <button
                        className=" btn btn-info"
                        onClick={() => this.updateEmployee(employee.id)}
                      >
                        update
                      </button>
                      <button
                        className="ml-2 btn btn-danger  "
                        onClick={() => this.DeleteEmployee(employee.id)}
                      >
                        Delete
                      </button>
                      <button
                        className="ml-2 btn btn-secondary  "
                        onClick={() => this.ViewEmployee(employee.id)}
                      >
                        View
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default ListEmployee;
