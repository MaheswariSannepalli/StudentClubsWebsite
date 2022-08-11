package com.website.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import com.website.model.litregistrations;
public interface litregistrationsrepository extends CrudRepository<litregistrations, String>{

	//public List<litregistrations> findByfindAllByEvent(String event);

}
