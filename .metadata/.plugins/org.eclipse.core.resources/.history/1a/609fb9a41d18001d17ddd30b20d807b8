package backend.springboot.model;

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
	private int id;
	
	@Column(name="original")
	private int originalNumber;
	
	@Column(name="result")
	private int resultNumber;
	
	public TopNumber() {
		
	}
	
	public TopNumber(String originalNumber) {
		super();
		this.originalNumber = Integer.parseInt(originalNumber);
		this.calculateResultNumber();
	}
	
	public int getId() {
		return this.id;
	}
	
	public void setId(int id) {
		this.id = id;
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
	
	public void calculateResultNumber() {
		int numero = this.originalNumber;
		int sum = 0;
        int n = sumDivisorsOfNumber(numero);
        int n1;
        
        for(int i = numero-1; i >= 1; i--) {
            n1 = sumDivisorsOfNumber(i);
            if(n == n1) {
                sum += 1;
            }
            n = n1;
        }
		this.resultNumber = sum;
	}
	
	public int sumDivisorsOfNumber(int numero) {
		int sum = 0;
        for (int i=1; i<=Math.sqrt(numero); i++)
        {
            if (numero%i==0)
            {
                if (numero/i == i)
                    sum += 1;
                else
                    sum += 2;
            }
        }
        return sum;
	}
}