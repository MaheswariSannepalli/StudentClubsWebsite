package com.website.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import com.website.model.phoregistrations;
public interface phoregistrationsrepository extends CrudRepository<phoregistrations, String>{

	//public List<litregistrations> findByfindAllByEvent(String event);

}
