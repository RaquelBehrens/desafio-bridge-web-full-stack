package net.javaguides.springboot.controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;

import net.javaguides.springboot.exception.ResourceNotFoundException;
import net.javaguides.springboot.model.TopNumber;
import net.javaguides.springboot.repository.TopNumberRepository;

@CrossOrigin(origins="http://localhost:3000")
@RestController
@RequestMapping("/api/v1/")
public class TopNumberController {

	@Autowired
	private TopNumberRepository topNumberRepository;
	
	//find all TopNumbers
	@GetMapping("/topnumbers")
	public List<TopNumber> getAllTopNumbers() {
		return topNumberRepository.findAll();
	}
	
	@PostMapping("/topnumbers")
	public TopNumber createTopNumber(@RequestBody TopNumber topNumber) {
		return topNumberRepository.save(topNumber);
	}
}
