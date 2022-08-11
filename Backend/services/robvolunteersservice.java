package com.website.service;
import java.util.ArrayList;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.website.model.robvolunteers;
import com.website.repository.robvolunteersrepository;
//defining the business logic
@Service
public class robvolunteersservice 
{
@Autowired
robvolunteersrepository booksRepository;
//getting all books record by using the method findaAll() of CrudRepository
public List<robvolunteers> getAllBooks() 
{
List<robvolunteers> books = new ArrayList<robvolunteers>();
booksRepository.findAll().forEach(books1 -> books.add(books1));
return books;
}
//getting a specific record by using the method findById() of CrudRepository
public robvolunteers getBooksById(String id) 
{
return booksRepository.findById(id).get();
}
//saving a specific record by using the method save() of CrudRepository
public void saveOrUpdate(robvolunteers books) 
{
booksRepository.save(books);
}
//deleting a specific record by using the method deleteById() of CrudRepository
public void delete(String id) 
{
booksRepository.deleteById(id);
}
//updating a record
public void update(robvolunteers books, String studentid) 
{
booksRepository.save(books);
}
}