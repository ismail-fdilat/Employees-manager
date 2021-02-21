package net.javaguides.springbootbackend.model;

import javax.persistence.*;

@Entity
@Table(name= "employee")
public class Employee {

    @Id @GeneratedValue(strategy= GenerationType.IDENTITY)
    private Long id;
    @Column(name="First_name")
    private String first_name;
    @Column(name="Last_name")
    private String last_name;
    @Column(name="Email")
    private String email;

    public Employee(String first_name, String last_name, String email) {
        this.first_name = first_name;
        this.last_name = last_name;
        this.email = email;
    }

    public Employee() {
    }

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getFirst_name() {
		return first_name;
	}

	public void setFirst_name(String first_name) {
		this.first_name = first_name;
	}

	public String getLast_name() {
		return last_name;
	}

	public void setLast_name(String last_name) {
		this.last_name = last_name;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}
}