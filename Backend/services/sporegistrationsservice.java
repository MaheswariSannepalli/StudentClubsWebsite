package com.website.service;
import java.util.ArrayList;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.website.model.sporegistrations;
import com.website.repository.sporegistrationsrepository;
//defining the business logic
@Service
public class sporegistrationsservice 
{
@Autowired
sporegistrationsrepository booksRepository;
//getting all books record by using the method findaAll() of CrudRepository
public List<sporegistrations> getAllBooks() 
{
List<sporegistrations> books = new ArrayList<sporegistrations>();
booksRepository.findAll().forEach(books1 -> books.add(books1));
return books;
}
//getting a specific record by using the method findById() of CrudRepository
public sporegistrations getBooksById(String id) 
{
return booksRepository.findById(id).get();
}
/*public List<litregistrations> getStudentsByEvent(String id) 
{
return booksRepository.findByfindAllByEvent(id);
}*/
//saving a specific record by using the method save() of CrudRepository
public void saveOrUpdate(sporegistrations books) 
{
booksRepository.save(books);
}
//deleting a specific record by using the method deleteById() of CrudRepository
public void delete(String id) 
{
booksRepository.deleteById(id);
}
//updating a record
public void update(sporegistrations books, String studentid) 
{
booksRepository.save(books);
}
}