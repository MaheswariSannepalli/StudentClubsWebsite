package com.website.controller;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.website.model.phoregistrations;
import com.website.service.phoregistrationsservice;
//mark class as Controller
@RestController
public class phoregistrationscontroller 
{
	//autowire the BooksService class
	@Autowired
	phoregistrationsservice booksService;
	//creating a get mapping that retrieves all the books detail from the database 
	@CrossOrigin(origins = "http://localhost:3000")
	@GetMapping("/phoregistration")
	private List<phoregistrations> getAllBooks() 
	{
	return booksService.getAllBooks();
	}
	//creating a get mapping that retrieves the detail of a specific book
	@GetMapping("/phoregistration/{studentid}")
	private phoregistrations getBooks(@PathVariable("studentid") String studentid) 
	{
	return booksService.getBooksById(studentid);
	}
	/*@GetMapping("/litregistration/event/{event}")
	private List<litregistrations> getEvents(@PathVariable("event") String event) 
	{
	return booksService.getStudentsByEvent(event);
	}*/
	//creating a delete mapping that deletes a specified book
	@DeleteMapping("/phoregistration/{studentid}")
	private void deleteBook(@PathVariable("studentid") String studentid) 
	{
	booksService.delete(studentid);
	}
	//creating post mapping that post the book detail in the database
	@CrossOrigin(origins = "http://localhost:3000")
	@PostMapping("/phoregistrations")
	private String saveBook(@RequestBody phoregistrations books) 
	{
	booksService.saveOrUpdate(books);
	return books.getStudentid();
	}
	//creating put mapping that updates the book detail 
	@PutMapping("/phoregistrations")
	private phoregistrations update(@RequestBody phoregistrations books) 
	{
	booksService.saveOrUpdate(books);
	return books;
	}
	}