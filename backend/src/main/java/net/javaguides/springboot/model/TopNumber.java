package net.javaguides.springboot.model;

import javax.persistence.Entity;
import javax.persistence.Table;
import javax.persistence.Id;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Column;

@Entity
@Table(name = "TopNumbers")
public class TopNumber {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int originalNumber;
	
	@Column(name="result")
	private int resultNumber;
	
	public TopNumber() {
		
	}
	
	public TopNumber(int originalNumber) {
		super();
		this.originalNumber = originalNumber;
	}

	public int getOriginalNumber() {
		return this.originalNumber;
	}
	
	public void setOriginalNumber(int number) {
		this.originalNumber = number;
	}
	
	public int getResultNumber() {
		return this.resultNumber;
	}
	
	public void setResultNumber(int number) {
		this.resultNumber = number;
	}
}
