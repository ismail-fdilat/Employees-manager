import React, { Component } from "react";
import EmployeService from "../services/EmployeService";

export default class CreateEmployee extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: parseInt(this.props.match.params.id),
      firstname: "",
      lastname: "",
      email: ""
    };
    this.onchangefirstname = this.onchangefirstname.bind(this);
    this.onchangelastname = this.onchangelastname.bind(this);
    this.onchangeemail = this.onchangeemail.bind(this);
    this.CancelEmployee = this.CancelEmployee.bind(this);
    this.SaveorupdateEmployee = this.SaveorupdateEmployee.bind(this);
  }
  componentDidMount() {
    if (isNaN(this.state.id)) {
      console.log("save employee");
    } else {
      console.log("get employee by ID");
      console.log("id>>>" + this.state.id);
      EmployeService.getEmployeeById(this.state.id).then(res => {
        let employee = res.data;
        console.log(employee);
        this.setState({
          firstname: employee.first_name,
          lastname: employee.last_name,
          email: employee.email
        });
      });
    }
  }
  onchangefirstname(event) {
    this.setState({ firstname: event.target.value });
  }

  onchangelastname(event) {
    this.setState({ lastname: event.target.value });
  }

  onchangeemail(event) {
    this.setState({ email: event.target.value });
  }

  SaveorupdateEmployee(e) {
    e.preventDefault();
    console.log("save or update");
    let employee = {
      first_name: this.state.firstname,
      last_name: this.state.lastname,
      email: this.state.email
    };
    if (isNaN(this.state.id)) {
      console.log("######saving####");

      console.log(employee);
      EmployeService.setEmployee(employee).then(res => {
        this.props.history.replace("/Employees");
      });
    } else {
      console.log("######updating####");

      console.log(employee);
      EmployeService.updateEmployee(employee, this.state.id).then(res => {
        this.props.history.replace("/Employees");
      });
      console.log(this.state.id);
    }
  }

  CancelEmployee() {
    this.props.history.replace("/Employees");
  }

  render() {
    return (
      <div>
        <div className="mb-5 pb-3 CreateEmployee container">
          <div className="row   mt-4">
            <div className="card col-md-6 offset-md-3">
              <h3>
                {isNaN(this.state.id) ? "Add Employee" : "update Employee"}
              </h3>
              <div className=" card-body">
                <form>
                  <div className="text-align-start form-group">
                    <label className=" ">First Name:</label>
                    <input
                      type="text"
                      placeholder="First Name"
                      name="firstName"
                      className="form-control"
                      value={this.state.firstname}
                      onChange={this.onchangefirstname}
                    />
                  </div>
                  <div className="form-group">
                    <label>Last Name:</label>
                    <input
                      type="text"
                      placeholder="Last Name"
                      name="lastName"
                      className="form-control"
                      value={this.state.lastname}
                      onChange={this.onchangelastname}
                    />
                  </div>
                  <div className="form-group">
                    <label>email:</label>
                    <input
                      type="email"
                      placeholder="email address"
                      name="email"
                      className="form-control"
                      value={this.state.email}
                      onChange={this.onchangeemail}
                    />
                  </div>
                </form>
              </div>
              <div className="row card-footer">
                <button
                  className="offset-sm-1 btn btn-danger "
                  onClick={this.CancelEmployee}
                >
                  Cancel Employee
                </button>
                <button
                  className="offset-sm-1 btn btn-success "
                  onClick={this.SaveorupdateEmployee}
                >
                  save Employee
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
