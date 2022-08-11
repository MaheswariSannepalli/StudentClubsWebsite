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

import com.website.model.litregistrations;
import com.website.service.litregistrationsservice;
//mark class as Controller
@RestController
public class litregistrationscontroller 
{
	//autowire the BooksService class
	@Autowired
	litregistrationsservice booksService;
	//creating a get mapping that retrieves all the books detail from the database 
	@CrossOrigin(origins = "http://localhost:3000")
	@GetMapping("/litregistration")
	private List<litregistrations> getAllBooks() 
	{
	return booksService.getAllBooks();
	}
	//creating a get mapping that retrieves the detail of a specific book
	@GetMapping("/litregistration/{studentid}")
	private litregistrations getBooks(@PathVariable("studentid") String studentid) 
	{
	return booksService.getBooksById(studentid);
	}
	/*@GetMapping("/litregistration/event/{event}")
	private List<litregistrations> getEvents(@PathVariable("event") String event) 
	{
	return booksService.getStudentsByEvent(event);
	}*/
	//creating a delete mapping that deletes a specified book
	@DeleteMapping("/litregistration/{studentid}")
	private void deleteBook(@PathVariable("studentid") String studentid) 
	{
	booksService.delete(studentid);
	}
	//creating post mapping that post the book detail in the database
	@CrossOrigin(origins = "http://localhost:3000")
	@PostMapping("/litregistrations")
	private String saveBook(@RequestBody litregistrations books) 
	{
	booksService.saveOrUpdate(books);
	return books.getStudentid();
	}
	//creating put mapping that updates the book detail 
	@PutMapping("/litregistrations")
	private litregistrations update(@RequestBody litregistrations books) 
	{
	booksService.saveOrUpdate(books);
	return books;
	}
	}