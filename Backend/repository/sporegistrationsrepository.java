package com.website.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import com.website.model.sporegistrations;
public interface sporegistrationsrepository extends CrudRepository<sporegistrations, String>{

	//public List<litregistrations> findByfindAllByEvent(String event);

}
