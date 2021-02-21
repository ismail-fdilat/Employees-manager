package net.javaguides.springbootbackend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import net.javaguides.springbootbackend.exception.ResourceNotfoundException;
import net.javaguides.springbootbackend.model.Employee;
import net.javaguides.springbootbackend.repository.EmployeeRepository;
@CrossOrigin(origins=("http://localhost:3000"))
@RestController
@RequestMapping("/api/v1/")
public class EmployeeController {
	@Autowired
	private EmployeeRepository employeeRepository ;
	
	// get all employees
	@GetMapping("/employees")
	public List<Employee> getAllEmployee(){
		return employeeRepository.findAll();
	}
	//Create Employee
	@PostMapping("/employees")
	public Employee createEmployee(@RequestBody Employee e) {
		return employeeRepository.save(e);
	}
	//Get Employee By ID
	@GetMapping("/employees/{ID}")
	public ResponseEntity<Employee> getEmployeeById(@PathVariable Long ID){
		Employee employee = employeeRepository.findById(ID)
				.orElseThrow(() -> new ResourceNotfoundException(" Employee do not Exist with id " + ID));
		return ResponseEntity.ok(employee);
	}
	//Update Employee 
	@PutMapping("/employees/{ID}")
	public ResponseEntity<Employee> updateEmployee (@PathVariable Long ID ,@RequestBody Employee em){
		Employee employee = employeeRepository.findById(ID)
				.orElseThrow(() -> new ResourceNotfoundException(" Employee do not Exist with id " + ID));
		if (em.getEmail() != null) employee.setEmail(em.getEmail());
		if (em.getLast_name() != null)employee.setLast_name(em.getLast_name());
		if (em.getFirst_name() != null)employee.setFirst_name(em.getFirst_name());
		Employee updatedemployee = employeeRepository.save(employee);
		return ResponseEntity.ok(updatedemployee);
	}	
	@DeleteMapping("/employees/{ID}")
	public void deleteEmployee(@PathVariable Long ID) {
		Employee em = employeeRepository.findById(ID)
				.orElseThrow(() -> new ResourceNotfoundException(" Employee do not Exist with id " + ID));
		employeeRepository.delete(em);
	}
	}
