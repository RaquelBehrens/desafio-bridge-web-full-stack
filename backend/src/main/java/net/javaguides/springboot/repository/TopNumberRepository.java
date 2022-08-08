package net.javaguides.springboot.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import net.javaguides.springboot.model.TopNumber;

@Repository
public interface TopNumberRepository extends JpaRepository<TopNumber, Integer> {

}
