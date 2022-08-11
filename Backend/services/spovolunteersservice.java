package com.website.service;
import java.util.ArrayList;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.website.model.spovolunteers;
import com.website.repository.spovolunteersrepository;
//defining the business logic
@Service
public class spovolunteersservice 
{
@Autowired
spovolunteersrepository booksRepository;
//getting all books record by using the method findaAll() of CrudRepository
public List<spovolunteers> getAllBooks() 
{
List<spovolunteers> books = new ArrayList<spovolunteers>();
booksRepository.findAll().forEach(books1 -> books.add(books1));
return books;
}
//getting a specific record by using the method findById() of CrudRepository
public spovolunteers getBooksById(String id) 
{
return booksRepository.findById(id).get();
}
//saving a specific record by using the method save() of CrudRepository
public void saveOrUpdate(spovolunteers books) 
{
booksRepository.save(books);
}
//deleting a specific record by using the method deleteById() of CrudRepository
public void delete(String id) 
{
booksRepository.deleteById(id);
}
//updating a record
public void update(spovolunteers books, String studentid) 
{
booksRepository.save(books);
}
}