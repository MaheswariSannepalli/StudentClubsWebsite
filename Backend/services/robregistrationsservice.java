package com.website.service;
import java.util.ArrayList;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.website.model.robregistrations;
import com.website.repository.robregistrationsrepository;
//defining the business logic
@Service
public class robregistrationsservice 
{
@Autowired
robregistrationsrepository booksRepository;
//getting all books record by using the method findaAll() of CrudRepository
public List<robregistrations> getAllBooks() 
{
List<robregistrations> books = new ArrayList<robregistrations>();
booksRepository.findAll().forEach(books1 -> books.add(books1));
return books;
}
//getting a specific record by using the method findById() of CrudRepository
public robregistrations getBooksById(String id) 
{
return booksRepository.findById(id).get();
}

public void saveOrUpdate(robregistrations books) 
{
booksRepository.save(books);
}
//deleting a specific record by using the method deleteById() of CrudRepository
public void delete(String id) 
{
booksRepository.deleteById(id);
}
//updating a record
public void update(robregistrations books, String studentid) 
{
booksRepository.save(books);
}
}