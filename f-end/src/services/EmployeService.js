import axios from "axios";
const Base_Employee = "http://localhost:8080/api/v1/employees";
// const add_Employee = "http://localhost:8080/api/v1/add-employee";
class EmployeeService {
  getEmployee() {
    return axios.get(Base_Employee);
  }
  setEmployee(employee) {
    return axios.post(Base_Employee, employee);
  }
  updateEmployee(employee, employeeID) {
    console.log("axios>>>> DATA");
    console.log(employee);
    console.log("id=>> " + employeeID);
    return axios.put(Base_Employee + "/" + employeeID, employee);
  }
  getEmployeeById(id) {
    return axios.get(Base_Employee + "/" + id);
  }
  deleteEmployee(employeeId) {
    return axios.delete(Base_Employee + "/" + employeeId);
  }
}
export default new EmployeeService();
