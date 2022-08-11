package com.website.service;
import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.website.model.phoadmins;
import com.website.repository.phoadminsrepository;
//defining the business logic
@Service
public class phoadminsservice 
{
@Autowired
phoadminsrepository booksRepository;
//getting all books record by using the method findaAll() of CrudRepository
public List<phoadmins> getAllBooks() 
{
List<phoadmins> books = new ArrayList<phoadmins>();
booksRepository.findAll().forEach(books1 -> books.add(books1));
return books;
}
//getting a specific record by using the method findById() of CrudRepository
public phoadmins getBooksById(String id) 
{
return booksRepository.findById(id).get();
}

//saving a specific record by using the method save() of CrudRepository
public void saveOrUpdate(phoadmins books) 
{
booksRepository.save(books);
}
//deleting a specific record by using the method deleteById() of CrudRepository
public void delete(String id) 
{
booksRepository.deleteById(id);
}
//updating a record
public void update(phoadmins books) 
{
	phoadmins admin = booksRepository.findById(books.coid).get();
	admin.coid=books.coid;
	admin.coname=books.coname;
	admin.codept=books.codept;
	admin.corole=books.corole;
	admin.coemail=books.coemail;
	admin.copassword=books.copassword;
	
	booksRepository.save(admin);
}
}